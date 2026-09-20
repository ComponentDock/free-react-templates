import { Button } from '@free-react-templates/ui'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Personal',
    price: '$49',
    features: ['Single attendee', 'All sessions access', 'Lunch included', 'Certificate'],
    featured: false,
  },
  {
    name: 'Small Team',
    price: '$199',
    features: [
      'Up to 5 attendees',
      'All sessions access',
      'Lunch included',
      'Certificate',
      'Workshop access',
    ],
    featured: true,
  },
  {
    name: 'Family Pack',
    price: '$399',
    features: [
      'Up to 10 attendees',
      'All sessions access',
      'Lunch included',
      'Certificate',
      'Workshop access',
      'VIP lounge',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section className="bg-light-bg py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Conference Ticket Pricing</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border p-8 text-center transition-shadow hover:shadow-lg ${
                plan.featured ? 'border-primary bg-white shadow-md' : 'border-border bg-white'
              }`}
            >
              <h3 className="mb-2 text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mb-1 text-sm text-muted">Enjoy All The Features</p>
              <p className="mb-6 text-4xl font-extrabold text-primary">{plan.price}</p>
              <ul className="mb-6 space-y-3 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.featured
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Buy Ticket
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
