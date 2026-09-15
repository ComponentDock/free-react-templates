import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '$47',
    period: '/ year',
    features: [
      { text: 'Officia quaerat eaque neque', included: true },
      { text: 'Possimus aut consequuntur incidunt', included: true },
      { text: 'Lorem ipsum dolor sit amet', included: false },
      { text: 'Consectetur adipisicing elit', included: false },
      { text: 'Dolorum esse odio quas architecto sint', included: false },
    ],
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '$200',
    period: '/ year',
    features: [
      { text: 'Officia quaerat eaque neque', included: true },
      { text: 'Possimus aut consequuntur incidunt', included: true },
      { text: 'Lorem ipsum dolor sit amet', included: true },
      { text: 'Consectetur adipisicing elit', included: true },
      { text: 'Dolorum esse odio quas architecto sint', included: false },
    ],
    highlighted: true,
  },
  {
    name: 'Professional',
    price: '$750',
    period: '/ year',
    features: [
      { text: 'Officia quaerat eaque neque', included: true },
      { text: 'Possimus aut consequuntur incidunt', included: true },
      { text: 'Lorem ipsum dolor sit amet', included: true },
      { text: 'Consectetur adipisicing elit', included: true },
      { text: 'Dolorum esse odio quas architecto sint', included: true },
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#f8f9fa] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading uppercase text-black mb-4">Pricing</h2>
          <p className="text-[#939393] max-w-2xl mx-auto">
            Choose the plan that best fits your mining operation needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded p-8 text-center border ${plan.highlighted ? 'border-[#ff8b00] shadow-lg' : 'border-[#e9ecef]'}`}
            >
              <h3 className="text-xl font-heading uppercase text-black mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-black">{plan.price}</span>
                <span className="text-[#939393] text-sm">{plan.period}</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-[#71bc42] mt-0.5 shrink-0" />
                    ) : (
                      <span className="w-5 h-5 text-[#ccc] mt-0.5 shrink-0 flex items-center justify-center text-lg">
                        ✕
                      </span>
                    )}
                    <span
                      className={feature.included ? 'text-[#939393]' : 'text-[#ccc] line-through'}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`inline-block w-full py-3 px-6 text-sm font-medium rounded transition-colors ${
                  plan.highlighted
                    ? 'bg-[#ff8b00] text-white hover:bg-[#e07b00]'
                    : 'bg-[#6c757d] text-white hover:bg-[#5a6268]'
                }`}
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
