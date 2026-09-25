import { Shirt, Map, Camera, Award, Users, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ServicesProps {
  className?: string
}

interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    icon: Shirt,
    title: 'Gear Reviews',
    description: 'In-depth reviews of skateboarding gear, decks, wheels, and safety equipment.',
  },
  {
    icon: Map,
    title: 'Spot Guides',
    description: 'Discover the best skate spots, parks, and street terrain in your city.',
  },
  {
    icon: Camera,
    title: 'Video Production',
    description: 'Professional skate video editing, filming, and content creation services.',
  },
  {
    icon: Award,
    title: 'Competition Coaching',
    description: 'One-on-one coaching for competitions, contests, and event preparation.',
  },
  {
    icon: Users,
    title: 'Community Events',
    description: 'Organizing skate meetups, jams, and community gatherings worldwide.',
  },
  {
    icon: Zap,
    title: 'Skill Workshops',
    description: 'Hands-on workshops covering trick progression, style, and safety.',
  },
]

export function Services({ className = '' }: ServicesProps) {
  return (
    <section id="services" className={`py-20 bg-surface ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-3">
            What We Offer
          </h2>
          <div className="h-1 w-16 bg-brand mx-auto" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="bg-surface-light rounded-lg p-8 text-center transition-transform hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon size={32} />
                </div>
                <h3 className="font-oswald text-xl font-semibold uppercase tracking-wider text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-muted leading-relaxed">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
