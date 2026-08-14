import { Briefcase, Search, Trophy, Users } from 'lucide-react'
import { SERVICES } from '../data'

const SERVICE_ICONS = {
  search: Search,
  briefcase: Briefcase,
  trophy: Trophy,
  users: Users,
}

/* Gradient services band: four feature cards (60px white icon, bold
   18px white title, translucent copy) on the #207dff → #a16ae8
   gradient. */
export function Services() {
  return (
    <section className="bg-gradient-to-r from-brand-start to-brand-end py-[6em]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 text-center md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => {
          const Icon = SERVICE_ICONS[service.icon]
          return (
            <div key={service.title}>
              <Icon className="mx-auto h-[60px] w-[60px] text-white" aria-hidden="true" />
              <h3 className="mt-4 text-[18px] font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-white/70">{service.copy}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
