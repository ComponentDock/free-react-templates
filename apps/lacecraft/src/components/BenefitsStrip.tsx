import { Truck, RotateCcw, Shield, CreditCard } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const benefits = [
  {
    icon: Truck,
    title: 'Free Shipping',
    desc: 'Free standard shipping on all orders over $75. Fast checkout, no hidden fees.',
  },
  {
    icon: RotateCcw,
    title: '60-Day Returns',
    desc: 'Changed your mind? Return within 60 days for a full refund, hassle-free.',
  },
  {
    icon: Shield,
    title: 'Size Guarantee',
    desc: "Not the right fit? We'll exchange your shoes for free within 30 days.",
  },
  {
    icon: CreditCard,
    title: 'Secure Checkout',
    desc: 'Your payment is protected with industry-leading encryption and security.',
  },
]

export function BenefitsStrip() {
  return (
    <section className="bg-gray-50 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col items-center text-center">
              <div
                className={cn(
                  'flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30',
                )}
              >
                <b.icon
                  className="h-6 w-6 text-primary-600 dark:text-primary-400"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-3 font-display text-sm font-bold text-gray-900 dark:text-white">
                {b.title}
              </h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
