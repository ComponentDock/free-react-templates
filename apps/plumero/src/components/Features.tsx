import { CreditCard, Package, Truck, Gift } from 'lucide-react'

const features = [
  { icon: CreditCard, title: 'Credit Card Support' },
  { icon: Package, title: 'Online Order' },
  { icon: Truck, title: 'Free Delivery' },
  { icon: Gift, title: 'Product with Gift' },
] as const

export function Features() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-12 max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-dark-purple sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="text-secondary-text">
            We provide the best shopping experience with premium products, secure payments, and free
            delivery on all orders.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center rounded-lg border border-border p-6 text-center transition-shadow hover:shadow-md"
            >
              <feature.icon className="mb-4 h-12 w-12 text-brand" />
              <h3 className="font-heading text-lg font-semibold text-dark-purple">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
