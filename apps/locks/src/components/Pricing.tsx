const plans = [
  { title: "Men's Haircut", price: '$20.00', copy: 'Cut, style and finish with a hot towel.' },
  { title: 'Children Haircut', price: '$29.00', copy: 'Patient, gentle cuts for the little ones.' },
  { title: 'Beard Cut', price: '$20.00', copy: 'Sculpting, shaping and straight-razor lines.' },
  {
    title: "Women's Haircut",
    price: '$49.91',
    copy: 'Consultation, wash, cut and blow-dry finish.',
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-24 transition-colors dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Plan &amp; <span className="text-brand">Pricing</span>
        </h2>
        <div className="mt-14 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="border-b border-dashed border-gray-300 pb-6 dark:border-gray-700"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-ink dark:text-white">{plan.title}</h3>
                <span className="font-display text-2xl text-brand">{plan.price}</span>
              </div>
              <p className="mt-2 text-sm text-mist">{plan.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
