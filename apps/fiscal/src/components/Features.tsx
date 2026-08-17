import { PiggyBank, ShieldCheck, TrendingUp, type LucideIcon } from 'lucide-react'
import { FEATURES, type FeatureIcon } from '../data'

const FEATURE_ICONS: Record<FeatureIcon, LucideIcon> = {
  'trending-up': TrendingUp,
  'shield-check': ShieldCheck,
  'piggy-bank': PiggyBank,
}

/* Features — three icon-plus-text cards on white, straight after the hero
   (the source's "sec-features" strip). */
export function Features() {
  return (
    <section id="features-section" aria-label="Features" className="bg-white px-4 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {FEATURES.map((feature, index) => {
          const Icon = FEATURE_ICONS[feature.icon]
          return (
            <div key={`${feature.heading}-${index}`} className="flex items-start gap-4">
              <Icon className="mt-1 h-9 w-9 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{feature.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
