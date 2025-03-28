import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { motion } from "framer-motion";

export default function Welcome() {
  const [hovered, setHovered] = useState("golf");

  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-20 flex flex-col lg:flex-row gap-8 my-10 md:my-20 py-6 md:py-10">
      <div className="w-full lg:basis-1/2 flex justify-center lg:justify-start">
        <div className="relative w-[600px] h-[550px] hidden sm:block">
          <div className="absolute left-0 w-[70%]">
            <motion.img
              src="/landing-page/Golfcart.jpg"
              alt="Golf Cart"
              className={`h-auto shadow-lg relative ml-5 mt-5 
              transition-all duration-300 ease-in-out
              ${hovered === "golf" ? "z-20 scale-105 shadow-2xl" : "z-10"}
            `}
              onMouseEnter={() => setHovered("golf")}
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[70%]">
            <motion.img
              src="/landing-page/SlideBoat.jpg"
              alt="Slide Boat"
              className={`h-auto shadow-lg relative mr-5 mb-5 
              transition-all duration-300 ease-in-out
              ${hovered === "boat" ? "z-20 scale-105 shadow-2xl" : "z-10"}
            `}
              onMouseEnter={() => setHovered("boat")}
            />
          </div>
        </div>

        <div className="block sm:hidden w-full max-w-xs">
          <Tabs defaultValue="golf" className="w-full">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="golf">Golf Cart</TabsTrigger>
              <TabsTrigger value="boat">Slide Boat</TabsTrigger>
            </TabsList>

            <TabsContent value="golf">
              <img
                src="/landing-page/Golfcart.jpg"
                alt="Golf Cart"
                className="shadow-lg"
              />
            </TabsContent>
            <TabsContent value="boat">
              <img
                src="/landing-page/SlideBoat.jpg"
                alt="Slide Boat"
                className="shadow-lg"
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="w-full lg:basis-1/2 flex flex-col gap-4 items-center justify-center text-center lg:items-start lg:text-left">
        <div>
          <div className="w-16 h-1 bg-[var(--tertiary)] mb-1"></div>
          <p className="text-base md:text-lg font-light">
            RAISING COMFORT TO THE HIGHEST LEVEL
          </p>
        </div>

        <h1 className="text-3xl md:text-4xl font-light uppercase whitespace-pre-line leading-tight">
          Welcome to Kawaii Resort
        </h1>

        <p className="text-sm md:text-base font-light max-w-md">
          Unwind in the idyllic setting of Kawaii Beach Resort. Immerse yourself
          in the beauty of pristine beaches, crystal-clear waters, and lush
          greenery. Our luxurious accommodations and world-class amenities are
          designed to provide an unforgettable escape.
        </p>
      </div>
    </div>
  );
}
