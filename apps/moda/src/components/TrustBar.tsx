import { Headphones, Lock, RotateCcw, Truck } from 'lucide-react'

const features = [
  {
    title: 'Free Shipping',
    description: 'on all orders over $100. Express delivery available.',
    icon: Truck,
  },
  {
    title: 'Secure Payment',
    description: 'processed securely with SSL encryption.',
    icon: Lock,
  },
  {
    title: 'Easy Returns',
    description: '30-day return policy. No questions asked, hassle-free returns.',
    icon: RotateCcw,
  },
  {
    title: '24/7 Support',
    description: 'available around the clock to assist you.',
    icon: Headphones,
  },
] as const

export function TrustBar() {
  return (
    <section className="border-y border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-300">
              <feature.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-base font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
