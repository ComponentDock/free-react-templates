import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-coal">
      <img
        src="https://picsum.photos/seed/foyer-hero/1600/900"
        alt="Elegant living room with designer furniture"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 sm:py-40">
        <p className="text-sm font-medium uppercase tracking-[3px] text-brand">
          Foyer / Interior Design
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
          Precise concept design for stylish living
        </h1>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/70">
          If you are looking at blank cassettes on the web, you may be very confused at the
          difference in price. You may see some for as low as $.17 each.
        </p>
        <ButtonLink
          href="#services"
          className="mt-10 rounded-[5px] bg-brand px-8 font-sans text-sm font-semibold uppercase text-white hover:bg-brand-dark"
        >
          Get Started
        </ButtonLink>
      </div>
    </section>
  )
}
