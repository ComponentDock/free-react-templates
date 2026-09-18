const stats = [
  { number: '4,800', label: 'Project Completed', icon: 'fa-check-circle' },
  { number: '14,000', label: 'Employees', icon: 'fa-users' },
  { number: '200', label: 'Clients', icon: 'fa-star' },
  { number: '71,650', label: 'Awards', icon: 'fa-trophy' },
]

export function Stats() {
  return (
    <section
      className="relative py-16 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/sweeply-stats/1600/600)' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 text-white">
              <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                <span className={`fa ${s.icon} text-2xl`} aria-hidden="true" />
              </div>
              <div>
                <strong className="text-2xl font-bold block">{s.number}</strong>
                <span className="text-sm text-white/70">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
