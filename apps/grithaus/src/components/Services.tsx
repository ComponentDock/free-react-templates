import { Bike, Dumbbell, GraduationCap, PersonStanding, Salad, Waves } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { services, type ServiceIcon } from '../data'

const icons: Record<ServiceIcon, LucideIcon> = {
  school: GraduationCap,
  dumbbell: Dumbbell,
  yoga: PersonStanding,
  salad: Salad,
  waves: Waves,
  bike: Bike,
}

export function Services() {
  return (
    <section id="services" aria-label="Services" className="pb-0 pt-[100px]">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="grid gap-x-[30px] gap-y-[50px] pb-[60px] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <article key={service.title} className="group">
                <div className="flex items-center">
                  <span className="mr-5 inline-flex h-[77px] w-[77px] shrink-0 items-center justify-center rounded-full bg-brand text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-lime group-hover:to-brand group-hover:shadow-[0_5px_30px_rgba(0,0,0,0.15)]">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <h4 className="text-[20px] transition-colors group-hover:text-brand">{service.title}</h4>
                </div>
                <p className="mt-[15px] text-[14px] leading-[2] text-body">{service.copy}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
