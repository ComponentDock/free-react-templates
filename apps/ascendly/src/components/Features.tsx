import { BarChart3, Briefcase, TrendingUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FEATURES, type Feature } from '../data'
import { CtaLink } from './CtaLink'

const ICONS = {
  chart: BarChart3,
  trend: TrendingUp,
  briefcase: Briefcase,
} as const

/* feature cards — three cream cards (Financial Analysis / Marketing Plans /
   Optimize Solutions) with a giant faint indigo icon on the absolute left; the
   MIDDLE card carries the active treatment (2px indigo border, white bg). */
export function Features() {
  return (
    <section id="services-section" className="bg-white py-28 dark:bg-ink">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3">
        {FEATURES.map((feature: Feature, index: number) => {
          const Icon = ICONS[feature.icon]
          const active = index === 1
          return (
            <article
              key={feature.title}
              className={cn(
                'relative overflow-hidden p-10 transition-all',
                active ? 'border-2 border-brand bg-white' : 'bg-cream',
              )}
            >
              <Icon
                aria-hidden="true"
                className="absolute -left-2 top-8 h-28 w-28 text-brand/20 transition-transform group-hover:translate-x-2"
              />
              <h2 className="text-lg font-black text-brand">{feature.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">{feature.blurb}</p>
              <div className="mt-6">
                <CtaLink />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
