import { useState } from "react";
export default function Welcome() {
    const [hovered, setHovered] = useState("boat");

    return (
        <div className="container mx-auto max-w-7xl px-4 md:px-6 
        h-full relative z-20 flex flex-row gap-8 my-20 py-10">

            <div className="basis-1/2">
                <div className="justify-center">

                    <div className="relative w-[400px] h-[500px]">
                        {/* Bottom Image */}
                        <img
                            src="/landing-page/SlideBoat.jpg"
                            alt="Slide Boat"
                            className={`w-full h-auto shadow-lg relative z-10 hover:z-20 
                            top-0
                            hover:scale-105 hover:shadow-2xl transition-all duration-300 
                            ${hovered === 'golf' ? 'z-20 scale-105 shadow-2xl' : 'z-10'}`}
                            onMouseEnter={() => setHovered('golf')}
                        />

                        {/* Top Image (Shifted Down & Right) */}
                        <img
                            src="/landing-page/Golfcart.jpg"
                            alt="Golf Cart"
                            className={`absolute top-50 left-30 w-full h-auto shadow-xl z-10 hover:z-20 
            hover:scale-105 hover:shadow-2xl transition-all duration-300 
            ${hovered === 'boat' ? 'z-20 scale-105 shadow-2xl' : 'z-10'}`}
                            onMouseEnter={() => setHovered('boat')}
                        />
                    </div>
                </div>
            </div>


            <div className="basis-1/2 flex flex-col gap-4 items-center justify-center text-center lg:items-start lg:text-left">
                <div>
                    <div className="w-16 h-1 bg-[var(--tertiary)] mb-1"></div>
                    <p className="text-lg font-light">RAISING COMFORT TO THE HIGHEST LEVEL</p>
                </div>


                <h1 className="text-4xl font-light uppercase whitespace-pre-line leading-tight">
                    Welcome to Kawaii Resort
                </h1>

                <p className="pl-4 text-base font-light max-w-md">
                    Unwind in the idyllic setting of Kawaii Beach Resort. Immerse yourself
                    in the beauty of pristine beaches, crystal-clear waters, and lush
                    greenery. Our luxurious accommodations and world-class amenities are
                    designed to provide an unforgettable escape.
                </p>
            </div>

        </div>
    )
}