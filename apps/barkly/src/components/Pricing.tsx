const plans = [
  { name: 'Basic', price: '$47' },
  { name: 'Premium', price: '$250' },
  { name: 'Professional', price: '$850' },
] as const

const features = [
  'Officia quaerat eaque neque',
  'Possimus aut consequuntur incidunt',
  'Lorem ipsum dolor sit amet',
  'Consectetur adipisicing elit',
  'Dolorum esse odio quas architecto sint',
] as const

export function Pricing() {
  return (
    <section id="pricing" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold uppercase text-black dark:text-white">
          Pricing Table
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className="bg-brand p-8 text-center md:p-10">
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-4 text-5xl font-extrabold text-white">
                <span className="align-top text-2xl">{plan.price.slice(0, 1)}</span>
                {plan.price.slice(1)}
              </p>
              <ul className="mt-8 space-y-4 text-left text-sm font-light text-white">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span aria-hidden="true">›</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-10 inline-block rounded-full bg-black px-10 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
              >
                Buy Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
