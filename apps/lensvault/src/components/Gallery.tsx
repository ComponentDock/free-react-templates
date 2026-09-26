import { useState } from 'react'
import { Expand } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

type Filter = 'All' | 'Featured' | 'Portrait' | 'Landscape'

interface GalleryItem {
  id: number
  title: string
  category: Filter
  seed: string
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: 'Golden Hour', category: 'Featured', seed: 'lv-1' },
  { id: 2, title: 'Urban Portrait', category: 'Portrait', seed: 'lv-2' },
  { id: 3, title: 'Mountain Vista', category: 'Landscape', seed: 'lv-3' },
  { id: 4, title: 'Street Life', category: 'Featured', seed: 'lv-4' },
  { id: 5, title: 'Studio Session', category: 'Portrait', seed: 'lv-5' },
  { id: 6, title: 'Coastal Escape', category: 'Landscape', seed: 'lv-6' },
  { id: 7, title: 'Night Lights', category: 'Featured', seed: 'lv-7' },
  { id: 8, title: 'Candid Smile', category: 'Portrait', seed: 'lv-8' },
  { id: 9, title: 'Forest Trail', category: 'Landscape', seed: 'lv-9' },
  { id: 10, title: 'Creative Lens', category: 'Featured', seed: 'lv-10' },
  { id: 11, title: 'Natural Light', category: 'Portrait', seed: 'lv-11' },
  { id: 12, title: 'Desert Dunes', category: 'Landscape', seed: 'lv-12' },
]

const filters: Filter[] = ['All', 'Featured', 'Portrait', 'Landscape']

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const filtered =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={cn(
                'px-6 py-2 text-sm font-medium transition-colors',
                activeFilter === filter
                  ? 'bg-brand text-brand-dark'
                  : 'text-text-secondary hover:text-brand',
              )}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <div key={item.id} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${item.seed}/400/300`}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h4 className="mb-2 text-lg font-semibold text-white">{item.title}</h4>
                <button
                  type="button"
                  aria-label={`Expand ${item.title}`}
                  className="text-white/80 transition-colors hover:text-brand"
                >
                  <Expand className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-10 text-center">
          <button
            type="button"
            className="bg-brand-dark px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand hover:text-brand-dark"
          >
            Load More Images
          </button>
        </div>
      </div>
    </section>
  )
}
