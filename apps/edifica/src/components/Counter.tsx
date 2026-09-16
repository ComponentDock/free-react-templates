const stats = [
  { number: 50, label: 'Years of\nExperienced' },
  { number: '8,500', label: 'Projects\nDone' },
  { number: 378, label: 'Professional\nExperts' },
  { number: '1,200', label: 'Machineries\nEquipments' },
]

export function Counter() {
  return (
    <section className="bg-primary-400 py-16" aria-label="Company statistics">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white md:text-5xl">{s.number}</span>
              <span className="mt-2 whitespace-pre-line text-sm text-white/80">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
