import RoomCard from "../../components/rooms/room-card";
import { Button } from "../../components/ui/button";

export default function Rooms() {
  const rooms = [
    {
      name: "Superior Room",
      price: "4,500",
      img: "/rooms/Room1.jpg",
    },
    {
      name: "Deluxe Room",
      price: "4,500",
      img: "/rooms/Room2.jpg",
    },
    {
      name: "Suite",
      price: "9,500",
      img: "/rooms/Room3.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <header className="relative h-screen bg-[url('/rooms/rooms-bg.jpg')] bg-cover bg-center">
        <div className="container mx-auto max-w-7xl min-h-screen relative z-10 px-4 flex items-center">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <div className="flex flex-col justify-start w-full md:w-2/3 text-[var(--background)]">
              <h4 className="text-base md:text-lg font-light uppercase leading-tight">
                LUXURY HOTEL AND RESORT
              </h4>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase leading-tight">
                THE BEST LUXURY RESORT IN SAMAL
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/*Rooms Section */}
      <section className="container mx-auto max-w-7xl flex flex-col items-center w-full py-12 md:py-16 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center w-full">
          <img src="/black-logo.svg" alt="blk" className="w-auto h-auto" />
          <h1 className="text-5xl font-light uppercase leading-tight">
            KAWAII'S ROOMS AND SUITES
          </h1>
          <p className="text-base font-light">
            FREE BREAKFAST AND VANISHING ISLAND TOUR IN EVERY BOOKING
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
      </section>

      {/* Superior Room */}
      <section className="bg-[var(--primary2)] text-[var(--background)]">
        <div className="flex flex-row container mx-auto max-w-7xl flex-col items-center w-full py-12 md:py-16 px-4 md:px-6 gap-16">
          <div className="basis-3/5">
            <img
              src="/rooms/Room1.jpg"
              alt="superior"
              className="w-auto h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col w-full basis-2/5">
            <div className="w-16 md:w-24 h-1 bg-[var(--background)] mb-4" />
            <h2 className="text-3xl md:text-4xl font-light uppercase mb-4 text-center md:text-left">
              Superior Room
            </h2>
            <p className="text-base font-light">
              OUR SUPERIOR ROOMS OFFER A COZY AND COMFORTABLE RETREAT FOR TWO.
              ENJOY A GOOD NIGHT'S SLEEP ON OUR TWIN BEDS, RELAX WITH FREE
              WI-FI, AND TAKE A REFRESHING DIP IN OUR SWIMMING POOL. YOUR STAY
              ALSO INCLUDES A THRILLING VANISHING ISLAND TOUR ON OUR SPEED BOAT
              AND A DELICIOUS BREAKFAST FOR TWO.
            </p>
          </div>
        </div>
      </section>

      {/* Suite Room */}
      <section className="">
        <div className="flex flex-col container mx-auto max-w-7xl flex-col  justify-center items-center w-full py-12 md:py-16 px-4 md:px-6 gap-16">
          <div className="flex flex-col w-full basis-2/5 justify-center items-center">
            <div className="w-16 md:w-24 h-1 bg-[var(--tertiary)] mb-4" />
            <h2 className="text-3xl md:text-4xl font-light uppercase mb-4 text-center md:text-left">
              Suite Room
            </h2>
            <p className="text-base font-light text-center">
              INDULGE IN ULTIMATE LUXURY IN OUR SPACIOUS SUITE ROOMS. PERFECT
              FOR FAMILIES OR GROUPS OF FRIENDS, THESE ROOMS OFFER BREATHTAKING
              VIEWS, MODERN AMENITIES, AND EXCLUSIVE PERKS. UNWIND IN STYLE AND
              ENJOY A MEMORABLE STAY.
            </p>
          </div>
          <div className="basis-3/5">
            <img
              src="/rooms/Room3.jpg"
              alt="suite"
              className="w-[600px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Deluxe Room */}
      <section className="bg-[var(--primary2)] text-[var(--background)]">
        <div className="flex flex-row container mx-auto max-w-7xl flex-col items-center w-full py-12 md:py-16 px-4 md:px-6 gap-16">
          <div className="flex flex-col w-full basis-2/5">
            <div className="w-16 md:w-24 h-1 bg-[var(--background)] mb-4" />
            <h2 className="text-3xl md:text-4xl font-light uppercase mb-4 text-center md:text-left">
              Deluxe Room
            </h2>
            <p className="text-base font-light">
              OUR DELUXE ROOMS OFFER A BLEND OF COMFORT AND ELEGANCE. ENJOY A
              RESTFUL NIGHT'S SLEEP ON OUR KING-SIZED BED, RELAX WITH FREE
              WI-FI, AND TAKE A REFRESHING DIP IN OUR SWIMMING POOL. YOUR STAY
              ALSO INCLUDES A THRILLING VANISHING ISLAND TOUR ON OUR SPEED BOAT
              AND A DELICIOUS BREAKFAST FOR TWO.
            </p>
          </div>
          <div className="basis-3/5">
            <img
              src="/rooms/Room2.jpg"
              alt="deluxe"
              className="w-auto h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* End */}
      <section className="h-[50vh] flex flex-col justify-center items-center">
        <div className="container mx-auto max-w-7xl flex flex-col justify-center items-center w-full py-12 md:py-16 px-4 md:px-6">
          <div className="w-16 md:w-24 h-1 bg-[var(--tertiary)] mb-4" />
          <h2 className="text-3xl md:text-4xl font-light uppercase mb-4 text-center">
          FREE BREAKFAST AND VANISHING ISLAND TOUR IN EVERY BOOKING
          </h2>
          <Button size="lg" className="bg-[var(--tertiary)] ">Book Now</Button>
        </div>
      </section>
    </div>
  );
}
