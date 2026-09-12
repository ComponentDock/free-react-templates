import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Single Package',
    subtitle: 'Only Broadband connection',
    price: '20.00',
    features: [
      'Line Rental Included',
      '12 Month Contract',
      'No Activation Charges',
      'Up to 12 Mbps average Speed',
      'Enjoy family on weekends',
    ],
    featured: false,
  },
  {
    name: 'Half Package',
    subtitle: 'Broadband & TV connection',
    price: '25.00',
    features: [
      'Line Rental Included',
      '12 Month Contract',
      'No Activation Charges',
      'Up to 50 Mbps average Speed',
      'Enjoy family on weekends',
    ],
    featured: true,
  },
  {
    name: 'Full Package',
    subtitle: 'TV, Broadband and Phone',
    price: '29.00',
    features: [
      'Line Rental Included',
      '12 Month Contract',
      'No Activation Charges',
      'Up to 1 Gbps average Speed',
      'Enjoy family on weekends',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-signal-400">
            Pricing
          </span>
          <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">
            No hidden charges! Choose your plan wisely.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[0_10px] border-2 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg ${
                plan.featured ? 'border-signal-400 shadow-md' : 'border-gray-100'
              }`}
            >
              <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
                {plan.name}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-navy-800">{plan.subtitle}</h3>
              <div className="my-6">
                <span className="text-4xl font-extrabold text-navy-800">${plan.price}</span>
                <span className="text-sm text-gray-400"> / mo</span>
              </div>
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 flex-shrink-0 text-green-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`inline-block w-full rounded-[0_10px] border-2 px-6 py-3 text-sm font-bold transition-colors ${
                  plan.featured
                    ? 'border-signal-400 bg-signal-400 text-white hover:bg-signal-500'
                    : 'border-signal-400 text-signal-400 hover:bg-signal-400 hover:text-white'
                }`}
              >
                View Packages
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
