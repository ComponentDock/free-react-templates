const stats = [
  { value: '60', label: 'Beauticians' },
  { value: '9,200', label: 'Happy Customers' },
  { value: '5,800', label: 'Treatments Done' },
  { value: '100', label: 'Awards Won' },
] as const

export function Stats() {
  return (
    <section aria-label="Our numbers" className="bg-brand py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 text-center sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-4xl text-white sm:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/85">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
