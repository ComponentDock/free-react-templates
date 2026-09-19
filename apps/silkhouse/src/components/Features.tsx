import { Truck, RefreshCw, Headphones, CreditCard } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Fast & Free Delivery',
    description: 'Free delivery on all orders over $50',
  },
  { icon: RefreshCw, title: 'Return Policy', description: 'Easy returns within 30 days' },
  { icon: Headphones, title: '24/7 Support', description: 'Online support around the clock' },
  { icon: CreditCard, title: 'Secure Payment', description: '100% secure payment processing' },
]

export function Features() {
  return (
    <section aria-label="Features" className="bg-gray-bg py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon size={40} className="mx-auto mb-4 text-brand" aria-hidden="true" />
              <h3 className="mb-2 text-sm font-semibold text-text-dark">{feature.title}</h3>
              <p className="text-xs text-text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
