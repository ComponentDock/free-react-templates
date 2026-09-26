const galleryItems = [
  {
    title: 'Travelshots',
    image: 'https://picsum.photos/seed/filmvault-gal1/600/400',
    span: 'col-span-1 md:col-span-5',
  },
  {
    title: 'Experimental',
    image: 'https://picsum.photos/seed/filmvault-gal2/600/400',
    span: 'col-span-1 md:col-span-7',
  },
  {
    title: "Father's Day",
    image: 'https://picsum.photos/seed/filmvault-gal3/600/400',
    span: 'col-span-1 md:col-span-6',
  },
  {
    title: 'Curious Cats',
    image: 'https://picsum.photos/seed/filmvault-gal4/600/400',
    span: 'col-span-1 md:col-span-6',
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-[var(--font-heading)] text-3xl font-semibold leading-tight text-navy-900 md:text-4xl">
              With my camera, I capture daily life
            </h2>
          </div>
          <div>
            <p className="font-[var(--font-sans)] text-base leading-relaxed text-navy-500/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
              nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className={`${item.span} group relative overflow-hidden rounded-sm`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute bottom-4 left-4 font-[var(--font-heading)] text-sm text-white">
                {item.title}
              </figcaption>
              <div className="absolute inset-0 flex items-center justify-center bg-navy-900/0 opacity-0 transition-all duration-300 group-hover:bg-navy-900/50 group-hover:opacity-100">
                <span className="text-3xl text-white">+</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#gallery"
            className="inline-flex items-center border border-navy-900 px-8 py-3 font-[var(--font-heading)] text-sm uppercase tracking-[3px] text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
          >
            More Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
