import { Wifi, Droplets, Coffee, Wine, Tv, UtensilsCrossed } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const services = [
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description:
      'Stay connected with complimentary high-speed internet access throughout the hotel.',
  },
  {
    icon: Droplets,
    title: 'Premium Pool',
    description:
      'Enjoy our stunning infinity pool with breathtaking city views and poolside service.',
  },
  {
    icon: Coffee,
    title: 'Coffee Maker',
    description:
      'Premium coffee maker in every room with a curated selection of artisanal coffee blends.',
  },
  {
    icon: Wine,
    title: 'Bar Wine',
    description: 'Unwind at our rooftop bar with a carefully selected collection of fine wines.',
  },
  {
    icon: Tv,
    title: 'TV HD',
    description:
      'Each room features a 55-inch HD smart television with access to streaming services.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant',
    description: 'Savor exquisite cuisine from our award-winning chefs at our on-site restaurant.',
  },
]

export function Services({ className }: { className?: string }) {
  return (
    <section className={cn('py-24', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 text-center font-heading text-sm font-semibold uppercase tracking-[4px] text-brand">
          Our Services
        </p>
        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-ink sm:text-4xl">
          Hotel Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-brand/10 transition group-hover:bg-brand/20">
                <service.icon size={32} className="text-brand" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-ink">{service.title}</h3>
              <p className="text-sm leading-relaxed text-mist">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
