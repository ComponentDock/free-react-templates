import { Bath, BedDouble, MapPin, Maximize2 } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { HERO } from '../data'

const STAT_ICONS = [Maximize2, BedDouble, Bath] as const

/* Hero (source: div.site-section-cover.overlay — full-width photo with a
   dark overlay; centered: green price, large light headline, address with
   pin, sq-ft/bed/bath stat row, green "Learn More" button). Parallax →
   static background (noted in the spec). */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[620px] items-center justify-center bg-cover bg-center text-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(https://picsum.photos/seed/roost-hero/1600/900)',
      }}
    >
      <div className="mx-auto max-w-[1140px] px-[15px] py-24">
        <p className="text-[1.5rem] font-bold text-brand">{HERO.price}</p>
        <h1 className="mt-2 text-[2rem] font-light leading-none text-white md:text-[3rem]">
          {HERO.headline}
        </h1>

        <p className="mt-4 flex items-center justify-center gap-2 text-white">
          <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
          {HERO.address}
        </p>

        <div className="mt-6 flex items-center justify-center gap-6">
          {HERO.stats.map((stat, index) => {
            const Icon = STAT_ICONS[index]!
            return (
              <span key={stat.label} className="flex items-center gap-2 text-[13px] text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/20">
                  <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                </span>
                {stat.value} {stat.label}
              </span>
            )
          })}
        </div>

        <div className="mt-8">
          <ButtonLink
            href="#property"
            className="h-auto rounded-none bg-brand px-5 py-3 text-[16px] hover:bg-brand-hover"
          >
            {HERO.learnMoreLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
