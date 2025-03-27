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

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 p-2",
        scrolling
          ? "h-fit bg-[var(--background)]/80 backdrop-blur shadow-md"
          : "h-24 bg-transparent backdrop-blur-none"
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
                        "text-lg font-medium transition-all hover:font-bold hover:underline",
                        location.pathname === route.href
                          ? "font-bold underline"
                          : "text-[var(--foreground)]"
                      )}
                    >
                      {route.label}
                    </Link>
                  ))}
                  {/* Discover Dropdown for Mobile */}
                  <div className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="text-lg font-medium transition-all hover:font-bold hover:underline flex items-center gap-1"
                    >
                      Discover <ChevronDown className="h-4 w-4" />
                    </button>
                    {dropdownOpen && (
                      <div className="mt-2 flex flex-col gap-2 bg-[var(--card)] p-2 shadow-md rounded-md">
                        {discoverLinks.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            className="text-lg transition-all hover:font-bold hover:underline"
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
                  scrolling ? "h-18 w-auto" : "h-30 w-auto"
                )}
                src={scrolling ? "/KawaiiLogo.svg" : "/KawaiiLogo.png"}
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
                    "text-sm font-medium transition-all font-light text-2xl",
                    scrolling
                      ? "text-[var(--foreground)] hover:underline"
                      : "text-[var(--background)] hover:underline"
                  )}
                >
                  {route.label}
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
                    "text-sm font-medium transition-all font-light text-2xl flex items-center gap-1",
                    scrolling
                      ? "text-[var(--foreground)] hover:underline"
                      : "text-[var(--background)] hover:underline"
                  )}
                >
                  Discover <ChevronDown className="h-4 w-4" />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-[var(--card)] shadow-md rounded-md p-2">
                    {discoverLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block px-4 py-2 text-sm transition-all hover:underline"
                      >
                        {link.label}
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
