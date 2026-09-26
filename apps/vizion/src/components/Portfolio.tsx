const portfolioItems = [
  {
    title: 'Product Design',
    image: 'https://picsum.photos/seed/vizion-p1/600/500',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Product Design',
    image: 'https://picsum.photos/seed/vizion-p2/800/500',
    span: 'col-span-1 row-span-1 md:col-span-2',
  },
  {
    title: 'Product Design',
    image: 'https://picsum.photos/seed/vizion-p3/400/350',
    span: 'col-span-1',
  },
  {
    title: 'Product Design',
    image: 'https://picsum.photos/seed/vizion-p4/400/350',
    span: 'col-span-1',
  },
  {
    title: 'Product Design',
    image: 'https://picsum.photos/seed/vizion-p5/400/350',
    span: 'col-span-1',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio">
      {/* Dark header */}
      <div className="bg-gray-900 py-20 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-white/60">
          Portfolios
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Some of my awesome
          <br />
          stuffs here
        </h2>
      </div>

      {/* Portfolio grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {portfolioItems.map((item, i) => (
            <div key={i} className={`group relative overflow-hidden ${item.span}`}>
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#portfolio"
            className="inline-block rounded border border-brand px-10 py-3 text-sm font-semibold uppercase tracking-widest text-brand transition-colors hover:bg-brand hover:text-white"
          >
            More Folio
          </a>
        </div>
      </div>
    </section>
  )
}
