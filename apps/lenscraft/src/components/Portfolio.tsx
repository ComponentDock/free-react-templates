const portfolioItems = [
  { seed: 'lenscraft-w1', title: '2D Vinyl Design', category: 'Client Project', large: true },
  { seed: 'lenscraft-w2', title: 'Brand Identity', category: 'Creative Work', large: false },
  { seed: 'lenscraft-w3', title: 'Photo Editing', category: 'Personal Project', large: false },
  { seed: 'lenscraft-w4', title: 'Magazine Layout', category: 'Editorial', large: true },
  { seed: 'lenscraft-w5', title: 'Album Cover', category: 'Music Industry', large: false },
]

export function Portfolio() {
  return (
    <section id="work" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h3 className="font-[var(--font-heading)] text-lg font-light uppercase tracking-widest text-coral-400">
            Our Portfolio
          </h3>
          <h2 className="font-[var(--font-heading)] mt-2 text-3xl font-semibold text-gray-900">
            Check Our Work
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.seed}
              className={`group relative overflow-hidden rounded-lg ${
                item.large ? 'lg:col-span-2' : ''
              }`}
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/800/600`}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h4 className="font-[var(--font-heading)] text-xl font-medium text-white">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-gray-300">{item.category}</p>
              </div>
            </div>
          ))}

          {/* View More button */}
          <div className="flex items-center justify-center">
            <a
              href="#"
              className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full border-2 border-coral-400 px-8 text-sm font-medium text-gray-900 transition-colors hover:bg-coral-400 hover:text-white"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
