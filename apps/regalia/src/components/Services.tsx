import { UtensilsCrossed, BedDouble, Waves, Sparkles } from 'lucide-react'

const SERVICES = [
  {
    icon: BedDouble,
    title: 'Room Service',
    description:
      'Enjoy premium room service with gourmet meals delivered to your door around the clock.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant',
    description:
      'Savor exquisite cuisines crafted by our award-winning chefs in an elegant setting.',
  },
  {
    icon: Sparkles,
    title: 'Spa & Wellness',
    description:
      'Rejuvenate your body and soul with our luxurious spa treatments and wellness programs.',
  },
  {
    icon: Waves,
    title: 'Swimming Pool',
    description:
      'Take a dip in our infinity pool with stunning views of the surrounding landscape.',
  },
]

export function Services() {
  return (
    <section className="bg-white py-20" aria-label="Services">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-heading text-3xl font-semibold text-text-heading">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            We provide exceptional services to make your stay unforgettable
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-bg-warm">
                <service.icon size={28} className="text-accent-gold" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-text-heading">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
