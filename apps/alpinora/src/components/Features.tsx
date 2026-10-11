import { BadgeCheck, Code, LifeBuoy, Star, ThumbsUp, Wrench } from 'lucide-react'
import { FEATURES } from '../data/content'
import { SectionHeading } from './SectionHeading'

const ICONS = [Wrench, LifeBuoy, Code, ThumbsUp, BadgeCheck, Star]

export function Features() {
  return (
    <section id="service" className="section-gap bg-white">
      <SectionHeading title={FEATURES.title} subtitle={FEATURES.subtitle} />
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.items.map((item, i) => {
          const Icon = ICONS[i]!
          return (
            <div key={item.title} className="feature-card">
              <Icon className="h-5 w-5 text-heading" />
              <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
              <p className="mt-3 text-body">{item.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
