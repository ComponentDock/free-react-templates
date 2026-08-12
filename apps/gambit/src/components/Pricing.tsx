import { cn } from '@free-react-templates/ui'
import { PLANS } from '../data'

/* Pricing recreated from the source's pricing_area: three cards with the
   deep purple gradient background (#231a60 → #3c338d → #231a60), the
   middle Golden Package highlighted (active), a bold white price on a
   #342b7e block, three feature list items, and an outlined gradient
   "Order Now" button (10px radius, double transparent border with a
   radial cyan→mint gradient). */

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="relative mb-20 text-center">
          <h2
            aria-hidden="true"
            className="font-display text-7xl font-bold leading-[60px] text-brand opacity-10"
          >
            Pricing Plans
          </h2>
          <h2 className="font-display -mt-10 text-4xl font-bold text-ink dark:text-white">
            Pricing Plans
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'relative rounded-xl bg-gradient-to-r from-purple-deep via-purple-end to-purple-deep p-px',
                plan.active && 'ring-2 ring-brand',
              )}
            >
              <div className="flex h-full flex-col rounded-xl bg-gradient-to-r from-purple-deep via-purple-end to-purple-deep p-8 text-center">
                <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white">
                  {plan.name}
                </h3>
                <p className="mt-6 bg-purple-price px-6 py-6 font-display text-5xl font-bold text-white">
                  {plan.price}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-3 px-6 text-sm text-white/85">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-block rounded-[10px] border-2 border-transparent bg-clip-padding text-xs font-medium uppercase tracking-wider text-white transition-all duration-300 hover:text-purple-ink hover:shadow-[0_10px_30px_rgba(130,82,250,0.2)]"
                  style={{
                    lineHeight: '46px',
                    backgroundImage:
                      'linear-gradient(#342b7e, #3b328b), radial-gradient(circle at top left, #3fcaff, #a4ffb0)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                  }}
                >
                  Order Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
