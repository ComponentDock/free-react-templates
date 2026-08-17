import { Handshake, Headphones, Armchair, UtensilsCrossed } from 'lucide-react'
import { FEATURES, type Feature } from '../data'
import { cn } from '@free-react-templates/ui'

const FEATURE_ICONS: Record<Feature['icon'], typeof Handshake> = {
  deals: Handshake,
  quality: UtensilsCrossed,
  design: Armchair,
  support: Headphones,
}

/* FeatureCards — four equal pastel cards with a circular icon, title, and
   a distinct blurb (source repeats one placeholder; paraphrased here). */
export function FeatureCards() {
  return (
    <section aria-label="Features" className="bg-paper py-16">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => {
          const Icon = FEATURE_ICONS[feature.icon]
          return (
            <article key={feature.title} className={cn('p-8 text-center', feature.bg)}>
              <span
                aria-label={`${feature.title} icon`}
                className={cn(
                  'mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-paper',
                  feature.iconColor,
                )}
              >
                <Icon className="h-9 w-9" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-xl font-semibold text-ink">{feature.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted">{feature.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
