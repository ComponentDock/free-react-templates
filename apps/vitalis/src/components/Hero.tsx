import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/vitalis-hero/1600/900"
          alt="Modern medical clinic"
          className="h-full w-full object-cover opacity-50"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-32 sm:px-6 lg:py-44">
        <div className="max-w-2xl text-white">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-brand">
            Medical & Cosmetic Surgery
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Take the world's best quality Treatment
          </h1>
          <ButtonLink
            href="#contact"
            className="mt-8 rounded border-2 border-white px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-brand hover:bg-brand"
          >
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
