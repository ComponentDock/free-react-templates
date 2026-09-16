const cases = [
  { img: 'https://picsum.photos/seed/chambers-case1/400/300', category: 'Business Law' },
  { img: 'https://picsum.photos/seed/chambers-case2/400/300', category: 'Family Law' },
  { img: 'https://picsum.photos/seed/chambers-case3/400/300', category: 'Criminal Law' },
  { img: 'https://picsum.photos/seed/chambers-case4/400/300', category: 'Insurance Law' },
  { img: 'https://picsum.photos/seed/chambers-case5/400/300', category: 'Business Law' },
  { img: 'https://picsum.photos/seed/chambers-case6/400/300', category: 'Family Law' },
]

export function Cases() {
  return (
    <section id="cases" className="py-16" data-testid="cases">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Cases
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">Recent Cases</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg">
              <img
                src={c.img}
                alt={`${c.category} case`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary text-white text-xs px-3 py-1 rounded">
                  {c.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
