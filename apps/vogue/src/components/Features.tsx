import { Coins, Headset, Truck } from 'lucide-react'
import { features } from '../data'
import type { Feature } from '../data'

const icons: Record<Feature['icon'], typeof Truck> = {
  truck: Truck,
  coins: Coins,
  headset: Headset,
}

export function Features() {
  return (
    <section aria-label="Store features" className="py-[100px] pb-0">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = icons[feature.icon]
          return (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <Icon className="h-12 w-12 text-brand" strokeWidth={1.5} aria-hidden="true" />
              <h4 className="mt-6 text-[22px] font-bold text-brand">{feature.title}</h4>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-secondary">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
