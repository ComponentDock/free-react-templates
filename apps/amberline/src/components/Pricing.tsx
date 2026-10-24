import { Check, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { plans } from '../data'
import { SectionHeading } from './SectionHeading'

export function Pricing() {
  return (
    <section id="pricing" className="bg-page py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-4">
        <SectionHeading eyebrow="Our Pricing" title="Pricing &" accent="Packages" />
        <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:items-start">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className={cn(
                'relative bg-white px-0 py-10 text-center shadow-[0_24px_48px_-13px_rgba(0,0,0,0.05)]',
                plan.featured && 'border-2 border-brand lg:scale-[1.02]',
              )}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-[20px] bg-brand px-4 py-1 text-[12px] font-bold uppercase tracking-[0.06em] text-ink">
                  Most Popular
                </span>
              ) : null}
              <h3 className="text-[14px] font-bold uppercase tracking-[1px] text-ink">
                {plan.name}
              </h3>
              <p className="mt-4">
                <span className="text-[24px] align-top text-body">$</span>
                <span className="text-[50px] font-semibold leading-none text-deep-amber">
                  {plan.price}
                </span>
                {plan.suffix ? (
                  <span className="text-[24px] text-deep-amber">{plan.suffix}</span>
                ) : null}
              </p>
              <p className="mt-2 px-6 text-[14px]">{plan.blurb}</p>
              <ul className="mt-6 text-left">
                {plan.features.map((feature) => (
                  <li
                    key={feature.label}
                    className={cn(
                      'flex items-center gap-3 border-b border-black/5 px-5 py-[10px] text-[14px]',
                      feature.included ? 'text-ink' : 'text-muted line-through',
                    )}
                  >
                    {feature.included ? (
                      <Check aria-hidden="true" className="size-4 shrink-0 text-brand" />
                    ) : (
                      <X aria-hidden="true" className="size-4 shrink-0 text-muted" />
                    )}
                    {feature.label}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                className="mt-8 h-[52px] w-[60%] rounded-none border border-transparent bg-brand text-[12px] font-bold uppercase tracking-[1px] text-ink hover:border-brand hover:bg-transparent hover:text-brand"
              >
                Choose plan
              </ButtonLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
