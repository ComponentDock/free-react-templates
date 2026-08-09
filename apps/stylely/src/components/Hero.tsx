import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:py-40">
        <div>
          <span className="font-display text-lg font-medium uppercase tracking-[0.25em] text-white/90">
            Feel Like Home
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Good Look Guaranteed
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            From classic cuts to modern fades, our barbers blend tradition with trend — so every
            chair leaves you looking sharp and feeling at home.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="#appointment"
              className="rounded-full border border-white bg-white px-10 uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Book Now
            </ButtonLink>
            <ButtonLink
              href="#contact"
              className="rounded-full border border-white bg-transparent px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-brand"
            >
              Contact Us
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://picsum.photos/seed/stylely-hero/800/900"
            alt="Barber styling a client in the salon"
            className="w-full rounded-tl-[10rem] object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
