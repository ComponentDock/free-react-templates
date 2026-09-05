import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/counsel-hero/1600/900"
          alt="Law office interior"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-36">
        <div className="max-w-2xl text-white">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand-light">
            Law Firm
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Finest And Strongest Law Firm Win The World
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            We provide exceptional legal services to individuals and businesses. Our experienced
            attorneys are dedicated to achieving the best possible outcomes for our clients.
          </p>
          <ButtonLink
            href="#about"
            className="mt-8 inline-flex rounded-lg bg-brand px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white hover:bg-brand-dark"
          >
            More About Us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
