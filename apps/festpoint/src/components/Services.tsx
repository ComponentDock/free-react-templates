import { MapPin, Globe, Hotel, UtensilsCrossed } from 'lucide-react'

const services = [
  {
    icon: MapPin,
    title: 'Venue',
    description: '203 Conference Blvd, Mountain View, San Francisco, California, USA.',
  },
  {
    icon: Globe,
    title: 'Transport',
    description: 'Shuttle services and public transit guides to get you there hassle-free.',
  },
  {
    icon: Hotel,
    title: 'Hotel',
    description: 'Partner hotels with exclusive discounts for conference attendees.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant',
    description: 'Curated dining recommendations near the venue for every taste.',
  },
]

export function Services() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-fest-100 text-fest-600">
                <service.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
