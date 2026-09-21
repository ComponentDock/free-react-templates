import { Truck, RotateCcw, Headphones, ShieldCheck } from 'lucide-react'

const features = [
  { icon: Truck, title: 'Free Delivery', description: 'Free shipping on all orders over $50' },
  { icon: RotateCcw, title: 'Return Policy', description: 'Hassle-free returns within 30 days' },
  { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock customer assistance' },
  { icon: ShieldCheck, title: 'Secure Payment', description: '100% secure checkout process' },
]

export function Features() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 lg:px-8">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
              <feature.icon size={28} className="text-brand" />
            </div>
            <h3
              className="mb-1 text-sm font-semibold text-heading"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {feature.title}
            </h3>
            <p className="text-xs text-body">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
