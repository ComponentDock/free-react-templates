import { Search } from 'lucide-react'

const GALLERY_ITEMS = [
  { image: 'https://picsum.photos/seed/focal-work1/600/400', alt: 'Photography work 1' },
  { image: 'https://picsum.photos/seed/focal-work2/600/400', alt: 'Photography work 2' },
  { image: 'https://picsum.photos/seed/focal-work3/600/400', alt: 'Photography work 3' },
  { image: 'https://picsum.photos/seed/focal-work4/600/400', alt: 'Photography work 4' },
  { image: 'https://picsum.photos/seed/focal-work5/600/400', alt: 'Photography work 5' },
  { image: 'https://picsum.photos/seed/focal-work6/600/400', alt: 'Photography work 6' },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20" aria-label="Work gallery">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-brand">
            Portfolio
          </span>
          <h2 className="text-4xl font-bold text-gray-900">Our Work</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.image}
              className="group relative cursor-pointer overflow-hidden rounded-sm"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                <Search
                  size={28}
                  className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
