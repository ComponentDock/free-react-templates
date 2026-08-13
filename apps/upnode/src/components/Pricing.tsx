import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { planFeatures, planLabels, plans, plansSection } from '../data'

/* Three pricing cards with Save-% tags, price, blue check feature lists
   and CTAs; the middle card carries a "Best Plan" highlight
   (reference: .hami-price-plan-area .single-price-plan). */
export function Pricing() {
  return (
    <section id="plans" aria-label={plansSection.title} className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <h2 className="text-4xl font-bold text-ink lg:text-[48px]">{plansSection.title}</h2>
          <p className="mt-3 text-lg text-muted">{plansSection.text}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'relative rounded-[3px] border border-borderline p-10 shadow-[0_8px_8px_-1px_rgba(0,0,0,0.15)] transition-colors hover:bg-mist',
              )}
            >
              {plan.best ? (
                <span className="absolute top-4 right-4 rounded bg-primary px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
                  {planLabels.bestPlan}
                </span>
              ) : null}
              <h3 className="text-2xl font-bold text-ink">{plan.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{plan.sale}</p>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-2xl text-ink">$</span>
                <span className="text-[60px] leading-none font-bold text-primary">
                  {plan.price}
                </span>
                <span className="text-faint">{planLabels.perMonth}</span>
              </p>
              <ul className="mt-8 space-y-4">
                {planFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-ink">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#plans"
                className="mt-10 flex h-[50px] items-center justify-center rounded-full bg-primary px-10 font-semibold text-white transition-colors hover:bg-ink"
              >
                {planLabels.getStarted}
              </a>
              <p className="mt-4 text-center">
                <a href="#plans" className="text-sm text-faint underline hover:text-primary">
                  {planLabels.viewAll}
                </a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
