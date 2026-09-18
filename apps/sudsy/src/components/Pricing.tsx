import { Car, Droplets, Sparkles } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

interface PricingPlan {
  name: string
  price: string
  icon: React.ReactNode
  features: string[]
}

const plans: PricingPlan[] = [
  {
    name: 'Car Wash',
    price: '$50.00',
    icon: <Car className="h-8 w-8 text-brand" aria-hidden="true" />,
    features: [
      'Exterior hand wash',
      'Tire cleaning',
      'Window cleaning',
      'Dashboard wipe',
      'Air freshener',
    ],
  },
  {
    name: 'Detailing',
    price: '$100.00',
    icon: <Sparkles className="h-8 w-8 text-brand" aria-hidden="true" />,
    features: [
      'Full exterior polish',
      'Interior vacuum',
      'Leather conditioning',
      'Engine bay clean',
      'Trunk detailing',
    ],
  },
  {
    name: 'Wash & Detailing',
    price: '$200.00',
    icon: <Droplets className="h-8 w-8 text-brand" aria-hidden="true" />,
    features: [
      'Complete exterior wash',
      'Full interior deep clean',
      'Paint correction',
      'Ceramic coating',
      'Premium air freshener',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Pricing</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink">Our Pricing</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-lg border border-gray-200 bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                {plan.icon}
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-ink">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-brand">{plan.price}</span>
              </div>
              <ul className="mt-6 space-y-3 text-left text-sm text-mist">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="mt-8 w-full rounded-[30px] border-brand py-2.5 text-sm font-bold uppercase text-brand hover:bg-brand hover:text-white"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
