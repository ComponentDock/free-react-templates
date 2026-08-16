import { pricingPlans } from '../data'

export function Pricing() {
  return (
    <section id="pricing" className="bg-dark py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-[11px] font-bold tracking-[.1rem] text-white/70 uppercase">
            Prices for everyone
          </span>
          <h2 className="mt-2 text-5xl leading-none font-bold text-white md:text-[80px]">
            Pricing
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className="rounded-lg bg-brand p-10 text-center text-white">
              <h3 className="text-3xl font-bold">{plan.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/50">{plan.description}</p>
              <div className="mx-auto my-10 h-px w-full bg-white/20" aria-hidden="true" />
              <p className="text-white">
                <span className="align-top text-base">$</span>
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="align-top text-base">{plan.cents}</span>
              </p>
              <a
                href="#newsletter"
                className="mt-8 inline-block rounded-full border border-white/20 px-10 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Buy
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
