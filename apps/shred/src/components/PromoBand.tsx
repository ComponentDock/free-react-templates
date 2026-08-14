import { BadgePercent, Dumbbell, Footprints, type LucideIcon } from 'lucide-react'
import { BAND_ITEMS } from '../data'

const ICONS: Record<string, LucideIcon> = {
  dumbbell: Dumbbell,
  'badge-percent': BadgePercent,
  footprints: Footprints,
}

/* Promo band — coral band (#fe7878) with three coral cards (#fe9191):
   white icon, white title, gray text and a "Read more →" link. */
export function PromoBand() {
  return (
    <section aria-label="Free lessons and offers" className="bg-brand-dark">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 md:grid-cols-3">
        {BAND_ITEMS.map((item) => {
          const Icon = ICONS[item.icon]!
          return (
            <div
              key={item.title}
              data-promo-card
              className="bg-brand px-8 py-10 text-center md:text-left"
            >
              <span
                data-promo-icon
                className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/40 text-white"
              >
                <Icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{item.text}</p>
              <a
                href="#programs-section"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-black"
              >
                Read more <span aria-hidden="true">→</span>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
