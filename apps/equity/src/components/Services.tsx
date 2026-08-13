import { Signal, Anchor, Magnet, Briefcase, Banknote, TrendingUp } from 'lucide-react'
import { services } from '../data'

const icons = {
  signal: Signal,
  anchor: Anchor,
  magnet: Magnet,
  briefcase: Briefcase,
  money: Banknote,
  trending: TrendingUp,
} as const

/** Services section (reference `.site-section.bg-light`): six icon cards in
 *  two rows of three, each with a line icon, a purple title, and a blurb. */
export function Services() {
  return (
    <section id="services" aria-label="Our Services" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-[#b8b8b8] uppercase">What We Do</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-[#25262a]">Our Services</h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon, title, text }) => {
            const Icon = icons[icon]
            return (
              <div key={title + text} className="text-center">
                <Icon
                  className="mx-auto h-12 w-12 text-primary-600"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-heading text-xl font-bold text-primary-600">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#939393]">{text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
