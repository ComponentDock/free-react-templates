import { Leaf, Brain, Hand, Zap, BookOpen, Wind } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface ServiceItem {
  title: string
  description: string
  icon: LucideIcon
}

const services: ServiceItem[] = [
  {
    title: 'Asana',
    description:
      'Master the foundational postures that build strength, balance, and flexibility through mindful movement.',
    icon: Leaf,
  },
  {
    title: 'Meditation',
    description:
      'Cultivate awareness and inner calm through guided meditation practices for everyday life.',
    icon: Brain,
  },
  {
    title: 'Mudra',
    description:
      'Explore sacred hand gestures that channel energy flow and enhance your meditation experience.',
    icon: Hand,
  },
  {
    title: 'Bandhas',
    description:
      'Learn energy locks that stabilize the body, control breath, and deepen your practice.',
    icon: Zap,
  },
  {
    title: 'Philosophy',
    description:
      'Study the ancient texts and principles that form the spiritual foundation of yoga.',
    icon: BookOpen,
  },
  {
    title: 'Pranayama',
    description: 'Harness the power of breath control to energize the body and quiet the mind.',
    icon: Wind,
  },
]

interface ServicesProps {
  className?: string
}

export function Services({ className }: ServicesProps) {
  return (
    <section id="services" className={cn('bg-light-bg py-20', className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-brand">
          Our Services
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-heading">What We Offer</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="rounded-lg bg-white p-6 text-center shadow-sm">
                <Icon
                  className="mx-auto h-10 w-10 text-brand"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 font-semibold text-heading">{service.title}</h3>
                <p className="mt-2 text-sm text-text">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
