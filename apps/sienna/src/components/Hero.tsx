import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-paper dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:py-40">
        <div>
          <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand">
            Welcome to Sienna
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink dark:text-white sm:text-5xl lg:text-6xl">
            We Specialize In All Phase Of Hair
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-mist dark:text-gray-400 sm:text-lg">
            His itself may also face is creepeth fifth over dominion whose a bring. From the first
            consult to the final styling, our barbers handle every phase of your hair.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="#pricing"
              className="rounded-lg bg-brand px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
            >
              Book Now
            </ButtonLink>
            <ButtonLink
              href="#about"
              className="rounded-lg border border-brand px-10 uppercase tracking-[0.2em] text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Learn More
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://picsum.photos/seed/sienna-hero/800/900"
            alt="Barber trimming a client's hair"
            className="w-full rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
