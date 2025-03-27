import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="w-full bg-[var(--primary2)] text-white">
            <div className="container mx-auto max-w-7xl px-4 py-10">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 text-center lg:text-left">

                    {/* Logo and Brand Name Section */}
                    <div className="flex flex-col items-center lg:items-start space-y-0">
                        <img src="/landing-page/Kawaii_Logo.svg" alt="Kawaii Logo" className="w-40 h-auto" />
                        <img src="/landing-page/Kawaii_Name.svg" alt="Kawaii Name" className="w-40 h-auto" />
                    </div>

                    {/* Contact Information Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-normal font-Lora">CONTACT</h3>
                        <p className="font-semibold">(+63) 920 639 7251</p>
                        <p className="font-semibold">kawaiibeachresortcorp@gmail.com</p>
                        <p className="text-sm font-light mt-4 max-w-xs mx-auto lg:mx-0">
                            Contact Us Today! Our team is here to help you craft the perfect stay at Kawaii, from room selection to unforgettable activities, for a truly memorable getaway.
                        </p>
                    </div>

                    {/* Social Media Section */}
                    <div className="space-y-4">
                        <h3 style={{
                            fontSize: '1.5rem',     // Equivalent to text-2xl
                            fontWeight: '400',      // Equivalent to font-normal
                            fontFamily: 'Lora, serif'  // Equivalent to font-Lora
                        }}>
                            FOLLOW US
                        </h3>

                        <div className="flex items-center justify-center lg:justify-start space-x-4">
                            <img src="/Facebook.svg" alt="Facebook" className="w-8 h-8" />
                            <span className="font-semibold">@kawaiibeachresort</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-4 mt-4">
                            <img src="/Instagram.svg" alt="Instagram" className="w-8 h-8" />
                            <span className="font-semibold">@kawaiibeachresort</span>
                        </div>
                    </div>

                    {/* Location Section */}
                    <div className="space-y-5">
                        <h3 style={{
                            fontSize: '1.5rem',     // Equivalent to text-2xl
                            fontWeight: '400',      // Equivalent to font-normal
                            fontFamily: 'Lora, serif'  // Equivalent to font-Lora
                        }}>
                            FOLLOW US
                        </h3>
                        <Link to="/ContactUs">
                            <button className="bg-white text-[#107EAA] font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300">
                                View Location
                            </button>
                        </Link>

                        <p className="font-semibold">LOCATION: SAMAL CITY</p>
                        <p className="text-sm font-light mt-4 max-w-xs mx-auto lg:mx-0">
                            C5M6R+44F, Purok 1 Barangay Tambo Babak, Island Garden City of Samal, 8119 Davao del Norte
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

