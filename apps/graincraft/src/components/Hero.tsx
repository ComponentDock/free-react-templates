import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink dark:bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/graincraft-hero/1600/900"
          alt="Woodworking workshop with crafted furniture"
          className="h-full w-full object-cover opacity-30"
        />
      </div>
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-36">
        <div className="max-w-2xl text-white">
          <span className="text-lg font-semibold uppercase tracking-[0.25em] text-brand">
            Welcome to Graincraft
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            New Construction, Remodeling, Additions
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-white/80">
            Quality Woodwork for Every Project
          </p>
        </div>

        <div className="mt-12">
          <ButtonLink
            href="#contact"
            className="rounded bg-brand px-10 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-brand-dark"
          >
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
