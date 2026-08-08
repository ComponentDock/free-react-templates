import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[640px] items-center bg-coal">
      <img
        src="https://picsum.photos/seed/elevation-hero/1600/900"
        alt="City skyline rising above the fog"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="relative mx-auto max-w-3xl">
          <span
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 hidden h-full w-full border-4 border-white sm:block"
          />
          <div className="relative bg-white px-8 py-14 text-center shadow-xl sm:px-16">
            <h1 className="font-display text-4xl font-bold uppercase leading-tight text-ink sm:text-5xl">
              Precise Concept
            </h1>
            <p className="mx-auto mt-4 max-w-md text-mist">
              If you are looking at blank cassettes on the web, you may be very confused at the
              difference in price.
            </p>
            <ButtonLink
              href="#about"
              className="mt-8 rounded-[5px] bg-brand px-10 font-sans text-sm font-semibold uppercase text-white hover:bg-brand-dark"
            >
              Get Started
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
