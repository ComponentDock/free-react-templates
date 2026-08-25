const PORTFOLIO_ITEMS = [
  {
    title: 'High Quality Design Concept',
    image: 'https://picsum.photos/seed/pulsewave-p1/600/400',
  },
  {
    title: 'High Quality Design Concept',
    image: 'https://picsum.photos/seed/pulsewave-p2/600/400',
  },
  {
    title: 'High Quality Design Concept',
    image: 'https://picsum.photos/seed/pulsewave-p3/600/400',
  },
  {
    title: 'High Quality Design Concept',
    image: 'https://picsum.photos/seed/pulsewave-p4/600/400',
  },
]

export function Portfolio() {
  return (
    <section id="work" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-[88px]">
        <h2 className="mb-12 text-center text-3xl font-bold text-text-dark">Our Awesome Work</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO_ITEMS.map(({ title, image }, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg">
              <img
                src={image}
                alt={title}
                className="h-[250px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-block rounded-full border-2 border-brand px-8 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            VIEW MORE PORTFOLIO
          </a>
        </div>
      </div>
    </section>
  )
}
