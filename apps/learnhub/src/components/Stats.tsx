const stats = [
  { value: '250', label: 'Courses Available' },
  { value: '15,000', label: 'Students Enrolled' },
  { value: '92%', label: 'Career Advancement' },
  { value: '45', label: 'Countries Reached' },
]

export function Stats() {
  return (
    <section className="bg-gradient-to-r from-coral-500 to-gold-400 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="font-heading text-3xl font-bold text-white md:text-4xl">
                {s.value}
              </span>
              <p className="mt-2 text-sm font-medium text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
