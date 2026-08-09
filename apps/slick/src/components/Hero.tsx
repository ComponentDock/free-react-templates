import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-coal">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:py-40">
        <div>
          <span className="font-display text-lg font-bold uppercase tracking-[0.25em] text-brand">
            Welcome to Slick
          </span>
          <h1 className="mt-4 font-display text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            WE&apos;RE THE LAST OF BREED.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg">
            Classic cuts, hot-towel shaves, and beard sculpting from barbers who treat every chair
            like a craft. Walk in for a trim — leave with a style that says it all.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="#prices"
              className="rounded-lg bg-cta px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-cta-dark"
            >
              Book Now
            </ButtonLink>
            <ButtonLink
              href="#about"
              className="rounded-lg border border-white bg-transparent px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-coal"
            >
              Free Quote
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://picsum.photos/seed/slick-hero/800/900"
            alt="Barber giving a sharp fade in the shop"
            className="w-full rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
