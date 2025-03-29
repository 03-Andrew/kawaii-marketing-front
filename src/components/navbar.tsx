"use client"
import { Link, useLocation } from "react-router-dom"
import { Menu, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/rooms", label: "Rooms" },
  { href: "/contact", label: "Contact" },
]

const discoverLinks = [
  { href: "/activities", label: "Activities" },
  { href: "/dining", label: "Dining" },
  { href: "/gallery", label: "Gallery" },
]

export default function Navbar() {
  const location = useLocation()
  const [scrolling, setScrolling] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      // Force re-render on resize to update conditional classes
      setScrolling((prev) => (window.innerWidth < 768 ? true : window.scrollY > 50))
    }

    window.addEventListener("resize", handleResize)
    // Initial check
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 p-2",
        scrolling || window.innerWidth < 768
          ? "h-fit bg-[var(--background)] backdrop-blur shadow-md"
          : "h-24 bg-transparent backdrop-blur-none",
      )}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex h-full items-center justify-between">
          {/* Left Side - Logo & Mobile Menu */}
          <div className="flex items-center gap-2 md:gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[240px] sm:w-[300px] p-4 bg-[var(--card)] text-[var(--card-foreground)]"
              >
                <nav className="flex flex-col gap-4 mt-8">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      to={route.href}
                      className={cn(
                        "text-lg font-medium transition-all hover:font-bold relative",
                        location.pathname === route.href ? "font-bold" : "text-[var(--foreground)]",
                        "after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300",
                        location.pathname === route.href ? "after:w-full" : "hover:after:w-full",
                      )}
                    >
                      {route.label}
                    </Link>
                  ))}
                  {/* Discover Dropdown for Mobile */}
                  <div className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="text-lg font-medium transition-all hover:font-bold flex items-center gap-1 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Discover <ChevronDown className="h-4 w-4" />
                    </button>
                    {dropdownOpen && (
                      <div className="mt-2 flex flex-col gap-2 bg-[var(--card)] p-2 shadow-md rounded-md">
                        {discoverLinks.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            className="text-lg transition-all hover:font-bold relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
            <Link to="/" className="flex items-center space-x-2">
              <img
                className={cn(
                  "transition-all duration-300",
                  scrolling && window.innerWidth >= 768
                    ? "h-18 w-auto"
                    : window.innerWidth < 768
                      ? "h-12 w-auto"
                      : "h-30 w-auto",
                )}
                src={scrolling || window.innerWidth < 768 ? "/KawaiiLogo.svg" : "/KawaiiLogo.png"}
                alt="Kawaii Logo"
              />
            </Link>
          </div>

          {/* Right Side - Navigation */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  to={route.href}
                  className={cn(
                    "text-sm font-medium transition-all font-light text-2xl relative group",
                    scrolling || window.innerWidth < 768 ? "text-[var(--foreground)]" : "text-[var(--background)]",
                  )}
                >
                  {route.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-[2px] bg-current transform origin-left transition-all duration-300 ease-out",
                      location.pathname === route.href
                        ? "w-full scale-100"
                        : "w-full scale-x-0 group-hover:scale-x-100",
                    )}
                  ></span>
                </Link>
              ))}

              {/* Discover Dropdown for Desktop */}
              <div
                className="relative group cursor-pointer"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={cn(
                    "text-sm font-medium transition-all font-light text-2xl flex items-center gap-1 relative",
                    scrolling || window.innerWidth < 768 ? "text-[var(--foreground)]" : "text-[var(--background)]",
                  )}
                >
                  Discover <ChevronDown className="h-4 w-4" />
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-current transform origin-left transition-all duration-300 ease-out scale-x-0 group-hover:scale-x-100"></span>
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-[var(--card)] shadow-md rounded-md p-2">
                    {discoverLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block px-4 py-2 text-sm transition-all relative group"
                      >
                        {link.label}
                        <span className="absolute -bottom-1 left-4 right-4 h-[1px] bg-current transform origin-left transition-all duration-300 ease-out scale-x-0 group-hover:scale-x-100"></span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

