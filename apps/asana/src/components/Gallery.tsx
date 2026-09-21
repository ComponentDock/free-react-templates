import { useState } from 'react'
import { Search } from 'lucide-react'

const categories = ['All', 'Classes', 'Training', 'Workshop']

const galleryItems = [
  {
    src: 'https://picsum.photos/seed/asana-gal1/600/400',
    alt: 'Yoga class session',
    category: 'Classes',
  },
  {
    src: 'https://picsum.photos/seed/asana-gal2/600/400',
    alt: 'Group training',
    category: 'Training',
  },
  {
    src: 'https://picsum.photos/seed/asana-gal3/600/400',
    alt: 'Workshop practice',
    category: 'Workshop',
  },
  {
    src: 'https://picsum.photos/seed/asana-gal4/600/400',
    alt: 'Advanced class',
    category: 'Classes',
  },
  {
    src: 'https://picsum.photos/seed/asana-gal5/600/400',
    alt: 'Teacher training',
    category: 'Training',
  },
  {
    src: 'https://picsum.photos/seed/asana-gal6/600/400',
    alt: 'Meditation workshop',
    category: 'Workshop',
  },
]

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section id="gallery" className="py-16 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">Yoga Gallery</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 border-2 text-sm font-semibold transition-colors ${
                activeFilter === cat
                  ? 'bg-brand-500 border-brand-500 text-white'
                  : 'border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <a
              key={item.src}
              href={item.src}
              className="group relative block overflow-hidden rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <Search
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
