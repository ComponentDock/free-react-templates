const STATS = [
  { value: '8723', label: 'Patients since opening' },
  { value: '120', label: 'Specialist Doctors' },
  { value: '12', label: 'Years of Experience' },
  { value: '83', label: 'Pro Bono Works' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-accent to-brand-gradient-end">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-heading)]">
                {stat.value}
              </h3>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
