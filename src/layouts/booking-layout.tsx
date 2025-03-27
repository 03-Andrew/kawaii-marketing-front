import { Outlet } from "react-router-dom"

export default function BookingLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
