const stats = [
  { value: '560', label: 'All Project' },
  { value: '560', label: 'Project Completed' },
  { value: '560', label: 'Customers Action' },
  { value: '560', label: 'Awards Winner' },
] as const

export function Stats() {
  return (
    <section
      id="stats"
      className="bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/motorly-7/1600/500')" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">About Our Statistics</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-5xl font-extrabold">
                {stat.value}
                <span className="text-brand">+</span>
              </p>
              <p className="mt-2 font-semibold uppercase tracking-wide text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
