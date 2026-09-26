interface GalleryItem {
  src: string
  title: string
  category: string
  span?: boolean
}

const items: GalleryItem[] = [
  {
    src: 'https://picsum.photos/seed/finpilot-gal1/600/400',
    title: 'Financial Report',
    category: 'Consulting',
    span: true,
  },
  {
    src: 'https://picsum.photos/seed/finpilot-gal2/600/400',
    title: 'Business Strategy',
    category: 'Planning',
  },
  {
    src: 'https://picsum.photos/seed/finpilot-gal3/600/400',
    title: 'Tax Optimization',
    category: 'Finance',
  },
  {
    src: 'https://picsum.photos/seed/finpilot-gal4/600/400',
    title: 'Market Analysis',
    category: 'Research',
  },
  {
    src: 'https://picsum.photos/seed/finpilot-gal5/600/400',
    title: 'Risk Management',
    category: 'Advisory',
  },
]

export default function Gallery() {
  return (
    <section id="blog" className="py-20 bg-paper">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink">Our Recent Works</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-brand" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-xl ${item.span ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/60 group-hover:opacity-100">
                <span className="text-xs uppercase tracking-wider text-white/70">
                  {item.category}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border-2 border-brand px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            More Works
          </a>
        </div>
      </div>
    </section>
  )
}
