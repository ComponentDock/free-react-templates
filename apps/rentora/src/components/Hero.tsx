import { Play } from 'lucide-react'
import { HERO } from '../data'
import { BrandIcon } from './BrandIcon'

const HERO_SOCIALS = ['facebook', 'twitter', 'instagram'] as const

/* Hero (source: section.banner_part — an 800px split: white text column
   left (kicker, headline, gold "View Property" button, social row) and a
   skyscraper photo right with a concave white curve mask on its edge plus a
   centered gold play button). */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[800px] items-center overflow-hidden bg-white"
    >
      <div className="mx-auto grid w-full max-w-[1140px] grid-cols-1 items-center px-[15px] lg:grid-cols-2">
        <div className="py-24 lg:py-0">
          <p className="font-kicker text-[14px] font-semibold uppercase tracking-wide text-kicker">
            {HERO.kicker}
          </p>
          <h1 className="mt-2 max-w-[500px] text-[42px] font-semibold leading-[1.3] text-ink md:text-[50px]">
            {HERO.headline}
          </h1>
          <p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-gray-600">
            {HERO.blurb}
          </p>
          <div className="mt-8 flex items-center gap-6">
            <a
              href="#properties"
              className="inline-block bg-brand px-6 py-[13px] text-[15px] font-medium capitalize text-white transition-colors hover:bg-brand-hover"
            >
              {HERO.ctaLabel}
            </a>
            <ul className="flex items-center gap-3">
              {HERO_SOCIALS.map((name) => (
                <li key={name}>
                  <a
                    href="#home"
                    aria-label={name}
                    className="text-ink transition-colors hover:text-brand"
                  >
                    <BrandIcon name={name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-l-[260px]">
            <img
              src={HERO.image}
              alt="Modern glass skyscraper"
              className="h-[620px] w-full object-cover"
            />
          </div>
          <a
            href="#home"
            aria-label={HERO.playLabel}
            className="absolute left-1/2 top-1/2 flex h-[95px] w-[95px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[7px] border-white bg-brand text-white shadow-[0_5px_25.5px_4.5px_rgba(20,48,58,0.2)] transition-colors hover:bg-brand-hover"
          >
            <Play className="h-8 w-8 fill-current" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
