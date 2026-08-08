const facts = [
  { value: '2536', label: 'Projects Completed' },
  { value: '6784', label: 'Happy Clients' },
  { value: '1059', label: 'Expert Workers' },
  { value: '2239', label: 'Awards Won' },
] as const

export function Facts() {
  return (
    <section className="bg-coal py-16 dark:bg-black sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 text-center sm:px-6 lg:grid-cols-4">
        {facts.map(({ value, label }) => (
          <div key={label}>
            <p className="font-display text-4xl font-extrabold text-brand sm:text-5xl">{value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/70">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
