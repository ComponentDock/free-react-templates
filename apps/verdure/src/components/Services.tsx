import { Droplets, Mountain, Fence, Shovel } from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: 'Gardening Water System',
    description:
      'Efficient irrigation and water management solutions that keep your garden lush and healthy while conserving water resources.',
  },
  {
    icon: Mountain,
    title: 'Preparing Landscape',
    description:
      'Complete landscape preparation from soil grading to planting design, creating the perfect foundation for your outdoor space.',
  },
  {
    icon: Fence,
    title: 'Garden Fence',
    description:
      'Professional fence installation and repair services to define boundaries, add privacy, and enhance the look of your property.',
  },
  {
    icon: Shovel,
    title: 'Garden Supplies',
    description:
      'Premium quality tools, plants, fertilizers, and materials to support all your gardening and landscaping needs.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-verdure-400">
            Services
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Explore Our Best Offer</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl bg-white p-8 text-center shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-verdure-100">
                <Icon className="h-8 w-8 text-verdure-400" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
