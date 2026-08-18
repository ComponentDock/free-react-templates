import { plans } from '../data'

export function Pricing() {
  return (
    <section aria-label="Choose a plan" className="bg-white pb-[90px] pt-[110px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink">
            Choose a plan that right for your business
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-body">
            Simple pricing for every stage — from your first job post to a full hiring pipeline.
          </p>
        </div>

        <ul className="grid gap-6 lg:grid-cols-3">
          {plans.map(({ name, price, blurb }) => (
            <li
              key={name}
              className="flex flex-col rounded-[8px] bg-white p-[30px] text-center shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
            >
              <h3 className="font-display text-xl font-semibold text-ink">{name}</h3>
              <p className="mt-6 font-display text-5xl font-bold text-brand">{price}</p>
              <p className="mt-1 text-sm text-muted">Per month</p>
              <p className="mt-6 text-sm leading-relaxed text-body">{blurb}</p>
              <a
                href="#cta"
                className="mt-8 inline-block rounded-[5px] bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                Start Now
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
