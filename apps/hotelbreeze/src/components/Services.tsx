import { cn } from '@free-react-templates/ui'
import { Utensils, Wifi, Car } from 'lucide-react'

const SERVICES = [
  {
    icon: Utensils,
    title: 'Restaurant',
    description:
      'Enjoy fine dining in our award-winning restaurant with locally sourced ingredients and world-class chefs.',
  },
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description:
      'Stay connected with complimentary high-speed internet access throughout the hotel.',
  },
  {
    icon: Car,
    title: 'Airport Transfer',
    description: 'Complimentary airport shuttle service for all hotel guests, available 24/7.',
  },
] as const

interface ServicesProps {
  className?: string
}

export function Services({ className }: ServicesProps) {
  return (
    <section id="services" className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Services
          </h2>
          <span className="mb-8 block h-px w-12 bg-brand" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gray-200">
                <service.icon className="h-7 w-7 text-brand" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-ink">{service.title}</h3>
              <p className="text-sm leading-relaxed text-mist">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
