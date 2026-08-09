import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/gilded-hero/1600/900"
          alt="Elegant hair salon"
          className="h-full w-full object-cover opacity-40"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-32 text-center sm:px-6 lg:py-44">
        <span className="text-sm font-medium uppercase tracking-[0.3em] text-brand">
          We Care About Your Hair
        </span>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Beautiful Hair Comes From A Legendary.
        </h1>
        <p className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-white/60">
          Hair Salon
        </p>
        <ButtonLink
          href="#contact"
          className="mt-8 inline-flex rounded-full bg-brand px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
        >
          Book An Appointment
        </ButtonLink>
      </div>
    </section>
  )
}
