import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="relative overflow-hidden bg-navy-deep">
      <img
        src="https://picsum.photos/seed/hardhat-hero/1920/900"
        alt="Construction site"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,8,52,0.75)] to-[rgba(2,8,52,0.15)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <p className="text-sm font-medium uppercase tracking-widest text-white/80">
          Professional Construction Services
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          Advanced <br />
          <span className="text-brand">Construction</span>
          <br />
          <span className="text-white/30">Construction</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
          Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days
          open. Heaven fruitful third.
        </p>
        <div className="mt-10">
          <ButtonLink
            href="#services"
            className="inline-flex rounded bg-brand px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            Our Services
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
