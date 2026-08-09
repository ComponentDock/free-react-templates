import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src="https://picsum.photos/seed/taper-hero/1920/1080"
        alt="Barber shop interior with a client in the chair"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-32 sm:px-6">
        <span className="font-display text-lg font-medium uppercase tracking-[0.25em] text-brand-light">
          Welcome to Taper Barber Shop
        </span>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
          Our Hair Style make your look elegance
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Elegance starts with a great cut. From classic styles to modern fades, our master barbers
          craft a look that fits you perfectly.
        </p>
        <div className="mt-10">
          <ButtonLink
            href="#contact"
            className="rounded-none border border-brand bg-brand px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
          >
            make an appointment now
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
