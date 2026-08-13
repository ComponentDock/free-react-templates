import { GraduationCap, Heart, Target, Users } from 'lucide-react'
import { services } from '../data'

const iconMap = {
  users: Users,
  heart: Heart,
  graduation: GraduationCap,
  target: Target,
} as const

/** Services section (reference `.services-section.bg-light`): four cards
 *  with a 60px periwinkle→sky gradient icon glyph (reference
 *  `linear-gradient(45deg,#6b75ff,#59b7ff)`; applied as an SVG gradient
 *  stroke since background-clip: text does not paint SVG strokes), an 18px
 *  bold title, and a short gray paragraph. */
export function Services() {
  return (
    <section aria-label="Services" className="bg-mist py-24">
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="kickoff-icon-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6b75ff" />
            <stop offset="100%" stopColor="#59b7ff" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {services.map(({ icon, title, text }) => {
          const Icon = iconMap[icon]
          return (
            <article key={title} className="text-center">
              <Icon
                className="mx-auto h-[60px] w-[60px] [stroke:url(#kickoff-icon-gradient)]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
