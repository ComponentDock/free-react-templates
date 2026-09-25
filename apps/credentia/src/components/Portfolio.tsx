const portfolioItems = [
  { title: 'Brand Campaign', category: 'Graphic design', seed: 'credentia-port-1' },
  { title: 'A Corporate Identity', category: 'Graphic design', seed: 'credentia-port-2' },
  { title: 'Web Design Website', category: 'Graphic design', seed: 'credentia-port-3' },
  { title: 'Logo Design', category: 'Graphic design', seed: 'credentia-port-4' },
]

export function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-3xl font-bold text-dark relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-dark">
            Portfolio
          </h2>
          <a
            href="#portfolio"
            className="inline-block border-2 border-dark text-dark font-bold text-xs uppercase tracking-wider px-8 py-4 hover:text-accent hover:border-accent transition-colors"
          >
            See All Portfolio
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.seed} className="group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={`https://picsum.photos/seed/${item.seed}/400/300`}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-dark">{item.title}</h3>
              <p className="text-sm text-muted">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
