import { Hammer, Shovel, HardHat, Home, Fence, Bridge } from 'lucide-react'

const services = [
  {
    icon: Hammer,
    title: 'Renovation',
    description: 'Complete home and office renovation services with attention to every detail.',
  },
  {
    icon: Shovel,
    title: 'Finishing',
    description: 'Professional finishing work including painting, flooring, and trim installation.',
  },
  {
    icon: HardHat,
    title: 'Building Construction',
    description: 'Full-scale building construction from foundation to completion.',
  },
  {
    icon: Home,
    title: 'House Build',
    description: 'Custom house building tailored to your specifications and budget.',
  },
  {
    icon: Fence,
    title: 'Fence Construction',
    description: 'Durable and aesthetically pleasing fence solutions for any property.',
  },
  {
    icon: Bridge,
    title: 'Bridge Construct',
    description: 'Structural bridge construction and repair with engineering precision.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-lavender py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-brand/10 text-brand">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-ink dark:text-white">{service.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
