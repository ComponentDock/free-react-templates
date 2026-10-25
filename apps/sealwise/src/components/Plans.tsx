import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { plans } from '../content'
import { ActionLink, Reveal, SectionIntro, containerClass } from './ui'

/** Three tiers, the middle one ringed and badged; every price is printed. */
export function Plans() {
  return (
    <section id="plans" className="section scroll-mt-20 bg-white dark:bg-gray-950">
      <div className={containerClass}>
        <SectionIntro kicker={plans.kicker} title={plans.title} lead={plans.lead} />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 100}>
              <div
                className={cn(
                  'flex h-full flex-col rounded-2xl border border-ink-100 p-6 dark:border-gray-800',
                  tier.featured && 'border-primary-600 shadow-md dark:border-primary-400',
                )}
              >
                {tier.featured ? (
                  <span className="mb-3 inline-flex w-fit rounded-full bg-primary-50 px-3 py-1 text-xs leading-4 font-bold tracking-wide text-primary-700 uppercase dark:bg-primary-900/40 dark:text-primary-200">
                    {plans.badge}
                  </span>
                ) : null}
                <h3 className="text-lg leading-6 font-bold text-ink-800 dark:text-ink-50">{tier.name}</h3>
                <p className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl leading-9 font-bold text-ink-800 dark:text-ink-50">
                    {tier.price}
                  </span>
                  <span className="text-sm leading-5 text-ink-400">{plans.perMonth}</span>
                </p>
                <p className="mt-2 text-sm leading-5 text-ink-500 dark:text-ink-300">{tier.blurb}</p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-base leading-6 text-ink-600 dark:text-ink-300">
                      <Check
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <ActionLink
                  href="#contact"
                  variant={tier.featured ? 'primary' : 'outline'}
                  className="mt-6 w-full px-5 py-3"
                >
                  {tier.cta}
                </ActionLink>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-sm leading-5 text-ink-400">{plans.footnote}</p>
      </div>
    </section>
  )
}
