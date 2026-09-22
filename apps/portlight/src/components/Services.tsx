import { cn } from '@free-react-templates/ui'
import { Coffee, UtensilsCrossed, Car, Sparkles, BedDouble } from 'lucide-react'

const SERVICES = [
  {
    icon: Coffee,
    title: 'Friendly Service',
    description:
      'Our staff provides warm, attentive service to make every guest feel at home during their stay.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Get Breakfast',
    description:
      'Start your day with a complimentary gourmet breakfast featuring local and international cuisine.',
  },
  {
    icon: Car,
    title: 'Transfer Services',
    description:
      'Complimentary airport shuttle and local transfer services available for all hotel guests.',
  },
  {
    icon: Sparkles,
    title: 'Suites & Spa',
    description:
      'Unwind in our luxury spa and enjoy world-class treatments and relaxation facilities.',
  },
  {
    icon: BedDouble,
    title: 'Cozy Rooms',
    description:
      'Beautifully appointed rooms with premium bedding, modern amenities, and stunning views.',
  },
] as const

interface ServicesProps {
  className?: string
}

export function Services({ className }: ServicesProps) {
  return (
    <section className={cn('bg-paper py-20', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink">You&apos;ll Never Want To Leave</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {SERVICES.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white">
                <service.icon className="h-7 w-7 text-brand" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-ink">{service.title}</h3>
              <p className="text-sm leading-relaxed text-mist">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
