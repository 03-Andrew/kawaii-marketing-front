import Hero from "../../components/Home/hero";
import Welcome from "../../components/Home/welcome";
import Facilities from "../../components/Home/facilities";
import Rooms from "../../components/Home/rooms";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-4">
      <Hero />
      <Welcome /> 
      <Facilities />
      <Rooms />
    </div>
  )
}