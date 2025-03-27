import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { motion } from "framer-motion";

export default function Resto() {
    return (
        <div className="container mx-auto max-w-7xl relative z-20 flex flex-col lg:flex-row gap-8 my-10 md:my-20 py-6 md:py-10">

            {/* Text Section */}
            {/* Text Section */}
            <div className="w-full lg:basis-1/2 flex flex-col gap-4 items-center justify-center text-center lg:items-end lg:text-right">
                <h1 className="text-3xl md:text-4xl font-light uppercase whitespace-pre-line leading-tight">
                    Our Restaurant
                </h1>

                <div className="flex flex-col gap-2 w-full lg:w-auto">
                    {/* Move divider to the right */}
                    <div className="w-full flex justify-end">
                        <div className="w-16 h-1 bg-[var(--tertiary)]"></div>
                    </div>

                    <p className="text-base md:text-lg font-light max-w-md">
                        The Buffet breakfast is served in the lounge on the ground floor and
                        also outside in front of our swimming pool
                    </p>
                </div>

                <p className="text-sm md:text-base font-light max-w-md">
                    Indulge in a culinary journey through the Philippines. Our talented chefs prepare a variety of authentic Filipino dishes,
                    from savory adobo to sweet halo-halo. Experience the rich flavors and cultural heritage of the Philippines, all in one place.
                </p>
            </div>
            {/* Image Section */}
            <div className="w-full lg:basis-1/2 flex justify-center lg:justify-start">
                <img src="/landing-page/Restaurant.jpg" alt="Resto" className="w-full h-auto object-cover" />
            </div>
        </div>
    );
}
