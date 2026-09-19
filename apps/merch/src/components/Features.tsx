import { Truck, ShieldCheck, RotateCcw } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Worldwide Delivery',
    description: 'We deliver to over 200 countries with tracked shipping on every order.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    description: 'Your payment information is encrypted and never stored on our servers.',
  },
  {
    icon: RotateCcw,
    title: 'Simple Returns',
    description: 'Not satisfied? Return any item within 45 days for a full refund.',
  },
] as const

export function Features() {
  return (
    <section className="bg-mist py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {features.map((feature) => (
          <div key={feature.title} className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50">
              <feature.icon className="h-7 w-7 text-primary-400" aria-hidden="true" />
            </div>
            <h3 className="font-display text-lg font-bold text-ink">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
