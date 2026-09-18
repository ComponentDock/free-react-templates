import { cn } from '@free-react-templates/ui'

interface PricingPlan {
  name: string
  subtitle: string
  price: number
  features: string[]
  highlighted?: boolean
}

const PLANS: PricingPlan[] = [
  {
    name: 'Early Bird',
    subtitle: 'For the fast ones',
    price: 65,
    features: ['Early Entrance', 'Front seat', 'Complementary Drinks', 'Promo Gift'],
    highlighted: true,
  },
  {
    name: 'Start up',
    subtitle: 'For the beginners',
    price: 85,
    features: ['Early Entrance', 'Front seat', 'Complementary Drinks', 'Promo Gift'],
  },
  {
    name: 'Corporate',
    subtitle: 'For the business',
    price: 95,
    features: ['Early Entrance', 'Front seat', 'Complementary Drinks', 'Promo Gift'],
  },
]

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md text-center overflow-hidden',
        plan.highlighted && 'ring-2 ring-[var(--color-brand)] relative',
      )}
    >
      {plan.highlighted && (
        <div className="bg-[var(--color-brand)] text-white text-xs font-bold uppercase py-1">
          Recommended
        </div>
      )}
      <div className="p-8">
        <h4 className="text-xl font-bold text-[var(--color-heading)] mb-1">{plan.name}</h4>
        <p className="text-sm text-[var(--color-body)] mb-4">{plan.subtitle}</p>
        <div className="text-5xl font-black text-[var(--color-heading)] mb-6">
          {plan.price}
          <sup className="text-lg">$</sup>
        </div>
        <ul className="space-y-2 mb-6">
          {plan.features.map((f) => (
            <li key={f} className="text-sm text-[var(--color-body)]">
              {f}
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="inline-block bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white px-8 py-2 rounded-full text-sm font-semibold transition-colors"
        >
          Purchase
        </a>
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section className="pb-16 font-[family-name:var(--font-montserrat)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold uppercase text-[var(--color-heading)] relative inline-block pb-3 before:absolute before:top-0 before:left-0 before:w-8 before:border-t-3 before:border-[var(--color-brand)]">
            Pricing Table
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
