import type { ReactElement } from 'react'
import { Dumbbell, Salad, Users } from 'lucide-react'
import { features, type Feature } from '../data'

const icons: Record<Feature['icon'], ReactElement> = {
  setting: <Dumbbell className="h-[34px] w-[34px]" aria-hidden="true" />,
  coaches: <Users className="h-[34px] w-[34px]" aria-hidden="true" />,
  diet: <Salad className="h-[34px] w-[34px]" aria-hidden="true" />,
}

export function Features() {
  return (
    <section id="features" aria-label="Why train at Stryve" className="pb-[90px] pt-[95px]">
      <div className="mx-auto grid max-w-[1170px] gap-[50px] px-4 md:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="text-center">
            <img
              src={feature.image}
              alt={feature.alt}
              loading="lazy"
              className="h-[240px] w-full object-cover"
            />
            <div
              data-feature-icon={feature.icon}
              className="relative z-10 mx-auto -mt-[34px] flex h-[88px] w-[88px] items-center justify-center rounded-full bg-brand text-white"
            >
              {icons[feature.icon]}
            </div>
            <h3 className="mt-[30px] text-[18px] font-bold uppercase tracking-[1.5px] text-subtitle">
              {feature.title}
            </h3>
            <p className="mx-auto mt-[22px] max-w-[350px] text-[15px] leading-[30px] text-body">
              {feature.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
