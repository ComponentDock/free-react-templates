import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const FILTERS = ['All', 'Human', 'Nature', 'Country', 'Video'] as const
type Filter = (typeof FILTERS)[number]

interface GalleryItem {
  id: number
  src: string
  tags: Filter[]
  wide?: boolean
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, src: 'https://picsum.photos/seed/crispshot-1/600/600', tags: ['Nature'] },
  { id: 2, src: 'https://picsum.photos/seed/crispshot-2/600/600', tags: ['Human', 'Video'] },
  { id: 3, src: 'https://picsum.photos/seed/crispshot-3/600/600', tags: ['Country'] },
  { id: 4, src: 'https://picsum.photos/seed/crispshot-4/600/600', tags: ['Nature'] },
  { id: 5, src: 'https://picsum.photos/seed/crispshot-5/600/600', tags: ['Human'] },
  { id: 6, src: 'https://picsum.photos/seed/crispshot-6/600/600', tags: ['Country'] },
  { id: 7, src: 'https://picsum.photos/seed/crispshot-7/600/600', tags: ['Nature', 'Video'] },
  { id: 8, src: 'https://picsum.photos/seed/crispshot-8/600/600', tags: ['Human'] },
  { id: 9, src: 'https://picsum.photos/seed/crispshot-9/1200/600', tags: ['Country'], wide: true },
  { id: 10, src: 'https://picsum.photos/seed/crispshot-10/600/600', tags: ['Nature'] },
  { id: 11, src: 'https://picsum.photos/seed/crispshot-11/600/600', tags: ['Human', 'Video'] },
  { id: 12, src: 'https://picsum.photos/seed/crispshot-12/600/600', tags: ['Country'] },
]

interface GalleryProps {
  className?: string
}

export function Gallery({ className }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const filteredItems =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.tags.includes(activeFilter))

  return (
    <section
      id="gallery"
      className={cn('py-20 px-4 sm:px-6 lg:px-8', className)}
      data-testid="gallery"
    >
      <div className="mx-auto max-w-7xl">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={cn(
                'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border',
                activeFilter === filter
                  ? 'bg-brand text-white border-brand'
                  : 'bg-transparent text-text-secondary border-gray-300 hover:border-brand hover:text-brand',
              )}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                'relative group overflow-hidden rounded-lg cursor-pointer',
                item.wide && 'col-span-2',
              )}
              data-testid={`gallery-item-${item.id}`}
            >
              <img
                src={item.src}
                alt={`Gallery item ${item.id}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Plus size={32} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <button
            type="button"
            className="px-8 py-3 rounded-full border-2 border-text-primary text-text-primary text-sm font-medium hover:bg-text-primary hover:text-white transition-all duration-300"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  )
}
