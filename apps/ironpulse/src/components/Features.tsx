import { Sparkles, Users, UtensilsCrossed } from 'lucide-react'
import { features } from '../data'

const icons = {
  sparkles: Sparkles,
  users: Users,
  utensils: UtensilsCrossed,
} as const

export function Features() {
  return (
    <section id="features-section" className="bg-white py-24">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-5 md:grid-cols-3 md:gap-8">
        {features.map((feature) => {
          const Icon = icons[feature.icon]
          return (
            <article key={feature.title} className="text-center">
              <div className="relative mx-auto max-w-[400px]">
                <img
                  src={feature.image}
                  alt=""
                  className="h-[260px] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-[34px] left-1/2 flex h-[88px] w-[88px] -translate-x-1/2 items-center justify-center rounded-full bg-brand text-white">
                  <Icon className="h-9 w-9" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mt-[74px] text-lg font-bold uppercase tracking-[1.5px] text-ink">
                {feature.title}
              </h3>
              <p className="mx-auto mt-6 max-w-[340px] text-[15px] leading-[30px] text-muted">
                {feature.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
