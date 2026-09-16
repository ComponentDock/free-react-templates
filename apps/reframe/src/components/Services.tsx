import { Building2, Home, HardHat } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const services = [
  {
    title: 'Pre-Construction',
    description:
      'Comprehensive planning and design services to ensure your project starts on the right foundation.',
    icon: Building2,
  },
  {
    title: 'House Renovation',
    description:
      'Transform your existing space with expert renovation services tailored to your vision and budget.',
    icon: Home,
  },
  {
    title: 'General Contracting',
    description:
      'Full-service construction management from groundbreaking to final walkthrough and handover.',
    icon: HardHat,
  },
]

export interface ServicesProps {
  className?: string
}

export function Services({ className }: ServicesProps) {
  return (
    <section id="services" data-testid="services" className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center font-display text-3xl font-bold uppercase text-ink md:text-4xl">
          Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded border border-gray-100 bg-paper p-8 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-mist">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
