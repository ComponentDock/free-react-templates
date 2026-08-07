import { ButtonLink } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Starter',
    price: '$9',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Basic',
    price: '$27',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Pro',
    price: '$74',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Unlimited',
    price: '$140',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-primary-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
            Pricing
          </h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life One day however a small line of blind text by the name.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
            >
              <h3 className="font-display text-xl font-semibold text-ink dark:text-gray-100">
                {plan.name}
              </h3>
              <div className="mt-5 flex items-baseline justify-center gap-1">
                <span className="font-display text-6xl font-bold text-mint-400">{plan.price}</span>
                <span className="text-sm text-smoke dark:text-gray-400">per month</span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-smoke dark:text-gray-400">
                {plan.blurb}
              </p>
              <ButtonLink
                href="#contact"
                className="mt-8 w-full rounded-full bg-mint-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-mint-500"
              >
                Select Plan
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
