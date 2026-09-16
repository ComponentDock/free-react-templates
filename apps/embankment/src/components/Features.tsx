import { User, BadgeCheck, Phone, Rocket, Diamond, MessageSquare } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface FeatureItem {
  icon: LucideIcon
  title: string
  description: string
}

const features: FeatureItem[] = [
  {
    icon: User,
    title: 'Expert Technicians',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
  },
  {
    icon: BadgeCheck,
    title: 'Professional Service',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
  },
  {
    icon: Phone,
    title: 'Great Support',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
  },
  {
    icon: Rocket,
    title: 'Technical Skills',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
  },
  {
    icon: Diamond,
    title: 'Highly Recommended',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
  },
  {
    icon: MessageSquare,
    title: 'Positive Reviews',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-[120px]">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="mb-12 text-center">
          <h2 className="font-oswald text-[32px] font-medium text-dark">
            Some Features that Made us Unique
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[10px] border border-border bg-white p-8 transition-shadow hover:shadow-md"
            >
              <feature.icon className="mb-4 h-8 w-8 text-accent" strokeWidth={1.5} />
              <h4 className="font-oswald text-lg font-medium text-dark">{feature.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
