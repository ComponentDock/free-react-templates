import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Small Plan',
    price: 49,
    features: ['10 Hours/Month', 'Basic Research', 'Email Management', 'Scheduling'],
  },
  {
    name: 'Startup Plan',
    price: 79,
    features: ['20 Hours/Month', 'Data Entry', 'Social Media', 'Customer Support'],
  },
  {
    name: 'Medium Plan',
    price: 109,
    features: ['40 Hours/Month', 'Project Management', 'Content Writing', 'Full Admin'],
  },
  {
    name: 'Commercial Plan',
    price: 149,
    features: ['Unlimited Hours', 'Dedicated VA', 'Priority Support', 'Custom Tasks'],
  },
]

export function Pricing() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Price &amp; Plans
          </p>
          <h2 className="text-3xl font-bold">Price &amp; Plans</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              style={{ boxShadow: '0 24px 48px -13px rgba(0,0,0,0.05)' }}
            >
              <div className="mb-6 text-center">
                <span className="text-4xl font-bold text-[#21bf73]">${plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <h3 className="mb-6 text-center text-lg font-bold">{plan.name}</h3>
              <ul className="mb-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#21bf73]" />
                    <span className="text-sm text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block w-full bg-blue-600 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
