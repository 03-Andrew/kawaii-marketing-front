import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import './index.css'

import MarketingLayout from './layouts/marketing-layout'
import BookingLayout from './layouts/booking-layout'
import Home from './pages/marketing/home'
import About from './pages/marketing/about'
import Rooms from './pages/marketing/rooms'
import BookingPage from './pages/booking-page'
import Contact from './pages/marketing/contact'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <MarketingLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ],
  },
  {
    path: "/booking",
    element: <BookingLayout />,
    children: [
      {
        path: "/booking",
        element: <BookingPage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
