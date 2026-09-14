import { Hotel, Plane, Map } from 'lucide-react'

const services = [
  {
    icon: Hotel,
    title: 'Hotel Booking',
    description:
      'Great so dominion two seed give dry rule be fowl him female you will gathered creeping and created air.',
  },
  {
    icon: Plane,
    title: 'Flight Booking',
    description:
      'Great so dominion two seed give dry rule be fowl him female you will gathered creeping and created air.',
  },
  {
    icon: Map,
    title: 'Destination Booking',
    description:
      'Great so dominion two seed give dry rule be fowl him female you will gathered creeping and created air.',
  },
]

export function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-32">
      <div className="mb-16 text-center">
        <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">
          Our Popular Services
        </h2>
        <p className="mt-3 text-sm text-smoke">
          Fowl have fruit moveth male they are that place you will lesser
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-50">
              <s.icon size={32} className="text-primary-500" />
            </div>
            <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-smoke">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
