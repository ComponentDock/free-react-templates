import { Bell, UtensilsCrossed, Car, Sparkles } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const services = [
  {
    icon: Bell,
    title: '24/7 Front Desk',
    description:
      'Our front desk is available around the clock to assist with check-in, check-out, and any guest inquiries.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant Bar',
    description:
      'Enjoy exquisite local and international cuisine prepared by our world-class chefs at our on-site restaurant.',
  },
  {
    icon: Car,
    title: 'Transfer Services',
    description:
      'Complimentary airport shuttle and local transfer services to make your arrival and departure seamless.',
  },
  {
    icon: Sparkles,
    title: 'Spa Suites',
    description:
      'Indulge in our luxurious spa suites featuring a full menu of treatments for ultimate relaxation.',
  },
]

export function Services({ className }: { className?: string }) {
  return (
    <section id="amenities" className={cn('py-24', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 text-center font-heading text-sm font-semibold uppercase tracking-[4px] text-brand">
          Our Amenities
        </p>
        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-ink sm:text-4xl">
          Hotel Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="group text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-brand/10 transition group-hover:bg-brand/20">
                <service.icon size={32} className="text-brand" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-ink">{service.title}</h3>
              <p className="mb-3 text-sm leading-relaxed text-mist">{service.description}</p>
              <a
                href="#"
                className="font-heading text-sm font-semibold uppercase tracking-[2px] text-accent transition hover:text-accent/80"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
