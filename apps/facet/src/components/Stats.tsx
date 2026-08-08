const stats = [
  { value: '42', label: 'Years of experience' },
  { value: '740', label: 'Project Done' },
  { value: '86', label: 'Our Architect' },
  { value: '1200', label: 'Happy Customers' },
] as const

export function Stats() {
  return (
    <section aria-label="Company stats" className="bg-paper py-16 dark:bg-gray-900 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[3px] text-brand">
          Accomplishments
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-extrabold text-ink dark:text-white">
          Since we started work in 1980
        </h2>
        <ul className="mt-12 grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label}>
              <p className="font-display text-4xl font-extrabold text-brand lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[2px] text-mist dark:text-white/60">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
