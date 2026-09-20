import { MapPin, Globe, Building2, UtensilsCrossed } from 'lucide-react'

const services = [
  {
    icon: MapPin,
    title: 'Venue',
    description: '203 Fake St. Mountain View, San Francisco, California, USA',
  },
  {
    icon: Globe,
    title: 'Transport',
    description: 'Convenient shuttle services from major airports and hotels.',
  },
  {
    icon: Building2,
    title: 'Hotel',
    description: 'Partner hotels with exclusive conference rates available.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant',
    description: 'On-site dining with catering for all dietary needs.',
  },
]

export function Services() {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="text-center text-white">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{service.title}</h3>
              <p className="text-sm text-white/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
