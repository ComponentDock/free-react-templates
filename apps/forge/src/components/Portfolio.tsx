const WORK_ITEMS = [
  { name: 'Work Name Here', category: 'Category Here', seed: 'forge-3' },
  { name: 'Work Name Here', category: 'Category Here', seed: 'forge-4' },
  { name: 'Work Name Here', category: 'Category Here', seed: 'forge-5' },
  { name: 'Work Name Here', category: 'Category Here', seed: 'forge-6' },
] as const

/* Portfolio recreated from the source's blue-gray "Latest Work" grid:
   four 2x2 photo tiles with a dark overlay + name/category reveal on
   hover, and an outline-white "More Portfolio" button below. */

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-portfolio py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-light uppercase text-white lg:text-5xl">Latest Work</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {WORK_ITEMS.map((item, i) => (
            <a
              key={`${item.seed}-${i}`}
              href="#portfolio"
              className="group relative block overflow-hidden"
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/900/650`}
                alt={`${item.name} — ${item.category}`}
                className="block w-full object-cover"
                loading="lazy"
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-2xl font-semibold text-white">{item.name}</span>
                <span className="mt-1 text-sm uppercase tracking-wider text-white/80">
                  {item.category}
                </span>
              </span>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#portfolio"
            className="inline-block border-2 border-white px-5 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-white hover:text-portfolio focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            More Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
