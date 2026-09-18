import { Shirt, Wind } from 'lucide-react'

const services = [
  {
    icon: Shirt,
    title: 'Cloth laundry',
    description:
      'The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!',
    image: 'https://picsum.photos/seed/presswell-laundry/600/400',
  },
  {
    icon: Wind,
    title: 'Cloth ironing',
    description:
      'The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!',
    image: 'https://picsum.photos/seed/presswell-ironing/600/400',
  },
] as const

export function Services() {
  return (
    <section id="services" className="py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Services
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Services we offer
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="group relative overflow-hidden rounded-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/70 p-8 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <service.icon className="h-10 w-10 text-brand" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
