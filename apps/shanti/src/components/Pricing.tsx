import { ButtonLink } from '@free-react-templates/ui'

const plans = [
  {
    title: 'Year Card',
    price: '449',
    excerpt: 'For 1 Year',
    features: [
      'Onetime Access To All Club',
      'Group Trainer',
      'Book A Group Class',
      'Fitness Orientation',
    ],
  },
  {
    title: 'Monthly Card',
    price: '200',
    excerpt: 'For 1 Month',
    features: ['Group Classes', 'Discuss Fitness Goals', 'Group Trainer', 'Fitness Orientation'],
  },
  {
    title: 'Weekly Card',
    price: '85',
    excerpt: 'For 1 Week',
    features: ['Group Classes', 'Discuss Fitness Goals', 'Group Trainer', 'Fitness Orientation'],
  },
] as const

export function Pricing() {
  return (
    <section id="membership" className="bg-soft-100 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-base font-normal tracking-[0.2em] text-body-500 uppercase">
            Pricing Tables
          </h3>
          <h2 className="mt-3 text-4xl font-extralight text-black sm:text-5xl">Membership Cards</h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="rounded-sm bg-white p-8 text-center shadow-[0_24px_48px_-13px_rgba(0,0,0,0.05)]"
            >
              <h3 className="text-sm font-medium tracking-[0.15em] text-black uppercase">
                {plan.title}
              </h3>
              <p className="mt-6">
                <span className="align-top text-2xl font-normal text-mauve-500">$</span>
                <span className="text-5xl font-extralight text-black">{plan.price}</span>
              </p>
              <p className="mt-2 block text-sm text-body-500">{plan.excerpt}</p>
              <h4 className="mt-6 text-sm font-semibold tracking-widest text-black uppercase">
                Enjoy All The Features
              </h4>
              <ul className="mt-6 mb-8 space-y-3 text-sm text-body-700">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <ButtonLink
                href="#membership"
                className="block w-full rounded-full border border-mauve-500 bg-mauve-500 px-4 py-4 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-transparent hover:text-mauve-500"
              >
                Get Started
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
