const counters = [
  { value: '354+', label: 'Happy Clients' },
  { value: '120+', label: 'Team Members' },
  { value: '980+', label: 'Pets Cared For' },
  { value: '15+', label: 'Years Experience' },
] as const

export function Counters() {
  return (
    <section aria-label="Our results" className="bg-night py-14 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((counter) => (
            <li key={counter.label}>
              <span className="block text-4xl font-extrabold text-brand">{counter.value}</span>
              <span className="mt-2 block text-sm font-light uppercase tracking-wide text-white/60">
                {counter.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
