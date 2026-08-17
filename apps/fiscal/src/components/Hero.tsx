import { Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { HERO, VIDEO_URL } from '../data'

/* Hero — full-viewport gradient banner with a white headline, subtext,
   a solid pill CTA, a video link, and a right-side photograph. */
export function Hero() {
  return (
    <section
      id="home-section"
      aria-label="Hero"
      className="flex min-h-screen items-center bg-gradient-to-r from-gradient-from to-gradient-to px-4 py-32"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/90">{HERO.subtext}</p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <ButtonLink
              href="#contact-section"
              className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              {HERO.ctaLabel}
            </ButtonLink>
            <a
              href={VIDEO_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-medium text-white"
            >
              <Play className="h-5 w-5" aria-hidden="true" />
              {HERO.watchLabel}
            </a>
          </div>
        </div>
        <div>
          <img
            src={HERO.image}
            alt="Business professional at work"
            className="w-full rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
          />
        </div>
      </div>
    </section>
  )
}
