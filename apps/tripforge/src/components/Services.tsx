import type { LucideIcon } from 'lucide-react'
import { BadgeCheck, Compass, Headphones, HeartHandshake } from 'lucide-react'

const SERVICES: readonly { Icon: LucideIcon; title: string; blurb: string }[] = [
  {
    Icon: BadgeCheck,
    title: 'Best Price Guarantee',
    blurb: 'We match the price of any stay, table, or tour you find elsewhere.',
  },
  {
    Icon: HeartHandshake,
    title: 'Travellers Love Us',
    blurb: 'Thousands of verified reviews from guests who booked through us.',
  },
  {
    Icon: Compass,
    title: 'Best Travel Agent',
    blurb: 'Local experts plan every itinerary around the way you like to travel.',
  },
  {
    Icon: Headphones,
    title: 'Our Dedicated Support',
    blurb: 'A real human answers within minutes, any hour of the day.',
  },
]

export function Services() {
  return (
    <section id="services" aria-label="What we offer" className="bg-mist pb-16">
      <div className="services-overlap mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ Icon, title, blurb }) => (
            <article key={title} className="service-card">
              <Icon aria-hidden="true" className="mx-auto h-12 w-12 text-coral" />
              <h3 className="mt-4 text-xl font-medium">{title}</h3>
              <p className="mt-2 text-muted">{blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
