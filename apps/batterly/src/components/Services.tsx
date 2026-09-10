import { Cake, Truck, Clock } from 'lucide-react'

const features = [
  {
    icon: Cake,
    title: 'Premium Ingredients',
    description:
      'We source only the finest organic flour, Belgian chocolate, and seasonal fruits for every bake.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description:
      'Freshly baked and delivered to your door within hours. Temperature-controlled packaging keeps everything perfect.',
  },
  {
    icon: Clock,
    title: 'Custom Orders',
    description:
      'From weddings to birthdays — we design and bake custom cakes to match your celebration theme.',
  },
]

export function Services() {
  return (
    <section className="bg-card-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand">
          Our Features
        </p>
        <h2 className="mt-2 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
          Quality is Our First Priority
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="rounded-2xl bg-white p-8 shadow-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-7 w-7 text-brand" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
