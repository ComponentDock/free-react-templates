import { Headphones, Monitor, Shield, Smartphone, type LucideIcon } from 'lucide-react'
import { services } from '../data'

const icons: Record<(typeof services)[number]['icon'], LucideIcon> = {
  smartphone: Smartphone,
  monitor: Monitor,
  shield: Shield,
  headphones: Headphones,
}

/** Dark navy services band (reference `.service_part.section_bg_2`): four
 *  centered cards with icon medallions that invert on hover. */
export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-navy py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {services.map(({ icon, title, text }) => {
          const Icon = icons[icon]
          return (
            <article
              key={title}
              className="group rounded-[5px] bg-navy-light px-6 py-[50px] text-center transition-colors hover:bg-white"
            >
              <div className="mx-auto flex h-[61px] w-[61px] items-center justify-center rounded-full bg-navy-muted transition-colors group-hover:bg-primary-600">
                <Icon className="h-7 w-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-heading text-[22px] font-semibold text-white transition-colors group-hover:text-navy-deep">
                {title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/40 transition-colors group-hover:text-gray-muted">
                {text}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
