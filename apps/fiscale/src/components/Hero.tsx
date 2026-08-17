import { Play } from 'lucide-react'
import { HERO, VIDEO_URL } from '../data'
import { PillLink } from './Pill'

/* Hero — solid-blue section with a white headline, translucent CTA, and a
   video-play image block (green circle overlay). */
export function Hero() {
  return (
    <section aria-label="Hero" className="relative overflow-hidden bg-accent" id="home-section">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-32 lg:flex-row lg:justify-between lg:px-8 lg:py-40">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="font-display text-5xl font-bold leading-tight text-white">
            {HERO.headline}
          </h1>
          <p className="mb-8 mt-6 leading-relaxed text-white/50">{HERO.subtext}</p>
          <PillLink href="#services-section" variant="white">
            {HERO.ctaLabel}
          </PillLink>
        </div>
        <div className="relative">
          <img
            src={HERO.image}
            alt="Financial specialist reviewing reports on a phone"
            width={560}
            height={400}
            className="rounded-lg shadow-2xl"
          />
          <a
            href={VIDEO_URL}
            aria-label="Play video"
            className="absolute inset-0 m-auto flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-110"
          >
            <Play className="h-5 w-5 fill-current" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
