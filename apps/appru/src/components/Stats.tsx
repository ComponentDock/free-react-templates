const facts = [
  { figure: '100K+', label: 'Total Downloads' },
  { figure: '10K+', label: 'Positive Reviews' },
  { figure: '50K+', label: 'Daily Visitors' },
  { figure: '0.02%', label: 'Uninstallation Rate' },
  { figure: '15K+', label: 'Pro User' },
] as const

export function Stats() {
  return (
    <section className="bg-white py-10 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-y-8 rounded-lg bg-white px-6 py-2 shadow-[0_20px_50px_rgba(153,153,153,0.2)] dark:bg-gray-900 sm:grid-cols-3 lg:grid-cols-5">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="border-r border-gray-200 py-8 text-center last:border-r-0 dark:border-gray-700"
            >
              <h2 className="bg-gradient-to-b from-azure to-primary-600 bg-clip-text font-display text-3xl font-bold text-transparent">
                {fact.figure}
              </h2>
              <p className="mt-2 text-sm text-muted dark:text-gray-400">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
