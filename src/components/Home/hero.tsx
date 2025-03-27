"use client"

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
    <section className="w-full min-h-screen overflow-hidden relative">
      {/* Background Image with overlay - positioned to go behind navbar */}
      <img
        src={images[selectedIndex] || "/placeholder.svg"}
        alt="Background"
        className="w-full h-[110vh] object-cover absolute top-[-64px] sm:top-[-80px] left-0 transition-opacity duration-300 z-[-1]"
      />

      {/* Content Container - starts below navbar */}
      <div className="container mx-auto max-w-7xl px-4 md:px-6 min-h-screen relative z-10 flex flex-col justify-center pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 py-8 md:py-0">
          {/* Left Column - Main Content */}
          <div className="text-white flex flex-col justify-center">
            <div className="space-y-4 md:space-y-6">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[70px] font-light 
                uppercase leading-tight font-Lora"
              >
                Hello.Kamusta.
                <br className="hidden md:block" />
                HOLA
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light mt-2 max-w-[60ch] font-Inter">
                Unwind in the idyllic setting of Kawaii Beach Resort. Immerse yourself in the beauty of pristine
                beaches, crystal-clear waters, and lush greenery. Our luxurious accommodations and world-class amenities
                are designed to provide an unforgettable escape.
              </p>
              <Link to="/booking" className="inline-block mt-4 md:mt-6 lg:mt-8">
                <button
                  className="w-[140px] sm:w-[160px] md:w-[180px] h-[40px] md:h-[45px] lg:h-[50px] 
                  bg-transparent shadow-md rounded-lg border border-white flex 
                  justify-center items-center cursor-pointer transition-all duration-300 
                  hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg"
                >
                  <span className="text-center text-white text-base sm:text-lg font-bold transition-colors duration-300 hover:text-black">
                    BOOK NOW
                  </span>
                </button>
              </Link>

              {/* Circle Indicators */}
              <div className="flex space-x-2 sm:space-x-3 md:space-x-4 mt-6 sm:mt-8">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 cursor-pointer
                    ${selectedIndex === index ? "bg-transparent border-2 border-white" : "bg-white border border-white"}`}
                    onClick={() => handleBackgroundChange(image, index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Floating Images */}
          <div className="flex justify-center lg:justify-end my-8 py-10">
            {/* Horizontal layout on small and medium screens, vertical on large */}
            <div
              className="flex flex-row md:flex-row lg:flex-col 
                          items-center md:items-center lg:items-end 
                          space-x-3 md:space-x-4 lg:space-x-0 
                          space-y-0 md:space-y-0 lg:space-y-4"
            >
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Change background to image ${index + 1}`}
                    className={`w-[80px] h-[48px] sm:w-[100px] sm:h-[60px] md:w-[120px] md:h-[72px] lg:w-[150px] lg:h-[90px] 
                              cursor-pointer transition-all duration-100 
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

