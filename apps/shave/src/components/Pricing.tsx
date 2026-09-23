import { Button } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Standard',
    audience: 'For the Individuals',
    price: '£199',
    features: [
      '2.5 GB Free Photos',
      'Secure Online Transfer Indeed',
      'Unlimited Styles for Interface',
      'Reliable Customer Service',
      'Manual Backup Provided',
    ],
  },
  {
    name: 'Business',
    audience: 'For the Small Company',
    price: '£399',
    features: [
      '2.5 GB Free Photos',
      'Secure Online Transfer Indeed',
      'Unlimited Styles for Interface',
      'Reliable Customer Service',
      'Manual Backup Provided',
    ],
  },
  {
    name: 'Ultimate',
    audience: 'For the Large Company',
    price: '£499',
    features: [
      '2.5 GB Free Photos',
      'Secure Online Transfer Indeed',
      'Unlimited Styles for Interface',
      'Reliable Customer Service',
      'Manual Backup Provided',
    ],
  },
]

export function Pricing() {
  return (
    <section id="price" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Choose the Perfect Plan for you</h2>
          <p className="mt-2 text-gray-500">Flexible plans to suit every need.</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group rounded-xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-pink-400 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{plan.audience}</p>
                </div>
                <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                Comprehensive grooming package with all the essentials.
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                size="lg"
                className="mt-8 w-full rounded-full border-pink-400 text-pink-400 group-hover:bg-pink-400 group-hover:text-white"
              >
                Purchase Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
