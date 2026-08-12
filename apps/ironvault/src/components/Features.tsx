import { Dumbbell, HeartPulse, Trophy } from 'lucide-react'
import { FEATURES } from '../data'

const FEATURE_ICONS = [Dumbbell, HeartPulse, Trophy]

/**
 * Features — three coaching feature cards in a row, each with a brand icon,
 * an h3 title and a blurb (the demo's "Latest instoment" cards).
 */
export function Features() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = FEATURE_ICONS[index] as (typeof FEATURE_ICONS)[number]
            return (
              <article
                key={feature.title + String(index)}
                className="px-6 pb-12 pt-14 text-center transition-shadow hover:shadow-lg"
              >
                <Icon className="mx-auto h-12 w-12 text-brand" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-bold text-ink">{feature.title}</h3>
                <p className="mt-4 text-base font-light text-body">{feature.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
