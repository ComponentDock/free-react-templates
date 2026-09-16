import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const categories = ['All', 'Architecture', 'Buildings', 'Bridges'] as const
type Category = (typeof categories)[number]

const projects = [
  { id: 1, category: 'Bridges' as Category, title: 'Maintenance & Repair' },
  { id: 2, category: 'Bridges' as Category, title: 'Road Construction' },
  { id: 3, category: 'Buildings' as Category, title: 'Office Complex' },
  { id: 4, category: 'Architecture' as Category, title: 'Modern Design' },
  { id: 5, category: 'Buildings' as Category, title: 'Residential Tower' },
  { id: 6, category: 'Architecture' as Category, title: 'Structural Planning' },
  { id: 7, category: 'Architecture' as Category, title: 'Bridge Engineering' },
  { id: 8, category: 'Buildings' as Category, title: 'Industrial Complex' },
]

export function Gallery() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="bg-mist py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold text-heading">
            Take a look at Some of our
            <br />
            awesome projects
          </h2>
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded px-4 py-2 text-sm font-medium transition-colors ${
                  active === cat
                    ? 'bg-primary-400 text-white'
                    : 'bg-white text-heading hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
          {filtered.map((p) => (
            <div key={p.id} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/crane-gal${p.id}/400/300`}
                alt={p.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-between bg-navy/70 px-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-sm font-bold text-white">{p.title}</h3>
                <a href="#projects" aria-label={`View ${p.title}`}>
                  <ArrowRight size={20} className="text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
