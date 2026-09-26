import { useState } from 'react'

interface GalleryItem {
  image: string
  category: string
}

const galleryItems: GalleryItem[] = [
  { image: 'https://picsum.photos/seed/pixelate-gal1/600/400', category: 'Brand Identity' },
  { image: 'https://picsum.photos/seed/pixelate-gal2/600/400', category: 'Web Design' },
  { image: 'https://picsum.photos/seed/pixelate-gal3/600/400', category: 'Mobile App' },
  { image: 'https://picsum.photos/seed/pixelate-gal4/600/400', category: 'UI Kit' },
]

function GalleryCard({ item }: { item: GalleryItem }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={item.image}
        alt={item.category}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div
        className={`absolute inset-0 flex items-center justify-center bg-brand/80 transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-lg font-bold text-white">{item.category}</span>
      </div>
    </div>
  )
}

export function Gallery() {
  return (
    <section id="work" className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display mb-12 text-3xl font-bold text-ink md:text-4xl">My Works</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {galleryItems.map((item) => (
            <GalleryCard key={item.category} item={item} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#work"
            className="inline-block rounded-full border-2 border-brand px-8 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            More Work
          </a>
        </div>
      </div>
    </section>
  )
}
