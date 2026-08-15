import { Anchor, Ship, UserRound } from 'lucide-react'
import { features } from '../data'

const featureIcons: Array<typeof Ship> = [Ship, Anchor, UserRound]

export function Features() {
  return (
    <section id="services" aria-label="Features" className="bg-white pb-24">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = featureIcons[index % featureIcons.length]!
          return (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full bg-icon-circle">
                <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink">{feature.title}</h3>
              <p className="mx-auto mt-4 max-w-[300px] font-body text-base font-light leading-relaxed text-body">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
