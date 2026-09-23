import { ButtonLink } from '@free-react-templates/ui'

const plans = [
  {
    format: 'PDF',
    price: '79.99',
    features: ['High-resolution PDF', 'Instant download', 'Lifetime access'],
  },
  {
    format: 'E-Book',
    price: '99.99',
    features: ['Interactive e-book', 'Read on any device', 'Bookmark & notes'],
    featured: true,
  },
  {
    format: 'Print Copy',
    price: '59.99',
    features: ['Premium hardcover', 'Free shipping', 'Signed by author'],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-wide sm:text-4xl">
            Purchase Whatever You Want
          </h2>
          <p className="mt-4 text-mist">Choose the format that suits you best.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.format}
              className={`rounded-lg border bg-white p-8 text-center shadow-md transition-colors dark:bg-gray-900 ${
                plan.featured
                  ? 'border-brand shadow-lg ring-2 ring-brand/20'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-brand">
                {plan.format}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-mist">
                Choose the {plan.format.toLowerCase()} format for the best reading experience.
              </p>
              <div className="mt-6">
                <span className="text-sm text-brand">$</span>
                <span className="font-display text-4xl font-bold">{plan.price}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-mist">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <ButtonLink
                href="#"
                variant={plan.featured ? 'primary' : 'outline'}
                className="mt-8 w-full rounded-sm"
              >
                Purchase Now
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
