import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'
import { plans } from '../content'

/** The page's one near-black band; the middle tier is the only filled card. */
export function Maintenance() {
  return (
    <section id="maintenance" className="scroll-mt-20 bg-accent-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase">
            {plans.chip}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {plans.title}
          </h2>
          <p className="mt-3 text-accent-300">{plans.lede}</p>
        </Reveal>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.items.map((plan) => (
            <li
              key={plan.name}
              className={cn(
                'flex flex-col rounded-3xl p-7',
                plan.featured
                  ? 'bg-primary-600 ring-2 ring-primary-400'
                  : 'bg-white/5 ring-1 ring-white/10',
              )}
            >
              <h3 className="font-serif text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-accent-300">{plan.visits}</p>
              <p className="mt-5 flex items-baseline gap-1.5">
                <span className="font-serif text-4xl font-semibold tabular-nums">{plan.price}</span>
                <span className="text-sm text-accent-300">per year</span>
              </p>
              <p className="mt-4 border-t border-white/10 pt-4 text-sm text-accent-300">
                {plan.blurb}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <Check
                      aria-hidden="true"
                      className={cn(
                        'mt-0.5 h-4 w-4 shrink-0',
                        plan.featured ? 'text-primary-200' : 'text-primary-400',
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  'mt-7 inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
                  plan.featured
                    ? 'bg-white text-primary-700 hover:bg-gray-100'
                    : 'bg-white/10 hover:bg-white/20',
                )}
              >
                Enquire about {plan.name}
              </a>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-accent-300">{plans.note}</p>
      </div>
    </section>
  )
}
