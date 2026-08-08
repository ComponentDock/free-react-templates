import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-charcoal">
      <img
        src="https://picsum.photos/seed/cantilever-hero-1/1600/900"
        alt="Modern architecture concept design"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-6xl flex-col items-start justify-center px-4 py-24 sm:px-6">
        <h1 className="max-w-2xl font-display text-3xl font-bold uppercase leading-tight text-white sm:text-5xl">
          Precise Concept Design for Stylish Living
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
          We craft precise, elegant architecture and interiors — balancing form, light, and material
          for spaces that feel unmistakably alive.
        </p>
        <ButtonLink
          href="#contact"
          className="mt-8 rounded bg-brand px-8 py-4 text-xs font-bold uppercase text-white transition-colors hover:bg-brand-dark"
        >
          Get Started
        </ButtonLink>
      </div>
    </section>
  )
}
