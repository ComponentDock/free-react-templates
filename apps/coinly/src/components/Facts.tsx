const facts = [
  { value: '60', label: 'Support Countries' },
  { value: '12K', label: 'Transactions per hour' },
  { value: '5B', label: 'Largest Transactions' },
  { value: '240', label: 'Years of Experience' },
] as const

export function Facts() {
  return (
    <section className="bg-gradient-to-r from-grad-start to-grad-end py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-4 text-center sm:px-6 lg:grid-cols-4 lg:px-8">
        {facts.map((fact) => (
          <div key={fact.label}>
            <p className="font-display text-5xl font-medium text-accent md:text-6xl">
              {fact.value}
            </p>
            <p className="mt-2 text-white">{fact.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
