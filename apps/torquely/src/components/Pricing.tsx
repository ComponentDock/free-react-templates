import { Button } from '@free-react-templates/ui'

const plans = [
  { name: 'First PMS', price: '78.98' },
  { name: 'Engine Diagnostics', price: '83.75' },
  { name: 'Tow Truck', price: '85.00' },
  { name: 'Car Wash', price: '30.50' },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Price &amp; Plans
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
            Pricing
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-900"
            >
              <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-4 font-display text-4xl font-extrabold text-ink dark:text-white">
                <span className="align-top text-xl text-brand">$</span>
                {plan.price}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-mist dark:text-white/60">
                A small river named Duden flows by their place and supplies it with the necessary
                regelialia.
              </p>
              <Button
                className="mt-6 w-full rounded bg-brand text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
                size="md"
              >
                Get Started
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
