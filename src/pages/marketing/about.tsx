import { MoveDown } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <header className="relative h-screen bg-[url('/about/Hero_Background.jpg')] bg-cover bg-center">
        <div className="container mx-auto max-w-7xl min-h-screen relative z-10 px-4 md:px-6 flex items-center">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <div className="flex flex-col justify-start w-full md:w-2/3 text-[var(--background)]">
              <h4 className="text-base md:text-lg font-light uppercase leading-tight">
                Welcome
              </h4>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase leading-tight">
                Allow peace and tranquility to arrive!
              </h1>
            </div>
            <div className="flex justify-center md:justify-end items-center w-full md:w-1/3 mt-8 md:mt-0">
              <div className="border border-[var(--background)] text-[var(--background)] p-4 flex lg:flex-col md:flex-row items-center gap-2">
                <MoveDown
                  className="w-12 h-12 md:w-16 md:h-16"
                  strokeWidth={0.75}
                />
                <p className="text-lg md:text-xl font-light text-center md:text-left">
                  About
                  <br />
                  the
                  <br />
                  resort
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto max-w-7xl flex flex-col items-center w-full py-12 md:py-16 px-4 md:px-6">
        <div className="w-16 md:w-24 h-1 bg-[var(--tertiary)] mb-4" />
        <h2 className="text-3xl md:text-4xl font-light uppercase mb-4 text-center">
          ABOUT US
        </h2>
        <h4 className="text-lg md:text-xl font-light max-w-2xl text-center">
          It is a way of life. It is the secret behind turning your holidays
          into an unforgettable experience.
        </h4>
      </section>

      {/* Mission Section */}
      <section className="relative bg-[url('/about/vanishing-bg.jpg')] bg-cover bg-center">
        <div className="container mx-auto max-w-7xl flex flex-col w-full py-12 md:py-16 text-[var(--background)] px-4 md:px-6">
          <div className="w-16 md:w-24 h-1 bg-[var(--background)] mb-4" />
          <h2 className="text-3xl md:text-4xl font-light uppercase mb-4">
            The Assurance
          </h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:basis-1/2">
              <img
                src="/about/vanishing1.jpg"
                alt="Vanishing island"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:basis-1/2 flex flex-col items-start justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Your Travel is Our Journey
              </h2>
              <p className="text-base md:text-xl font-light">
                At Kawaii Beach Resort, we believe that every journey is an
                adventure. Your escape is our passion. We're committed to making
                your stay a whimsical experience, filled with joy, relaxation,
                and unforgettable moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="relative h-auto flex items-center justify-center bg-[url('/about/tree-bg.svg')] bg-no-repeat">
        <div className="container mx-auto max-w-7xl flex flex-col w-full py-16 items-center h-auto md:h-[55vh] md:max-h-[500px] px-4 md:px-8">
          <div className="w-24 h-1 bg-[var(--tertiary)] mb-4" />
          <h2 className="text-3xl md:text-4xl font-light uppercase mb-4 text-center md:text-left">
            History
          </h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full h-full">
            <div className="md:basis-1/2 flex flex-col items-start justify-center text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight md:leading-none">
                Recharge In The Embrace Of Nature
              </h1>
            </div>

            <div className="md:basis-1/2 flex flex-col items-start justify-center text-center md:text-left">
              <p className="text-base md:text-xl font-light">
                Kawaii Beach Resort, a whimsical escape on Samal Island, offers
                a colorful and playful experience for families and couples.
                Inspired by kawaii culture, the resort features a water park,
                café, and serene pool. Its unique design and commitment to fun
                and relaxation make it a popular choice for a memorable
                vacation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* End */}
      <section className="relative py-16 bg-[url('/about/partyboat-bg.jpg')] bg-cover h-[60vh] max-h-[650px] flex items-center justify-center">
        <div className="container mx-auto max-w-7xl w-full h-full px-4 md:px-6 flex flex-col items-center justify-center text-[var(--background)]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold uppercase mb-4 text-center">
            I NEED VITAMIN SEA
          </h1>
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="w-8 md:w-16 h-0.5 bg-[var(--background)]" />
            <p className="text-base md:text-xl font-light text-center">
              VANISHING ISLAND - JET SKI - KAYAK
            </p>
            <div className="w-8 md:w-16 h-0.5 bg-[var(--background)]" />
          </div>
        </div>
      </section>
    </div>
  );
}
