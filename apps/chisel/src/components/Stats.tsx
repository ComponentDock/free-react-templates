const stats = [
  { value: '1087', label: 'Number of Projects' },
  { value: '57', label: 'Year of Experience' },
  { value: '670', label: 'Number of Employees' },
  { value: '900', label: 'Number of Clients' },
] as const

export function Stats() {
  return (
    <section aria-label="Company stats" className="bg-charcoal py-16 dark:bg-gray-900 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label}>
              <p className="font-display text-4xl font-extrabold text-white lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[2px] text-white/60">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
