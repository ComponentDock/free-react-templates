import { Cake, Truck, Heart } from 'lucide-react'

const features = [
  {
    icon: Cake,
    title: 'Custom Cakes',
    description:
      'Bespoke designs for weddings, birthdays, and celebrations — crafted to match your vision perfectly.',
  },
  {
    icon: Truck,
    title: 'Fresh Delivery',
    description:
      'Same-day delivery within the city. Your cake arrives fresh, on time, and beautifully presented.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description:
      'Every ingredient is hand-selected for quality. No shortcuts, no preservatives — just pure goodness.',
  },
]

export function Services() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="font-dm-sans text-sm uppercase tracking-[0.2em] text-orange-600">
            Our Features
          </span>
          <h2 className="mt-3 font-quicksand text-3xl font-bold text-gray-900 md:text-4xl">
            Quality is Our First Priority
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 font-quicksand text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
