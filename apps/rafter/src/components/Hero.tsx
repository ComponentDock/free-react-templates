import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Featured projects"
      className="relative flex min-h-[640px] items-center overflow-hidden bg-charcoal"
    >
      <img
        src="https://picsum.photos/seed/rafter-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-brand">
          Architecture &amp; Interiors
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          Precise concept design for stylish living
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-200">
          If you are looking at blank cassettes on the web, you may be very confused at the
          difference in price. You may see some for as low as $.17 each.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink
            href="#projects"
            className="rounded-none border border-brand bg-brand text-white hover:bg-transparent hover:text-brand"
          >
            Get Started
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
