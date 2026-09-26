const portfolioItems = [
  { seed: 'reign-port-1', alt: 'Portfolio project 1' },
  { seed: 'reign-port-2', alt: 'Portfolio project 2' },
  { seed: 'reign-port-3', alt: 'Portfolio project 3' },
  { seed: 'reign-port-4', alt: 'Portfolio project 4' },
  { seed: 'reign-port-5', alt: 'Portfolio project 5' },
  { seed: 'reign-port-6', alt: 'Portfolio project 6' },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-3xl font-bold">Portfolio</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map(({ seed, alt }) => (
            <a key={seed} href="#" className="group relative block overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${seed}/600/400`}
                alt={alt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand/0 opacity-0 transition-all duration-300 group-hover:bg-brand/70 group-hover:opacity-100">
                <span className="text-lg font-semibold text-white">View Project</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
