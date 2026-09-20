const performers = [
  { name: 'Mr. Zosoldos', role: 'Acoustic drum', seed: 'gigfest-perf1' },
  { name: 'Protik Hasan', role: 'Acoustic drum', seed: 'gigfest-perf2' },
  { name: 'Salmon Vicky', role: 'Acoustic drum', seed: 'gigfest-perf3' },
  { name: 'Filaris Habol', role: 'Acoustic drum', seed: 'gigfest-perf4' },
]

export function Performers() {
  return (
    <section id="performer" className="bg-dark-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-16 font-heading text-4xl uppercase tracking-wider text-white">
          Performer
        </h2>

        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {performers.map((perf) => (
              <div key={perf.name} className="text-center">
                <div className="mx-auto mb-4 overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${perf.seed}/400/400`}
                    alt={perf.name}
                    className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-heading text-xl uppercase text-white">{perf.name}</h3>
                <p className="font-sans text-sm text-body-text">{perf.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
