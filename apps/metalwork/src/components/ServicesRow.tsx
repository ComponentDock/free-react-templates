import { Bell, Heart, Zap, type LucideIcon } from 'lucide-react'
import { services } from '../data'

const icons: Record<string, LucideIcon> = {
  bell: Bell,
  heart: Heart,
  zap: Zap,
}

/** Light-gray services row (reference `.section.bg-light`): three centered
 *  icon blocks — Modern Design, Built With Passion, Fast Loading. */
export function ServicesRow() {
  return (
    <section id="services" className="bg-surface py-[7rem]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-3 lg:px-8">
        {services.map((service) => {
          const Icon = icons[service.icon]!
          return (
            <article key={service.title} className="text-center">
              <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center">
                <Icon className="h-[50px] w-[50px] text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold text-black">
                {service.title}
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
                {service.text}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
