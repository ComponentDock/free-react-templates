const facts = [
  { value: '596', label: 'Projects Completed' },
  { value: '552', label: 'Really Happy Clients' },
  { value: '1009', label: 'Cups of Coffee Taken' },
  { value: '435', label: 'In House Professionals' },
] as const

export function FunFacts() {
  return (
    <section className="bg-paper py-20 dark:bg-gray-900 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[2.4px] text-mist dark:text-gray-400">
            CAREER OVERVIEW
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase text-ink dark:text-white">
            Quick Facts
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <p className="font-display text-5xl font-bold text-ink dark:text-white">
                {fact.value}
              </p>
              <p className="mt-2 text-mist dark:text-gray-400">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
