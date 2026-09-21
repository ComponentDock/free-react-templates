const cases = [
  { title: 'Business Law', category: 'Corporate', image: 'statutory-case1' },
  { title: 'Criminal Offense', category: 'Criminal', image: 'statutory-case2' },
  { title: 'Dispute Resolution', category: 'Civil', image: 'statutory-case3' },
  { title: 'Family Law', category: 'Family', image: 'statutory-case4' },
  { title: 'Real Estate', category: 'Property', image: 'statutory-case5' },
  { title: 'Personal Injury', category: 'Tort', image: 'statutory-case6' },
]

export function CaseStudies() {
  return (
    <section id="cases" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">Cases</span>
          <h2 className="mt-2 text-3xl font-bold text-dark-1">Recent Case Studies</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(29,34,39,0.6),rgba(29,34,39,0.6)), url(https://picsum.photos/seed/${c.image}/600/400)`,
              }}
            >
              <div className="flex min-h-[250px] items-end p-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                    {c.category}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-white/70">
                    Proven results in {c.category.toLowerCase()} cases.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
