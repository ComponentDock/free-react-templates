import { ButtonLink } from '@free-react-templates/ui'
import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-charcoal"
    >
      <img
        src="https://picsum.photos/seed/facet-hero/1600/900"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-28 sm:px-6 lg:py-32">
        <p className="max-w-md text-sm font-medium uppercase tracking-[3px] text-accent">
          Square — Free Bootstrap 4 Template
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          We have a passion in creating new and unique spaces
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/70">
          Travel to the any corner of the world, without going around in circles
        </p>
        <p className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#contact" variant="primary">
            Request a quote
          </ButtonLink>
          <a
            href="#projects"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-white/10 px-4 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            Watch Video
          </a>
        </p>
      </div>
    </section>
  )
}
