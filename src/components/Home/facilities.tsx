import OurFacilitiesCard from "./ourFacilities-card";

export default function Facilities() {
    return (
        <section className="relative items-center h-full">
            {/* Background Image */}
            <div className="absolute inset-0 flex items-center py-15 h-[500px] w-full">
                <img
                    src="/landing-page/Floater.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Centered Card */}
            <div className="relative z-10 container mx-auto max-w-7xl flex lg:justify-end md:justify-center sm:justify-center">
                <div className="">
                    <OurFacilitiesCard />
                </div>
            </div>
        </section>
    );
}
