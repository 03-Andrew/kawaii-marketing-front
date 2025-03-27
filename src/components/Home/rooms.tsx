
const roomsPath = [
    "/rooms/Room1.jpg",
    "/rooms/Room2.jpg",
    "/rooms/Room3.jpg",
]
export default function Rooms() {
    return (
        <section className="container mx-auto max-w-7xl px-4 md:px-6 h-full relative z-20 m-20">
        <div className="mb-8">
        <div className="w-16 h-1 bg-[var(--tertiary)] mb-1"></div>
            <h3 className="text-base font-light">Raising Comfort To The Highest Level</h3>
            <h1 className="text-6xl font-light">Rooms & Suites</h1>
        </div>
        <div className="flex flex-row gap-8">
            {roomsPath.map((room, index) => (
                <div className="">
                    <img 
                        key={index} 
                        src={room} 
                        alt={`Room ${index + 1}`} 
                        className="hover:scale-105 transition-transform duration-300"
                    />
                </div>
            ))}
        </div>
        </section>
    )
}