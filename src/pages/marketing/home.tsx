import Hero from "../../components/Home/hero";
import Welcome from "../../components/Home/welcome";
import Facilities from "../../components/Home/facilities";
import Rooms from "../../components/Home/rooms";
import Testimonials from "../../components/Home/testimonials";
import Resto from "../../components/Home/resto";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-4">
      <Hero />
      <Welcome /> 
      <Facilities />
      <Rooms />
      <Testimonials />
      <Resto /> 
    </div>
  )
}