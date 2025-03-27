"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import useMobile from "../../hooks/use-mobile"

const roomsData = [
  {
    path: "/rooms/Room1.jpg",
    title: "Deluxe Suite",
    description: "Spacious accommodation with ocean views",
  },
  {
    path: "/rooms/Room2.jpg",
    title: "Premium Villa",
    description: "Private villa with exclusive amenities",
  },
  {
    path: "/rooms/Room3.jpg",
    title: "Executive Room",
    description: "Elegant room with modern furnishings",
  },
]

export default function Rooms() {
  const isMobile = useMobile(768)

  // Render room card
  const RoomCard = ({ room }: { room: (typeof roomsData)[0] }) => (
    <div className="relative group h-full">
      <img
        src={room.path || "/placeholder.svg"}
        alt={room.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl font-medium">{room.title}</h3>
        <p className="text-sm">{room.description}</p>
      </div>
    </div>
  )

  return (
    <section className="container mx-auto max-w-7xl h-full relative z-20 my-10 md:my-20">
      <div className="mb-6 md:mb-8">
        <div className="w-16 h-1 bg-[var(--tertiary)] mb-1"></div>
        <h3 className="text-sm md:text-base font-light">Raising Comfort To The Highest Level</h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light">Rooms & Suites</h1>
      </div>

      {/* Desktop view - Grid layout */}
      {!isMobile && (
        <div className="hidden md:flex md:flex-row gap-8">
          {roomsData.map((room, index) => (
            <div key={index} className="w-1/3">
              <RoomCard room={room} />
            </div>
          ))}
        </div>
      )}

      {/* Mobile view - Carousel */}
      {isMobile && (
        <Carousel className="w-full">
          <CarouselContent>
            {roomsData.map((room, index) => (
              <CarouselItem key={index}>
                <div className="p-1 h-[300px]">
                  <RoomCard room={room} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      )}

      {/* Always visible on mobile, hidden on desktop */}
      <div className="flex justify-center mt-4 md:hidden">
        <p className="text-sm text-muted-foreground">Swipe to see more rooms</p>
      </div>
    </section>
  )
}

