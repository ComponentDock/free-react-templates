const portfolioItems = [
  { id: 1, name: 'portfolio-1', className: 'col-span-1 row-span-1' },
  { id: 2, name: 'portfolio-2', className: 'col-span-1 row-span-1' },
  { id: 3, name: 'portfolio-3', className: 'col-span-1 row-span-1' },
  { id: 4, name: 'portfolio-4', className: 'col-span-1 md:col-span-3 row-span-1' },
]

export function Portfolio() {
  return (
    <section className="bg-[#191919] py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Turn Your Dream Into Reality
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              data-testid="portfolio-item"
              className={`group relative overflow-hidden rounded-lg ${item.className}`}
            >
              <img
                src={`https://picsum.photos/seed/smokeshade-${item.name}/600/400`}
                alt={`Portfolio ${item.id}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#e32879]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
