import { plans } from '../data'

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-[40px] font-light text-ink">
          Choose a plan that suit you
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className="flex flex-col border border-card-border px-[25px] pb-[30px] pt-[30px] text-center"
            >
              <span className="mx-auto inline-block rounded-[25px] bg-ink px-[21px] py-[7px] text-sm text-white">
                {plan.badge}
              </span>
              <h4 className="mt-[13px] border-b border-card-border pb-2 font-sans text-[30px] text-ink">
                {plan.price}
              </h4>
              <ul className="mt-8 flex-1 space-y-2.5 text-body">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-8 border border-ink px-[39px] py-[11px] font-display text-sm tracking-[1px] text-ink transition-colors hover:bg-hover-fill hover:text-white"
              >
                Choose This Plan
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
