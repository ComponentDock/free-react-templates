import { Truck, CreditCard, Headphones, Gift } from 'lucide-react'

const FEATURES = [
  { icon: Truck, title: 'Free Shipping', subtitle: 'On orders over $99' },
  { icon: CreditCard, title: 'Card Delivery', subtitle: 'Secure payment' },
  { icon: Headphones, title: 'Support 24/7', subtitle: 'Instant access' },
  { icon: Gift, title: 'Gift Voucher', subtitle: 'Send gift cards' },
]

export function Characteristics() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="flex items-center gap-4 rounded-lg border border-gray-100 bg-mist p-5 transition-shadow hover:shadow-md"
          >
            <feature.icon className="h-10 w-10 flex-shrink-0 text-primary-400" />
            <div>
              <h3 className="font-display text-sm font-bold text-ink">{feature.title}</h3>
              <p className="text-xs text-smoke">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
