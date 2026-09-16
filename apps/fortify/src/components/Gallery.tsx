const GALLERY = [
  { seed: 'fortify-gal-1', className: 'col-span-2 row-span-2 h-72 md:h-full' },
  { seed: 'fortify-gal-2', className: 'h-44 md:h-full' },
  { seed: 'fortify-gal-3', className: 'h-44 md:h-56' },
  { seed: 'fortify-gal-4', className: 'h-44 md:h-56' },
  { seed: 'fortify-gal-5', className: 'h-44 md:h-56' },
  { seed: 'fortify-gal-6', className: 'h-44 md:h-full' },
  { seed: 'fortify-gal-7', className: 'col-span-2 h-44 md:h-full' },
]

export function Gallery() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-3 text-3xl font-bold text-heading">Latest From Our Gallery</h2>
        <p className="mb-12 text-body">A glimpse of our work and achievements</p>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {GALLERY.map((img) => (
            <a
              key={img.seed}
              href="#"
              className={`group relative overflow-hidden rounded-sm ${img.className}`}
            >
              <img
                src={`https://picsum.photos/seed/${img.seed}/600/400`}
                alt="Gallery item"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
