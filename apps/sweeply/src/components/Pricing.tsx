const plans = [
  { name: 'Basic', price: '$29.00', active: false },
  { name: 'Standard', price: '$59.00', active: false },
  { name: 'Premium', price: '$79.00', active: true },
  { name: 'Ultimate', price: '$89.50', active: false },
]

const features = [
  '1 Bathroom cleaning',
  'Up to 3 bedrooms',
  '1 Livingroom',
  'Carpet Cleaning',
  'Dining Room',
]

export function Pricing() {
  return (
    <section className="py-16" id="pricing">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-brand uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl font-bold text-heading mt-3">Our Plans &amp; Pricing</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-8 text-center border-2 transition-colors ${
                plan.active
                  ? 'border-brand bg-brand text-white'
                  : 'border-gray-200 bg-white hover:border-brand/30'
              }`}
            >
              <h3
                className={`text-xl font-bold mb-4 ${plan.active ? 'text-white' : 'text-heading'}`}
              >
                {plan.name}
              </h3>
              <div className="mb-6">
                <span
                  className={`text-3xl font-bold ${plan.active ? 'text-white' : 'text-heading'}`}
                >
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.active ? 'text-white/70' : 'text-muted'}`}>
                  {' '}
                  / session
                </span>
              </div>
              <ul
                className={`text-sm space-y-2 mb-8 text-left ${plan.active ? 'text-white/80' : 'text-body'}`}
              >
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="fa fa-check text-xs" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-md font-semibold transition-colors ${
                  plan.active
                    ? 'bg-white text-brand hover:bg-gray-100'
                    : 'bg-brand text-white hover:bg-brand-dark'
                }`}
              >
                Sign Up
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
