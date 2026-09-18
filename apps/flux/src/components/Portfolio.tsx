import { useState } from 'react'
import { Eye } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const filters = ['All Projects', 'Visual', 'Advertising', 'Web Development'] as const
type Filter = (typeof filters)[number]

const galleryItems = [
  {
    id: 1,
    category: 'Visual' as const,
    title: 'Branding Identity',
    image: 'https://picsum.photos/seed/flux-port1/600/400',
  },
  {
    id: 2,
    category: 'Advertising' as const,
    title: 'Branding Identity',
    image: 'https://picsum.photos/seed/flux-port2/600/400',
  },
  {
    id: 3,
    category: 'Web Development' as const,
    title: 'Branding Identity',
    image: 'https://picsum.photos/seed/flux-port3/600/400',
  },
]

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All Projects')

  const filtered =
    activeFilter === 'All Projects'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold text-section-heading">Our Portfolio</h2>
          <div className="mx-auto h-0.5 w-12 bg-brand-orange" />
        </div>

        {/* Filter menu */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                'rounded-sm border px-5 py-2 text-sm font-medium transition-colors',
                activeFilter === f
                  ? 'border-brand-orange text-brand-orange'
                  : 'border-gray-300 text-gray-600 hover:border-brand-orange hover:text-brand-orange',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.id} className="group relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 opacity-0 transition-all duration-500 group-hover:bg-black/60 group-hover:opacity-100">
                <Eye className="mb-3 text-2xl text-white" size={28} />
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
