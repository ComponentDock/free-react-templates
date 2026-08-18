import { portfolioItems } from '../data'

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-2 block text-[13px] font-bold uppercase tracking-wide text-brand">
            Portfolio
          </span>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">My Latest Work</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <figure
              key={item.title}
              className="group relative h-80 overflow-hidden rounded bg-light"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-ink/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="px-4 text-lg font-medium text-white">{item.title}</h3>
                <span className="text-xs font-bold uppercase tracking-[2px] text-white/80">
                  {item.category}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
