const stats = [
  { value: '16', label: 'Years' },
  { value: '75', label: 'Projects' },
  { value: '18', label: 'Members' },
  { value: '20', label: 'Awards' },
]

export function FunFacts() {
  return (
    <section
      className="bg-cover bg-fixed bg-center py-16"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/structura-facts/1600/400)' }}
    >
      <div className="bg-charcoal/80 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <h3 className="text-4xl font-bold text-lime-accent">{s.value}</h3>
              <p className="mt-2 text-sm text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
