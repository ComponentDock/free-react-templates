const portfolioItems = [
  {
    type: 'Branding',
    title: 'Creative Identity',
    image: 'https://picsum.photos/seed/pc-port1/600/400',
    span: 'col-span-1 row-span-1',
  },
  {
    type: 'Web',
    title: 'E-Commerce Platform',
    image: 'https://picsum.photos/seed/pc-port2/600/400',
    span: 'col-span-1 row-span-2',
  },
  {
    type: 'Mobile',
    title: 'Fitness Tracker App',
    image: 'https://picsum.photos/seed/pc-port3/600/400',
    span: 'col-span-1 row-span-1',
  },
  {
    type: 'Graphic',
    title: 'Event Poster Series',
    image: 'https://picsum.photos/seed/pc-port4/600/400',
    span: 'col-span-1 row-span-1',
  },
  {
    type: 'Branding',
    title: 'Restaurant Rebrand',
    image: 'https://picsum.photos/seed/pc-port5/600/400',
    span: 'col-span-1 row-span-1',
  },
  {
    type: 'Web',
    title: 'Agency Portfolio',
    image: 'https://picsum.photos/seed/pc-port6/600/400',
    span: 'col-span-1 row-span-1',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_370px]">
          {/* Portfolio grid */}
          <div className="grid grid-cols-2 gap-4">
            {portfolioItems.map((item) => (
              <div key={item.title} className={`group relative overflow-hidden ${item.span}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm uppercase tracking-wider text-green-title">
                    {item.type}
                  </span>
                  <h3
                    className="mt-2 text-xl font-bold text-white"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Title block */}
          <div className="flex h-[370px] w-[370px] flex-col items-center justify-center bg-green-title">
            <span
              className="text-6xl font-bold text-green-num"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              02
            </span>
            <span
              className="mt-2 text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Portfolio
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
