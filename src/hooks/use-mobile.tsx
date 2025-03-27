import { useState, useEffect } from "react"

export default function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if window is defined (to avoid SSR issues)
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < breakpoint)
      }

      // Initial check
      checkMobile()

      // Add event listener
      window.addEventListener("resize", checkMobile)

      // Cleanup
      return () => {
        window.removeEventListener("resize", checkMobile)
      }
    }
  }, [breakpoint])

  return isMobile
}

