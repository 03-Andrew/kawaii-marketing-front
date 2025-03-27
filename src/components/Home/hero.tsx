
import { useState } from "react"
import { Link } from "react-router-dom"

// Define the images array
const images = [
  "/landing-page/Kayak.jpg",
  "/landing-page/Home2.jpg",
  "/landing-page/Home3.jpg",
  "/landing-page/Home4.jpg",
]

export default function Hero() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [overlayOpacity, setOverlayOpacity] = useState(0)

  const handleBackgroundChange = (image: string, index: number) => {
    setSelectedIndex(index)
    setOverlayOpacity(1)
    setTimeout(() => setOverlayOpacity(0), 300)
  }

  return (
    <section className="w-full h-screen overflow-hidden relative -mt-22">
      {/* Background Image */}
      <div className="absolute inset-0 z-10"></div> {/* Dark overlay for better contrast */}
      <img
        src={images[selectedIndex] || "/placeholder.svg"}
        alt="Background"
        className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300"
        style={{ opacity: overlayOpacity === 1 ? 0 : 1 }}
      />
      {/* Content Container */}
      <div className="container mx-auto max-w-7xl px-4 md:px-6 h-full relative z-20">
        <div className="grid md:grid-cols-2 gap-8 h-full pt-16">
          {/* Left Column - Main Content */}
          <div className="text-white flex flex-col justify-center">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-[70px] font-light 
              uppercase whitespace-pre-line leading-tight font-Lora">
                Hello.Kamusta.
                <br className="hidden md:block" />
                HOLA
              </h1>
              <p className="text-base md:text-lg lg:text-[20px] font-light mt-2 max-w-[60ch] font-Inter">
                Unwind in the idyllic setting of Kawaii Beach Resort. Immerse yourself in the beauty of pristine
                beaches, crystal-clear waters, and lush greenery. Our luxurious accommodations and world-class amenities
                are designed to provide an unforgettable escape.
              </p>
              <Link to="/booking" className="inline-block mt-6 md:mt-12">
                <button className="w-[160px] md:w-[200px] h-[45px] md:h-[50px] 
                bg-transparent shadow-md rounded-lg border border-white flex 
                justify-center items-center cursor-pointer transition-all duration-300 
                hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg">
                  <span className="text-center text-white text-lg md:text-[20px] font-bold transition-colors duration-300 hover:text-black">
                    BOOK NOW
                  </span>
                </button>
              </Link>

              {/* Circle Indicators */}
              <div className="absolute flex space-x-3 md:space-x-4 mt-20">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 cursor-pointer
                ${selectedIndex === index ? "bg-transparent border-2 border-white" : "bg-white border border-white"}`}
                    onClick={() => handleBackgroundChange(image, index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Floating Images */}
          <div className="flex items-center justify-end relative">
            <div className="flex flex-col space-y-4 p-3 rounded-lg">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Change background to image ${index + 1}`}
                    className={`w-[120px] h-[72px] lg:w-[150px] lg:h-[90px] cursor-pointer transition-all duration-100 
                      ${selectedIndex === index ? "border-2 border-white" : "border border-white/50"} 
                      hover:border-2 hover:border-white shadow-lg object-cover`}
                    onClick={() => handleBackgroundChange(image, index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

