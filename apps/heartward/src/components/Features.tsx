import { HandCoins, Lightbulb, Heart } from 'lucide-react'
import { features } from '../data'

const iconMap: Record<string, React.ElementType> = {
  HandCoins,
  Lightbulb,
  Heart,
}

export function Features() {
  return (
    <section id="features" className="bg-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-ink">How Could You Help</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] as React.ElementType
            return (
              <div key={feature.title} className="bg-white p-10 text-center shadow-sm">
                <div className="mx-auto mb-8 inline-flex h-20 w-20 items-center justify-center rounded bg-white shadow-sm">
                  <Icon className="h-12 w-12 text-primary" />
                </div>
                <h4 className="mb-4 font-heading text-xl font-bold text-ink">{feature.title}</h4>
                <p className="text-sm leading-relaxed text-gray-500">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
