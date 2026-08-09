import { Badge, ButtonLink } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Personal Driving',
    price: '$199',
    features: [
      'Full course theory',
      'Full driving course',
      'Training in first aid',
      'Practical sessions',
      'Psychological support',
    ],
  },
  {
    name: 'Power Booster',
    price: '$379',
    features: [
      'Full course theory',
      'Full driving course',
      'Training in first aid',
      'Practical sessions',
      'Psychological support',
    ],
  },
  {
    name: 'Freight Driving',
    price: '$259',
    features: [
      'Full course theory',
      'Full driving course',
      'Training in first aid',
      'Practical sessions',
      'Psychological support',
    ],
  },
] as const

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: "url('https://picsum.photos/seed/gearly-pricing/1920/900')" }}
    >
      <div className="absolute inset-0 bg-navy/85" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Get Special Offer
          </p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase text-white">
            Our Pricing
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="relative rounded-2xl bg-white p-8 text-center shadow-xl transition-transform hover:-translate-y-1"
            >
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-navy">
                20% off
              </Badge>
              <p className="mt-4 font-display text-5xl font-black text-navy">{plan.price}</p>
              <h3 className="mt-3 font-display text-xl font-bold uppercase text-ink">
                {plan.name}
              </h3>
              <ul className="mt-6 space-y-2 text-sm text-mist">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                className="mt-8 w-full bg-navy uppercase hover:bg-navy/90"
              >
                Get started
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
