import { Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink dark:bg-ink-dark">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/ember-hero/1600/900"
          alt="Fine dining restaurant interior"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-36">
        <div className="max-w-2xl text-white">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand">
            Expensive but the best
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Deliciousness jumping into the mouth
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/80">
            Together creeping heaven upon third dominion be upon won't darkness rule land behold it
            created good saw after she'd Our set living. Signs midst dominion creepeth morning.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink
            href="#contact"
            className="rounded-lg bg-brand px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white hover:bg-brand-dark"
          >
            Reservation
          </ButtonLink>
          <a
            href="#video"
            className="inline-flex items-center gap-3 rounded-lg border border-white/30 px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            Watch our story
          </a>
        </div>
      </div>
    </section>
  )
}
