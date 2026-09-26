import { Compass, Palette, Code, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
  link: string
}

const services: ServiceItem[] = [
  {
    icon: Compass,
    title: 'Strategy & Direction',
    description:
      'Understand First. We dive deep into your business goals, user needs, and market landscape to chart a clear path forward.',
    link: '#',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Crafting intuitive interfaces that delight users. From wireframes to high-fidelity prototypes, every pixel matters.',
    link: '#',
  },
  {
    icon: Code,
    title: 'Development',
    description:
      'Bringing designs to life with clean, performant code. Modern frameworks and best practices for scalable solutions.',
    link: '#',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Analytics',
    description:
      'Data-driven decisions to optimize conversion and engagement. Continuous iteration based on real user behavior.',
    link: '#',
  },
]

export function Services() {
  return (
    <section id="service" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display mb-12 text-3xl font-bold text-ink md:text-4xl">My Expertise</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-50">
                <service.icon size={28} className="text-brand" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-ink">{service.title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-mist">{service.description}</p>
                <a
                  href={service.link}
                  className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
