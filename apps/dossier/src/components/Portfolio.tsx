const PORTFOLIO_ITEMS = [
  { title: 'Square Box Mockup', seed: 'dossier-portfolio-1' },
  { title: 'Product Box Package', seed: 'dossier-portfolio-2' },
  { title: 'Creative Package Design', seed: 'dossier-portfolio-3' },
  { title: 'Packaging Brand', seed: 'dossier-portfolio-4' },
  { title: 'Isometric 3D Extrusion', seed: 'dossier-portfolio-5' },
  { title: 'White Space Photography', seed: 'dossier-portfolio-6' },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Featured Portfolio</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${item.seed}/600/400`}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
