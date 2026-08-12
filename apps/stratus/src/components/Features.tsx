import { Cloud, Globe, ShieldCheck, type LucideIcon } from 'lucide-react'
import { FEATURES, type FeatureIcon } from '../data'

/* Feature row recreated from the ColorLib "Cloud83" features: a white row of
   three cards, each with a line icon, a bold heading, and a short
   description (Worldwide Support / Safe & Secure / Cloud Hosting). */

const featureIcons: Record<FeatureIcon, LucideIcon> = {
  globe: Globe,
  shield: ShieldCheck,
  cloud: Cloud,
}

export function Features() {
  return (
    <section id="features-section" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {FEATURES.map((feature) => {
          const Icon = featureIcons[feature.icon]
          return (
            <article key={feature.title} className="text-center">
              <Icon
                className="mx-auto h-[60px] w-[60px] text-brand"
                aria-hidden="true"
                strokeWidth={1.2}
              />
              <h4 className="mt-6 text-[20px] font-semibold text-heading">{feature.title}</h4>
              <p className="mt-3 text-[16px] leading-relaxed text-body">{feature.blurb}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
