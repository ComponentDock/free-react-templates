const counters = [
  { value: '1990', label: 'Projects done' },
  { value: '50+', label: 'Expert Members' },
  { value: '25+', label: 'Achievements' },
] as const

export function Counters() {
  return (
    <section aria-label="Project counters" className="bg-paper py-16 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-4 sm:px-6">
        {counters.map((counter) => (
          <div
            key={counter.label}
            className="flex h-44 w-40 flex-col items-center justify-center border border-black/10 bg-white text-center dark:border-white/10 dark:bg-gray-900"
          >
            <span className="font-display text-4xl font-bold text-brand-dark">{counter.value}</span>
            <span className="mt-2 text-sm text-mist dark:text-white/60">{counter.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
