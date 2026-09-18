import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/sudsy-hero/1600/900"
          alt="Professional car wash service"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-brand/40" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:py-36">
        <div className="max-w-2xl text-white">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-light">
            Car Wash
          </span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            Car Wash &amp; Detailing
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80">
            We provide premium car wash and detailing services. Your vehicle deserves the best care
            — from exterior polish to interior deep clean, we handle it all with precision and care.
          </p>
          <ButtonLink
            href="#services"
            className="mt-8 inline-flex rounded-[30px] bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-dark"
          >
            Our Services
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
