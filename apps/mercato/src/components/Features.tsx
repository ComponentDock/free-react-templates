import { Truck, RefreshCw, Headphones, ShieldCheck } from 'lucide-react'

const features = [
  { icon: Truck, title: 'Free Delivery', description: 'Free Shipping on all orders' },
  { icon: RefreshCw, title: 'Return Policy', description: 'Free returns within 30 days' },
  { icon: Headphones, title: '24/7 Support', description: 'Dedicated support team online' },
  { icon: ShieldCheck, title: 'Secure Payment', description: '100% secure checkout' },
]

export function Features() {
  return (
    <section className="py-20 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
              <feature.icon size={28} />
            </div>
            <h3 className="mb-1 text-sm font-semibold text-heading dark:text-white">
              {feature.title}
            </h3>
            <p className="text-sm text-ink dark:text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
