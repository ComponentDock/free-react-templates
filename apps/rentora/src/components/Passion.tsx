import { ArrowRight, Bath, Compass, LayoutTemplate, Umbrella } from 'lucide-react'
import { PASSION } from '../data'

const PASSION_ICONS = {
  compass: Compass,
  desk: LayoutTemplate,
  bath: Bath,
  beach: Umbrella,
} as const

/* Passion (source: div.passion_part — dark band with a white section title,
   gold underline, and four icon cards that flip to white on hover). */
export function Passion() {
  return (
    <section
      aria-label="Our passion"
      className="bg-navy py-[130px] md:py-[130px]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(20, 48, 58, 0.92), rgba(20, 48, 58, 0.92)), url(https://picsum.photos/id/1081/1600/700)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <h2 className="relative mb-20 pb-4 text-center text-[40px] font-bold leading-[1.25] text-white">
          {PASSION.heading}
          <span
            className="absolute bottom-0 left-1/2 h-[2px] w-[90px] -translate-x-1/2 bg-brand"
            aria-hidden="true"
          />
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PASSION.cards.map((card) => {
            const Icon = PASSION_ICONS[card.icon as keyof typeof PASSION_ICONS]
            return (
              <article
                key={card.title}
                className="group px-5 pb-9 pt-8 text-center transition-colors duration-1000 hover:bg-white"
              >
                <div className="mx-auto mb-9 flex h-20 w-20 items-center justify-center rounded-[5px] border border-line">
                  <Icon className="h-[42px] w-[42px] text-white transition-colors duration-1000 group-hover:text-brand" aria-hidden="true" />
                </div>
                <h3 className="text-[20px] font-semibold text-white transition-colors duration-1000 group-hover:text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.857] text-white/80 transition-colors duration-1000 group-hover:text-muted">
                  {card.blurb}
                </p>
                <a
                  href="#properties"
                  className="relative mt-8 inline-block pl-4 text-[14px] font-medium text-white transition-colors duration-1000 group-hover:text-ink"
                >
                  <span
                    className="absolute -left-1 top-1/2 flex h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-full bg-brand"
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-4 w-4 text-white" />
                  </span>
                  {PASSION.ctaLabel}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
