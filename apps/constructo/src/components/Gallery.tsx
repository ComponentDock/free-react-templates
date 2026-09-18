import { useState } from 'react'
import { Link, Search } from 'lucide-react'

const categories = ['All', 'Architecture', 'Building', 'Construction', 'Design', 'Painting']

const items = [
  {
    id: 1,
    title: 'Residential Project',
    category: 'Architecture',
    img: 'https://picsum.photos/seed/constructo-gal-1/400/400',
  },
  {
    id: 2,
    title: 'Commercial Build',
    category: 'Building',
    img: 'https://picsum.photos/seed/constructo-gal-2/400/400',
  },
  {
    id: 3,
    title: 'Interior Design',
    category: 'Design',
    img: 'https://picsum.photos/seed/constructo-gal-3/400/400',
  },
  {
    id: 4,
    title: 'Office Complex',
    category: 'Construction',
    img: 'https://picsum.photos/seed/constructo-gal-4/400/400',
  },
  {
    id: 5,
    title: 'Painting Work',
    category: 'Painting',
    img: 'https://picsum.photos/seed/constructo-gal-5/400/400',
  },
  {
    id: 6,
    title: 'Warehouse Build',
    category: 'Building',
    img: 'https://picsum.photos/seed/constructo-gal-6/400/400',
  },
]

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All' ? items : items.filter((i) => i.category === activeFilter)

  return (
    <section id="gallery" className="bg-light py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-heading">Our Services</h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-accent" />
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase transition-colors ${
                activeFilter === cat
                  ? 'bg-accent text-white'
                  : 'bg-white text-heading hover:bg-accent hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.id} className="group relative overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="mb-4 font-heading text-lg font-bold text-white">{item.title}</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    aria-label="View project"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white"
                  >
                    <Link className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="Search project"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white"
                  >
                    <Search className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
