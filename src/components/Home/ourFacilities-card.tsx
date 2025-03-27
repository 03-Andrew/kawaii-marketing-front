export default function OurFacilitiesCard() {
    return (
        <div className="bg-[var(--primary2)] w-full max-w-[450px] h-[500px] relative overflow-hidden shadow-lg flex flex-col items-center justify-center text-center p-6">
            {/* Background Image */}
            <img 
                src="/landing-page/HollowLogo.svg" 
                alt="Hollow Logo" 
                className="absolute top-0 left-0 h-auto object-contain opacity-20"
            />

            {/* Text Content */}
            <h2 className="text-xl md:text-2xl font-bold text-white relative z-10">Our Facilities</h2>
            <p className="text-sm md:text-base text-white relative z-10 mt-2 max-w-[80%]">
                Experience world-class amenities designed to make your stay comfortable and luxurious.
            </p>
        </div>
    );
}
