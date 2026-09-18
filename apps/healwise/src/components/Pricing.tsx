import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '24.50',
    features: ['General Consultation', 'Basic Health Check', 'Blood Test', 'Prescription'],
  },
  {
    name: 'Standard',
    price: '34.50',
    features: [
      'General Consultation',
      'Full Health Check',
      'Blood & Urine Test',
      'Prescription',
      'Follow-up Visit',
    ],
  },
  {
    name: 'Premium',
    price: '54.50',
    features: [
      'General Consultation',
      'Comprehensive Check',
      'All Lab Tests',
      'Prescription',
      'Follow-up Visit',
      'Specialist Referral',
    ],
    highlighted: true,
  },
  {
    name: 'Platinum',
    price: '89.50',
    features: [
      'VIP Consultation',
      'Complete Health Panel',
      'All Lab Tests',
      'Prescription',
      'Priority Scheduling',
      'Dedicated Care Manager',
      'Home Visit',
    ],
  },
]

export function Pricing() {
  return (
    <section className="bg-paper py-20" data-testid="pricing">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">Pricing</p>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">Our Pricing Plans</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-8 text-center shadow-sm transition-shadow hover:shadow-md ${
                plan.highlighted ? 'bg-brand text-white' : 'bg-white'
              }`}
            >
              <h3
                className={`mb-2 text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-ink'}`}
              >
                {plan.name}
              </h3>
              <p className={`mb-6 text-sm ${plan.highlighted ? 'text-white/70' : 'text-mist'}`}>
                Per Month
              </p>
              <div className="mb-6">
                <span
                  className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-brand'}`}
                >
                  ${plan.price}
                </span>
              </div>
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check size={16} className={plan.highlighted ? 'text-white' : 'text-brand'} />
                    <span className={plan.highlighted ? 'text-white/90' : 'text-mist'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`inline-block rounded px-6 py-2 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-brand hover:bg-white/90'
                    : 'bg-brand text-white hover:bg-brand-dark'
                }`}
              >
                Get Offer
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
