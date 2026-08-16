import { ButtonLink } from '@free-react-templates/ui'
import { pricingPlans, sectionHeadings } from '../data'

export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-base font-bold uppercase text-brand">
            {sectionHeadings.pricingSub}
          </span>
          <h2 className="mt-3 text-4xl font-medium leading-tight text-ink lg:text-[46px] lg:leading-[1.4]">
            {sectionHeadings.pricingTitle}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className="bg-white px-6 pb-10 pt-10 text-center shadow-[0_24px_48px_-13px_rgba(0,0,0,0.05)]"
            >
              <h3 className="text-lg font-medium text-ink">{plan.name}</h3>
              <p className="mt-4 text-[50px] font-semibold leading-none text-brand">{plan.price}</p>
              <p className="mt-5 px-4 leading-relaxed text-muted">{plan.copy}</p>
              <ButtonLink
                variant="outline"
                href="#contact"
                className="mt-8 h-auto w-full justify-center rounded border-brand px-2 py-3 text-base text-brand hover:bg-brand hover:text-white"
              >
                Get Started
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
