import { useState } from 'react'

const categories = ['All', 'Events', 'Party', 'Holidays'] as const

const images = [
  { seed: 'treasury-gal-1', category: 'Events' },
  { seed: 'treasury-gal-2', category: 'Party' },
  { seed: 'treasury-gal-3', category: 'Holidays' },
  { seed: 'treasury-gal-4', category: 'Events' },
  { seed: 'treasury-gal-5', category: 'Party' },
  { seed: 'treasury-gal-6', category: 'Holidays' },
  { seed: 'treasury-gal-7', category: 'Events' },
  { seed: 'treasury-gal-8', category: 'Party' },
  { seed: 'treasury-gal-9', category: 'Holidays' },
] as const

export function Gallery() {
  const [active, setActive] = useState<string>('All')

  const filtered = active === 'All' ? images : images.filter((img) => img.category === active)

  return (
    <section id="gallery" className="bg-white py-16 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black text-brand md:text-4xl">Gallery</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
                active === cat
                  ? 'bg-brand text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(({ seed }) => (
            <div key={seed} className="overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${seed}/600/400`}
                alt={`Gallery image ${seed}`}
                className="h-48 w-full object-cover transition-transform hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
