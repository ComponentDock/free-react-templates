import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { SectionTitle } from './SectionTitle'

interface Plan {
  name: string
  price: string
  highlighted: boolean
  features: string[]
}

const PLANS: Plan[] = [
  {
    name: 'Business',
    price: '$ 55.99',
    highlighted: true,
    features: [
      'Free vehicle delivery',
      'Weddings celebrations',
      'Full insurance included',
      'Transport abroad',
      'All inclusive',
      'Mini bar',
      'Chauffer included in price',
    ],
  },
  {
    name: 'Trial',
    price: 'Free',
    highlighted: false,
    features: [
      'Free vehicle delivery',
      'Other celebrations',
      'Full insurance',
      'Transport abroad',
      'Mini bar included in price',
    ],
  },
  {
    name: 'Standard',
    price: '$ 35.99',
    highlighted: false,
    features: [
      'Delivery at airport',
      'Weddings and other',
      'Full included',
      'Transport abroad',
      'All inclusive',
      'Mini bar',
      'Chauffer price',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/autodock-pricing/1920/800')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-carbon/80" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionTitle title="Only quality for clients" tone="light" />
        <div className="grid gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={cn('p-8', plan.highlighted ? 'bg-brand text-carbon' : 'bg-white text-ink')}
            >
              <h3 className="text-lg font-bold uppercase">{plan.name}</h3>
              <p className="mt-4 text-4xl font-extrabold">{plan.price}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest opacity-80">
                Per month
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check
                      className={cn(
                        'h-4 w-4 shrink-0',
                        plan.highlighted ? 'text-carbon' : 'text-brand',
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
