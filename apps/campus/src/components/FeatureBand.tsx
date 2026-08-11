import { BookOpen, Headset, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { featureLabel, features } from '../data'

const featureIcons: readonly LucideIcon[] = [BookOpen, Users, Headset]

export function FeatureBand() {
  return (
    <section aria-label={featureLabel} className="relative z-10 -mt-14 px-4 sm:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 bg-gradient-to-r from-brand to-brand-2 md:grid-cols-3">
        {features.map((feature, index) => {
          // Index is bounded by the features array — no fallback needed.
          const Icon = featureIcons[index] as LucideIcon
          return (
            <div
              key={feature.seed}
              className="flex items-center gap-5 px-6 py-10 text-white md:border-r-2 md:border-white/60 md:last:border-r-0"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center">
                <Icon aria-hidden="true" className="h-10 w-10" />
              </span>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}
