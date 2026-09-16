import { Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/mercy-hero/1600/900"
          alt="People helping those in need"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-36">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Help the poor in need
          </h1>
          <p className="mt-4 text-lg font-light text-white/90">
            Lend the helping hand get involved
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="#volunteer"
              className="rounded bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
            >
              Become A Volunteer
            </ButtonLink>
            <a
              href="#"
              className="group flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:text-brand"
              aria-label="Watch our video"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white transition-colors group-hover:border-brand">
                <Play className="h-4 w-4 ml-0.5" aria-hidden="true" />
              </span>
              Watch our video
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
