import { Link, useLocation } from "react-router-dom"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/rooms",
    label: "Rooms",
  },
  {
    href: "/contact",
    label: "Contact",
  },
]

export default function Navbar() {
  const location = useLocation()
  
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)]/95 backdrop-blur 
    supports-[backdrop-filter]:bg-[var(--background)]/60 p-3">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-2 md:gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                >
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
                        "text-lg font-medium transition-colors hover:text-[var(--primary)]",
                        location.pathname === route.href
                          ? "text-[var(--primary)]"
                          : "text-[var(--muted-foreground)]"
                      )}
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link
              to="/"
              className="flex items-center space-x-2"
            >
              <span className="font-bold text-xl">
                <img 
                className="scale-90 fill-white" 
                src="/KawaiiLogo.svg" 
                alt="Kawaii Logo" 
            />
              </span>
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  to={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[var(--primary)]",
                    location.pathname === route.href
                      ? "text-[var(--primary)]"
                      : "text-[var(--muted-foreground)]"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
