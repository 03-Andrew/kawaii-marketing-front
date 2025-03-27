import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar.tsx"
import Footer from "../components/footer.tsx"

export default function MarketingLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
