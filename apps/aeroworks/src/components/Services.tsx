import { Car, ShoppingCart, Wrench, Headphones } from 'lucide-react'

const services = [
  {
    icon: Car,
    title: 'Rental A Cars',
    description:
      'Flexible car rental plans for every occasion. Choose from a wide range of vehicles.',
  },
  {
    icon: ShoppingCart,
    title: 'Buying A Cars',
    description: 'Find your perfect car at the best price. Browse our curated inventory today.',
  },
  {
    icon: Wrench,
    title: 'Car Maintenance',
    description: 'Professional maintenance services to keep your vehicle running at its best.',
  },
  {
    icon: Headphones,
    title: 'Support 24/7',
    description: 'Round-the-clock customer support to assist you with any questions or needs.',
  },
]

export function Services() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2px] border border-border bg-white p-9 text-center"
            >
              <service.icon size={40} className="mx-auto mb-5 text-primary-500" strokeWidth={1.5} />
              <h3 className="mb-3 text-lg font-bold text-text-dark">{service.title}</h3>
              <p className="text-sm leading-relaxed text-text-medium">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
