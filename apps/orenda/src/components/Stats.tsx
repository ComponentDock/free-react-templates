import { stats } from '../data'

/** Light section with four stat counters — big indigo numbers + labels. */
export function Stats() {
  return (
    <section id="stats" aria-label="Our numbers" className="bg-lilac py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4">
        <ul className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label}>
              <span className="font-display text-5xl font-bold text-brand">{stat.value}</span>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
