import { Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Featured episode"
      className="relative overflow-hidden bg-ink text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-primary-900/40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-400">
            10 Dec 2019
          </p>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Ep 05: Astronomy Binoculars — A Great Way To Observe
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink
              href="#"
              className="rounded-md bg-primary-400 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-500"
            >
              Subscribe with iTunes
            </ButtonLink>
            <ButtonLink
              href="#"
              className="rounded-md border border-white/30 bg-transparent px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Subscribe with RSS
            </ButtonLink>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src="https://picsum.photos/seed/sonance-hero/480/480"
              alt="Featured episode artwork"
              className="h-64 w-64 rounded-2xl object-cover shadow-2xl sm:h-80 sm:w-80"
              loading="eager"
            />
            <button
              type="button"
              aria-label="Play featured episode"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-400 text-white shadow-lg transition-transform hover:scale-110"
            >
              <Play size={28} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
