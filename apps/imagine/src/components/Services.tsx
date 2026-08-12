import { Gift, Phone, Rocket, Wand2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  title: string
  description: string
  icon: LucideIcon
}

const SERVICES: Service[] = [
  {
    title: 'Easy Flight Search',
    description:
      'Search hundreds of airlines and find the perfect route in seconds with our smart flight finder.',
    icon: Rocket,
  },
  {
    title: 'Get Hotel Offers',
    description:
      'Unlock exclusive hotel deals and curated stays that fit your budget wherever you travel.',
    icon: Wand2,
  },
  {
    title: 'Holiday Packages',
    description:
      'All-in-one holiday bundles with flights, stays, and experiences planned around your dream trip.',
    icon: Gift,
  },
  {
    title: 'Dedicated Support',
    description:
      'A friendly support crew on call around the clock to answer every question along the way.',
    icon: Phone,
  },
]

/* Services strip recreated from the source's icon-card row: a centered
   heading with four cards, each with a muted icon (gradient on hover), a
   title, a short paragraph, and an outline pill button. */

export function Services() {
  return (
    <section id="service" aria-label="Services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-ink lg:text-4xl">
            Latest News from all categories
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-icon">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article key={service.title} className="group rounded-lg p-6 text-center">
              <service.icon
                aria-hidden="true"
                className="mx-auto h-9 w-9 text-icon transition-colors group-hover:bg-gradient-to-r group-hover:from-brand-start group-hover:to-brand-end group-hover:bg-clip-text group-hover:text-transparent"
              />
              <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-icon">{service.description}</p>
              <a
                href="#service"
                className="mt-5 inline-flex rounded-full border border-outline px-7 py-2 text-sm font-semibold text-ink transition-colors group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-brand-start group-hover:to-brand-end group-hover:text-white"
              >
                View Details
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
