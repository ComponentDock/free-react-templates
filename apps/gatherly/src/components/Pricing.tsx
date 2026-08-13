import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { pricing } from '../data'

/** Pricing section with four blue-bordered ticket cards (Basic / Standard /
 *  Premium / Gold). Each lists four features and a Buy Ticket button; the
 *  price is bold brand-blue and switches to accent yellow on card hover
 *  (source #pricing-section .pricing-entry). */
export function Pricing() {
  return (
    <section id="pricing-section" data-testid="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-4">
        <p className="section-eyebrow">{pricing.eyebrow}</p>
        <h2 className="section-title">{pricing.heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted">{pricing.intro}</p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricing.tiers.map((tier) => (
            <article
              key={tier.name}
              className="group flex flex-col border-2 border-brand bg-white p-6 text-center transition-colors hover:border-accent"
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-ink">
                {tier.name}
              </h3>
              <p className="mt-4 text-[28px] font-black leading-none text-brand transition-colors group-hover:text-accent">
                {tier.price}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-muted">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contact-section"
                className="mt-8 rounded-[2px] bg-brand px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white"
              >
                {pricing.buyLabel}
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
