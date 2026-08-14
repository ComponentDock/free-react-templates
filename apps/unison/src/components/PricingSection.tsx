import { Button, cn } from '@free-react-templates/ui'
import { Check } from 'lucide-react'
import { pricingPlans } from '../data'
import { SectionTitle } from './SectionTitle'

/** Pricing table (`.site-section.bg-light`): 3 white cards with a large blue
 *  price + gray "/ year" suffix, green-check included features, struck-through
 *  excluded features and a black pill Buy Now button. */
export function PricingSection() {
  return (
    <section id="pricing-section" className="bg-soft py-[2.5em] md:py-[5em]">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle>Pricing</SectionTitle>
        <p className="mx-auto max-w-2xl text-center font-light text-gray-500">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className="flex flex-col rounded-lg bg-white p-[30px] text-center shadow-sm"
            >
              <h3 className="text-xl font-bold text-heading">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-5xl font-black text-brand">{plan.price}</span>
                <span className="ml-1 text-suffix">/ year</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-left">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    data-excluded={!feature.included}
                    className={cn(
                      'flex items-center gap-3 text-sm',
                      feature.included ? 'text-gray-700' : 'line-through text-excluded',
                    )}
                  >
                    {feature.included ? (
                      <Check aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-check" />
                    ) : (
                      <span aria-hidden="true" className="h-4 w-4 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-check' : ''}>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="primary"
                className="mt-8 self-center rounded-full bg-black px-[30px] py-[10px] text-base hover:bg-gray-800"
              >
                Buy Now
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
