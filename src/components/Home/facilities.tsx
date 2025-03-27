import OurFacilitiesCard from "./ourFacilities-card";

export default function Facilities() {
    return (
        <section className="w-full relative h-[60vh]">
            {/* Background Image */}
            <img
                src={"/landing-page/Floater.jpg"}
                alt="Background"
                className="w-full h-[60vh] object-cover absolute object-center"
            />
            <div className="container mx-auto max-w-7xl px-4 md:px-6 h-full relative z-20">
                <div className="absolute right-0 h-full flex items-center m-8">
                    <OurFacilitiesCard />
                </div>
            </div>
        </section>
    )
}