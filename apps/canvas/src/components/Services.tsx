import { Compass, Layers, Monitor } from 'lucide-react'
import { SERVICES } from '../data'

/* div.site-section (white): three service-29191 cells, each a 64px (4rem)
   INDIGO glyph (no circle), a 20px weight-900 black heading, and a lorem
   paragraph. */

const ICONS = {
  Monitor,
  Compass,
  Layers,
} as const

export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-white py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-3 md:gap-10">
        {SERVICES.map(({ icon, title, blurb }) => {
          const Icon = ICONS[icon]
          return (
            <div key={title}>
              <Icon
                aria-hidden="true"
                className="mb-4 block h-16 w-16 text-brand"
                strokeWidth={1.5}
              />
              <h3 className="font-sans text-[20px] font-black text-ink">{title}</h3>
              <p className="mt-3 leading-relaxed text-body">{blurb}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
