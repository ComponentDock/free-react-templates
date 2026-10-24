import { HandCoins, Lightbulb, Users } from 'lucide-react'
import { features, type FeatureIcon } from '../data'

const icons: Record<FeatureIcon, typeof Lightbulb> = {
  Lightbulb,
  HandCoins,
  Users,
}

export function Features() {
  return (
    <section className="border-t border-line bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3 md:px-6">
        {features.map((feature) => {
          const Icon = icons[feature.icon]
          return (
            <article key={feature.title} className="flex gap-6">
              <Icon aria-hidden="true" className="mt-1 h-9 w-9 shrink-0 text-brand" />
              <div>
                <h3 className="font-heading text-lg font-light">{feature.title}</h3>
                <p className="mt-2 text-sm text-soft">{feature.description}</p>
                <a
                  href="#about"
                  className="mt-3 inline-block text-sm text-brand underline decoration-brand/60 underline-offset-4 hover:no-underline"
                >
                  Learn More
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
