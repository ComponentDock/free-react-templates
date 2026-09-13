import { useState } from 'react'
import { Link } from 'lucide-react'

const categories = ['Show All', 'Residential', 'Commercial', 'Maintenance', 'Design']

const items = [
  {
    title: 'Garden Terrace',
    category: 'Residential',
    image: 'https://picsum.photos/seed/landcraft-port1/400/300',
  },
  {
    title: 'Office Park',
    category: 'Commercial',
    image: 'https://picsum.photos/seed/landcraft-port2/400/300',
  },
  {
    title: 'Lawn Renovation',
    category: 'Maintenance',
    image: 'https://picsum.photos/seed/landcraft-port3/400/300',
  },
  {
    title: 'Modern Patio',
    category: 'Design',
    image: 'https://picsum.photos/seed/landcraft-port4/400/300',
  },
  {
    title: 'Backyard Oasis',
    category: 'Residential',
    image: 'https://picsum.photos/seed/landcraft-port5/400/300',
  },
  {
    title: 'Corporate Campus',
    category: 'Commercial',
    image: 'https://picsum.photos/seed/landcraft-port6/400/300',
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Show All')

  const filtered =
    activeFilter === 'Show All' ? items : items.filter((i) => i.category === activeFilter)

  return (
    <section id="portfolio" className="py-24" data-testid="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Best Work</h2>
          <p className="text-body">
            Browse through our portfolio of completed landscaping projects.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                activeFilter === cat
                  ? 'bg-brand text-white'
                  : 'bg-gray-100 text-body hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.title} className="group relative rounded-lg overflow-hidden shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-brand/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <Link size={24} className="mb-2" />
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-white/80">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
