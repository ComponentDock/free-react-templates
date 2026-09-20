const plans = [
  {
    name: 'Economy',
    num: '01',
    price: '$25',
    features: ['2 Day Conference', 'Coffee Break', 'Lunch Facility', 'One Guest Pass'],
  },
  {
    name: 'Business',
    num: '02',
    price: '$50',
    features: ['3 Day Conference', 'Coffee Break', 'Lunch Facility', 'Two Guest Pass'],
  },
  {
    name: 'Premium',
    num: '03',
    price: '$75',
    features: ['4 Day Conference', 'Coffee Break', 'Lunch Facility', 'Three Guest Pass'],
  },
  {
    name: 'Exclusive',
    num: '04',
    price: '$100',
    features: ['5 Day Conference', 'Coffee Break', 'Lunch Facility', 'Unlimited Guest Pass'],
  },
]

export interface PricingProps {
  className?: string
}

export function Pricing({ className }: PricingProps) {
  return (
    <section id="pricing" className={`bg-[#f9f9ff] py-16 md:py-24 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-wider text-[#222] md:text-4xl">
          Pricing
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group rounded-lg border border-gray-200 bg-white p-8 text-center transition-all hover:scale-105 hover:border-[#8ab92d] hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#8ab92d] text-2xl font-bold text-[#8ab92d] transition-colors group-hover:bg-[#8ab92d] group-hover:text-white">
                {plan.num}
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#222]">{plan.name}</h3>
              <p className="mb-6 text-3xl font-bold text-[#8ab92d]">{plan.price}</p>
              <ul className="mb-6 space-y-2 text-sm text-[#777]">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block rounded-full bg-[#222] px-8 py-2 text-sm font-semibold text-white transition-all hover:bg-[#8ab92d]"
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
