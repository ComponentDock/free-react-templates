import { CalendarRange, Home, Truck, Users } from 'lucide-react'
import { WHY_CHOOSE } from '../data'
import { navySolidButton } from './buttonClasses'

const ICONS = {
  calendar: CalendarRange,
  truck: Truck,
  users: Users,
  home: Home,
} as const

export function WhyChooseUs() {
  return (
    <section id="why-choose" className="bg-white px-4 pb-10 pt-[100px]">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-[60px] text-center">
          <span className="text-sm font-medium uppercase tracking-wide text-navy">
            {WHY_CHOOSE.label}
          </span>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-[36px] font-semibold leading-snug text-navy-ink">
            {WHY_CHOOSE.heading}
          </h2>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1320px] grid-cols-1 border-t border-l border-serviceline md:grid-cols-2 lg:grid-cols-4">
        {WHY_CHOOSE.items.map((item) => {
          const Icon = ICONS[item.icon]
          return (
            <div
              key={item.title}
              className="min-h-[350px] border-b border-r border-serviceline p-[45px] pb-[23px] lg:min-h-[476px]"
            >
              <Icon className="size-10 text-gold" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-navy-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-base font-light leading-relaxed text-[#5E5E5E]">
                {item.blurb}
              </p>
            </div>
          )
        })}
      </div>

      <div className="mx-auto max-w-[1320px] text-center">
        <a href="#contact" className={`${navySolidButton} mt-[50px]`}>
          {WHY_CHOOSE.cta}
        </a>
      </div>
    </section>
  )
}
