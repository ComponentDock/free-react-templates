import { Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/locks-hero/1600/900"
          alt="Hair stylist at work"
          className="h-full w-full object-cover opacity-50"
        />
      </div>

      <button
        type="button"
        aria-label="Play video"
        className="absolute right-6 top-1/2 hidden h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/40 text-white transition-colors hover:border-brand hover:text-brand md:flex lg:right-16"
      >
        <Play className="h-8 w-8 translate-x-0.5" aria-hidden="true" />
      </button>

      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:py-40">
        <div className="max-w-2xl text-white">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-brand">
            Premium Hair Salon
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            We will make you stylish
          </h1>
          <ButtonLink
            href="#contact"
            className="mt-8 rounded-full bg-brand px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-brand-dark"
          >
            Book an Appointment
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
