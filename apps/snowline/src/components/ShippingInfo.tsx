import { Truck, Tag, Shield, Headphones } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Divided face for bearing the divide unto seed winged divided light forth.',
  },
  {
    icon: Tag,
    title: 'Weekly Discount',
    description: 'Divided face for bearing the divide unto seed winged divided light forth.',
  },
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Divided face for bearing the divide unto seed winged divided light forth.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Divided face for bearing the divide unto seed winged divided light forth.',
  },
] as const

export function ShippingInfo() {
  return (
    <section className="bg-white py-16 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {features.map((feat) => (
          <div key={feat.title} className="text-center">
            <feat.icon className="mx-auto h-12 w-12 text-brand-pink" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold text-heading">{feat.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
