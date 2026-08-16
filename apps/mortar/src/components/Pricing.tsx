import { Check, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'
import { pricing } from '../data'

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Our Pricing
        </span>
        <h2 className="mt-2 text-4xl font-medium text-ink md:text-5xl">Pricing &amp; Packages</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {pricing.map((tier) => (
            <article
              key={tier.name}
              className={cn(
                'relative rounded bg-white px-8 pb-10 pt-12 shadow-[0_24px_48px_-13px_rgba(0,0,0,0.05)]',
                tier.featured && 'bg-charcoal text-white',
              )}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold uppercase tracking-wide text-charcoal">
                  Most Popular
                </span>
              )}
              <h3
                className={cn(
                  'text-lg font-medium',
                  tier.featured ? 'text-white' : 'text-charcoal',
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-3">
                <sup
                  className={cn(
                    'align-super text-lg',
                    tier.featured ? 'text-brand' : 'text-gray-500',
                  )}
                >
                  $
                </sup>
                <span
                  className={cn(
                    'text-4xl font-semibold',
                    tier.featured ? 'text-white' : 'text-ink',
                  )}
                >
                  {tier.price}
                </span>
              </p>
              <p className={cn('mt-2 text-sm', tier.featured ? 'text-white/70' : 'text-gray-500')}>
                {tier.tagline}
              </p>
              <ul className="mt-6 space-y-3 text-left">
                {tier.features.map((feature) => (
                  <li key={feature.label} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    ) : (
                      <X className="h-4 w-4 shrink-0 text-gray-300" aria-hidden="true" />
                    )}
                    <span
                      className={cn(
                        'text-sm',
                        feature.included
                          ? tier.featured
                            ? 'text-white'
                            : 'text-charcoal'
                          : 'text-gray-400',
                      )}
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                className={cn(
                  'mt-8 w-3/5 rounded-[4px] py-3 text-sm font-semibold uppercase tracking-wider',
                  tier.featured
                    ? 'bg-brand text-charcoal hover:border hover:border-brand hover:bg-transparent hover:text-brand'
                    : 'bg-charcoal text-white hover:border hover:border-charcoal hover:bg-transparent hover:text-charcoal',
                )}
              >
                {tier.ctaLabel}
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
