const PLANS = [
  {
    name: '01 Ripple',
    price: '$7999',
    description: 'Basic plan for small investors with essential features and support.',
  },
  {
    name: '01 Ethereum',
    price: '$9999',
    description: 'Advanced plan with priority support, analytics, and higher limits.',
  },
  {
    name: '01 Bitcoin',
    price: '$5999',
    description: 'Starter plan for newcomers with guided onboarding and basic tools.',
  },
]

export function Pricing() {
  return (
    <section id="price" className="py-20">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-6">
        <div className="mb-14 text-center">
          <h2 className="text-[30px] font-semibold text-dark-bg">Purchase whatever you want</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {PLANS.map(({ name, price, description }) => (
            <article
              key={name}
              className="rounded-sm border border-[#eee] p-10 text-center transition-colors hover:border-gold-bg"
            >
              <h3 className="mb-4 text-[22px] font-semibold text-dark-bg">{name}</h3>
              <p className="mb-2 text-[36px] font-light text-dark-bg">{price}</p>
              <p className="mb-8 text-[15px] font-light text-text-muted">{description}</p>
              <button
                type="button"
                className="rounded-sm bg-dark-bg px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#ca9814]"
              >
                Get Started
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
