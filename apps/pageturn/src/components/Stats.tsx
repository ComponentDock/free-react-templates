const stats = [
  { label: 'Copies Sold', value: '1,100', suffix: '+' },
  { label: 'Copies Released', value: '1,200', suffix: '+' },
  { label: 'Cup Of Coffee', value: '340', suffix: '' },
  { label: 'Happy Readers', value: '12,000', suffix: '+' },
] as const

function StatCard({ label, value, suffix }: { label: string; value: string; suffix: string }) {
  return (
    <div className="rounded-lg bg-white p-8 text-center shadow-sm dark:bg-gray-800">
      <div className="mb-2 text-4xl font-bold text-navy dark:text-white">
        {value}
        {suffix}
      </div>
      <div className="text-sm font-medium uppercase tracking-wider text-muted dark:text-gray-400">
        {label}
      </div>
    </div>
  )
}

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/pageturn-stats/1600/600"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gray-900/80" />
      </div>
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}
