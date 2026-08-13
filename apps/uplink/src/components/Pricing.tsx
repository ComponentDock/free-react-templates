import { plans } from '../data'

/** Four-column pricing table on a pale blue band. */
export function Pricing() {
  return (
    <section id="pricing" className="bg-band-50 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-ink-900">Choose Your Best Pricing Plans</h2>
          <p className="mt-4 text-sm leading-6 text-mute-500">
            Transparent monthly pricing with no setup fees — upgrade, downgrade, or cancel any time.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[10px] bg-line-200 shadow-[0px_10px_30px_0px_rgba(98,71,234,0.1)] lg:grid-cols-4">
          {plans.map((plan) => (
            <div key={plan.name} data-plan={plan.name} className="bg-white px-8 py-12 text-center">
              <h3 className="text-xl font-medium text-ink-900">{plan.name}</h3>
              <p className="mt-2 text-sm font-light text-mute-500">{plan.audience}</p>
              <p className="mt-6 text-4xl font-medium text-ink-900">
                {plan.price}
                <span className="text-sm font-light text-mute-500"> /mo</span>
              </p>
              <ul className="mt-8 space-y-3 text-sm font-open-sans text-mute-500">
                {plan.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-10 block bg-primary-500 py-4 text-xs font-medium tracking-widest text-white uppercase transition-colors hover:bg-primary-600"
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
