import {
  Database,
  Headphones,
  Network,
  RefreshCw,
  Server,
  Shield,
  type LucideIcon,
} from 'lucide-react'
import { features, featuresSection } from '../data'

const featureIcons: Record<(typeof features)[number]['icon'], LucideIcon> = {
  refresh: RefreshCw,
  server: Server,
  database: Database,
  network: Network,
  shield: Shield,
  headphones: Headphones,
}

/* Light blue-grey features grid with six icon cards
   (reference: .hami-features-area.bg-gray). */
export function Features() {
  return (
    <section id="features" aria-label={featuresSection.title} className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <h2 className="text-4xl font-bold text-ink lg:text-[48px]">{featuresSection.title}</h2>
          <p className="mt-3 text-lg text-muted">{featuresSection.text}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = featureIcons[feature.icon]
            return (
              <article
                key={feature.title}
                className="rounded-lg bg-white p-10 text-center shadow-sm"
              >
                <Icon aria-hidden="true" className="mx-auto h-14 w-14 text-primary" />
                <h3 className="mt-6 text-2xl font-bold text-ink">{feature.title}</h3>
                <p className="mt-3 text-muted">{feature.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
