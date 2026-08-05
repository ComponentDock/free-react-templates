import { ButtonLink } from '@free-react-templates/ui'

const planFeatures = [
  '2.5 GB Free Photos',
  'Secure Online Transfer Indeed',
  'Unlimited Styles for interface',
  'Reliable Customer Service',
  'Manual Backup Provided',
] as const

const plans = [
  { name: 'Standard', audience: 'For the individuals', price: '£199' },
  { name: 'Business', audience: 'For small Company', price: '£399' },
  { name: 'Ultimate', audience: 'For large Company', price: '£499' },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Suitable Pricing Plans
          </h2>
          <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">
            Pick the plan that matches your team — upgrade or cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="bg-white text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:bg-gray-900"
            >
              <div className="flex items-start justify-between border-b border-gray-100 px-10 pb-6 pt-10 text-left dark:border-gray-800">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm leading-snug text-muted dark:text-gray-400">
                    {plan.audience}
                  </p>
                </div>
                <p className="font-display text-3xl font-bold text-ink dark:text-white">
                  {plan.price}
                </p>
              </div>
              <div className="px-10 py-10">
                <ul className="space-y-5 text-sm text-muted dark:text-gray-400">
                  {planFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <ButtonLink
                  href="#pricing"
                  className="mt-8 w-full rounded-none border border-gray-300 bg-paper px-10 py-4 text-sm font-medium uppercase tracking-wide text-ink hover:border-transparent hover:bg-gradient-to-r hover:from-azure hover:to-primary-600 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                >
                  Purchase Plan
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
