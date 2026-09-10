const items = [
  {
    img: 'https://picsum.photos/seed/musecraft-1/400/300',
    type: 'PSD MOCKUP',
    title: 'Smart Watch',
  },
  {
    img: 'https://picsum.photos/seed/musecraft-2/400/300',
    type: 'PSD MOCKUP',
    title: 'Smart Watch',
  },
  {
    img: 'https://picsum.photos/seed/musecraft-3/400/300',
    type: 'PSD MOCKUP',
    title: 'Smart Watch',
  },
  {
    img: 'https://picsum.photos/seed/musecraft-4/400/300',
    type: 'PSD MOCKUP',
    title: 'Smart Watch',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-navy py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 flex items-start justify-end gap-6">
          <div className="rounded-lg bg-amber px-6 py-4">
            <h2 className="font-heading text-4xl font-bold text-white">Portfolio</h2>
          </div>
          <span className="font-heading text-8xl font-bold text-amber/30">02</span>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map(({ img, type, title }, i) => (
            <div key={i} className="group relative overflow-hidden">
              <img
                src={img}
                alt={title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-heading text-sm uppercase tracking-widest text-white/60">
                  {type}
                </p>
                <p className="mt-2 font-heading text-xl font-bold text-white">{title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-end">
          <button
            type="button"
            className="bg-rose px-10 py-4 font-heading text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-rose-dark"
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  )
}
