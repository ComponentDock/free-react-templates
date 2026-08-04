const counters = [
  { value: '354+', label: 'Successful Treatments' },
  { value: '435+', label: 'Happy Clients' },
  { value: '126+', label: 'Expert Doctors' },
  { value: '1900+', label: 'Boarded Pets' },
] as const

export function Counters() {
  return (
    <section aria-label="Our results" className="bg-navy py-14 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((counter) => (
            <li key={counter.label}>
              <span className="block text-4xl font-extrabold text-white">{counter.value}</span>
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
