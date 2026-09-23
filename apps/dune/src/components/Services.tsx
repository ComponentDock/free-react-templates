import { Hotel, Plane, Map } from 'lucide-react'

const services = [
  {
    icon: Hotel,
    title: 'Hotel Booking',
    description:
      'Find and book the perfect accommodation for your trip, from budget-friendly stays to luxury resorts.',
  },
  {
    icon: Plane,
    title: 'Flight Booking',
    description:
      'Compare and book flights to destinations worldwide with the best airlines and competitive prices.',
  },
  {
    icon: Map,
    title: 'Destination Booking',
    description:
      'Explore curated destination packages with guided tours, activities, and local experiences included.',
  },
] as const

export function Services() {
  return (
    <section className="py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            What We Offer
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Our Popular Services
          </h2>
          <p className="mx-auto mt-4 max-w-md text-gray-500 dark:text-gray-400">
            We provide a complete range of travel services to make your journey seamless and
            memorable.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 text-center transition-colors hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <service.icon className="h-7 w-7 text-brand" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
