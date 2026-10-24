import { ButtonLink, cn } from '@free-react-templates/ui'
import { btn } from './action'
import { plans, pricingBandImage } from '../data'

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Membership plans"
      className="relative bg-cover bg-fixed bg-center pt-[100px]"
      style={{ backgroundImage: `url(${pricingBandImage})` }}
    >
      <div className="absolute inset-0 bg-night/85" />
      <div className="relative mx-auto max-w-[1170px] px-4 pb-[100px]">
        <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.title} className="overflow-hidden rounded-[10px] bg-white">
              <img src={plan.image} alt="" className="h-[220px] w-full object-cover" />
              <div className="p-[40px]">
                <p className="m-0 text-[36px] font-semibold leading-none text-brand">
                  {plan.price}
                  <span className="ml-2 text-[14px] font-normal italic text-body">{plan.period}</span>
                </p>
                <h5 className="mb-[30px] mt-[30px] text-[22px] text-ink">{plan.title}</h5>
                <ul className="mb-[30px] flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-[15px] text-[14px] text-body">
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-brand"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ButtonLink href="#contact" className={cn(btn.base, btn.outline, 'min-w-0')}>
                  Enroll Now
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
