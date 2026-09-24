import { useState } from 'react'
import { Search } from 'lucide-react'

const categories = ['All', 'Events', 'Party', 'Holidays'] as const
type Category = (typeof categories)[number]

const items = [
  { cat: 'Events' as Category, img: 'banknote-gallery1' },
  { cat: 'Party' as Category, img: 'banknote-gallery2' },
  { cat: 'Holidays' as Category, img: 'banknote-gallery3' },
  { cat: 'Events' as Category, img: 'banknote-gallery4' },
  { cat: 'Party' as Category, img: 'banknote-gallery5' },
  { cat: 'Holidays' as Category, img: 'banknote-gallery6' },
  { cat: 'Events' as Category, img: 'banknote-gallery7' },
  { cat: 'Party' as Category, img: 'banknote-gallery8' },
  { cat: 'Holidays' as Category, img: 'banknote-gallery9' },
  { cat: 'Events' as Category, img: 'banknote-gallery10' },
  { cat: 'Party' as Category, img: 'banknote-gallery11' },
  { cat: 'Holidays' as Category, img: 'banknote-gallery12' },
]

export function Gallery() {
  const [filter, setFilter] = useState<Category>('All')

  const filtered = filter === 'All' ? items : items.filter((i) => i.cat === filter)

  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold">Gallery</h2>
        </div>

        {/* Filter buttons */}
        <div className="mb-8 flex justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                filter === cat
                  ? 'bg-brand text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <div
              key={item.img}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={`https://picsum.photos/seed/${item.img}/400/300`}
                alt="Gallery item"
                className="h-48 w-full object-cover transition group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100">
                <Search className="h-8 w-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
