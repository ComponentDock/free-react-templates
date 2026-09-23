const stats = [
  { value: '500', label: 'Happy Clients' },
  { value: '850', label: 'Projects Completed' },
  { value: '20', label: 'Years Experience' },
  { value: '24', label: 'Awards Won' },
]

export function Stats() {
  return (
    <section className="bg-ops-400 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center text-white">
              <span className="block text-4xl font-bold">{s.value}</span>
              <span className="mt-1 text-sm opacity-90">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
