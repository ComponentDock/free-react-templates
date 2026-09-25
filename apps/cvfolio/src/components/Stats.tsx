const stats = [
  { value: 3, label: 'Coder Degrees' },
  { value: 25, label: 'Project Completed' },
  { value: 311, label: 'Satisfied Clients' },
  { value: 732, label: 'Finished Projects' },
]

export function Stats() {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/cvfolio-stats/1920/400)',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="mb-1 block text-4xl font-bold text-brand">{stat.value}</span>
            <span className="text-sm text-gray-300">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
