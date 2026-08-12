import { SectionHeading } from './SectionHeading'

const plans: ReadonlyArray<{ name: string; price: string }> = [
  { name: 'Basic', price: '24.50' },
  { name: 'Standard', price: '34.50' },
  { name: 'Premium', price: '54.50' },
  { name: 'Platinum', price: '89.50' },
]

const features = [
  'Diagnostic Services',
  'Professional Consultation',
  'Tooth Implants',
  'Surgical Extractions',
  'Teeth Whitening',
] as const

/** "Our Pricing" — four bordered plan cards with a pill Get Offer button
    straddling the bottom edge; price and button turn lime on hover (the
    source .pricing-entry cards). */
export function Pricing() {
  return (
    <section id="pricing" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="Pricing"
          title="Our Pricing"
          intro="Transparent, all-inclusive pricing — no surprise bills, no fine print."
        />
        <div className="grid gap-8 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group relative border border-skyline bg-white px-6 pb-12 pt-6 text-center transition-colors"
            >
              <h3 className="text-base font-normal text-ink">{plan.name}</h3>
              <p className="mt-3 text-ink">
                <span className="text-3xl font-light text-primary transition-colors group-hover:text-lime">
                  ${plan.price}
                </span>{' '}
                <span className="text-xs">/ session</span>
              </p>
              <ul className="mt-5 text-sm text-mist">
                {features.map((feature, featureIndex) => (
                  <li
                    key={feature}
                    className={featureIndex % 2 === 1 ? 'bg-cloud px-2 py-2' : 'px-2 py-2'}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-lime group-hover:bg-lime"
              >
                Get Offer
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
