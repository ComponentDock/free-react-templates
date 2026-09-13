import { Leaf, Scissors, Droplets } from 'lucide-react'

const services = [
  {
    icon: Leaf,
    title: 'Garden Care',
    description:
      'Complete garden maintenance including pruning, weeding, and plant care to keep your garden healthy and beautiful.',
  },
  {
    icon: Scissors,
    title: 'Lawn Mowing',
    description:
      'Regular mowing services with professional equipment for a clean, even cut every time. Keep your lawn looking pristine.',
  },
  {
    icon: Droplets,
    title: 'Lawn Treatment',
    description:
      'Fertilization, aeration, and pest control treatments tailored to your lawn condition for optimal growth and health.',
  },
] as const

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="services-heading" className="text-center text-3xl font-bold text-ink sm:text-4xl">
          Lawn Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          We provide comprehensive lawn care services tailored to meet your specific needs and
          budget.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center rounded-lg border border-gray-100 bg-cream p-8 text-center transition-shadow hover:shadow-lg"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                <service.icon className="h-8 w-8 text-primary-400" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
