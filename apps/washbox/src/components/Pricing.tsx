import { Droplets } from 'lucide-react'

interface PricingPlan {
  name: string
  price: string
  features: string[]
}

const PLANS: PricingPlan[] = [
  {
    name: 'Car Wash',
    price: '$50.00',
    features: [
      'Exterior hand wash',
      'Wheel & tire cleaning',
      'Window cleaning',
      'Air freshener',
      'Basic vacuum',
    ],
  },
  {
    name: 'Detailing',
    price: '$100.00',
    features: [
      'Full interior cleaning',
      'Leather conditioning',
      'Dashboard restoration',
      'Deep carpet shampoo',
      'Trunk detailing',
    ],
  },
  {
    name: 'Wash & Detailing',
    price: '$200.00',
    features: [
      'Complete exterior wash',
      'Full interior detail',
      'Paint correction',
      'Ceramic coating',
      'Engine bay cleaning',
    ],
  },
]

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div className="bg-white border border-[#E7E6EB] rounded-lg p-8 text-center transition-shadow hover:shadow-lg group">
      <div className="mb-4">
        <Droplets size={40} className="mx-auto text-brand mb-3" />
        <h3 className="text-xl font-bold font-[Work_Sans]" style={{ color: '#010A44' }}>
          {plan.name}
        </h3>
        <p className="text-sm text-gray-500">Starting at</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold" style={{ color: '#4C1E51' }}>
          {plan.price}
        </span>
      </div>

      <ul className="space-y-3 mb-8 text-left">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm"
            style={{ color: '#10285d' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="inline-flex items-center justify-center px-8 py-3 rounded-[30px] text-sm font-semibold border-2 border-brand text-brand transition-all group-hover:bg-brand group-hover:text-white"
      >
        Get Started
      </a>
    </div>
  )
}

export function Pricing() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold font-[Work_Sans]"
            style={{ color: '#010A44' }}
          >
            We offer best services to our customer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
