import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const FILTERS = ['All', 'Branding', 'Design', 'Photography', 'Architecture'] as const
type Filter = (typeof FILTERS)[number]

interface PortfolioItem {
  id: number
  title: string
  category: Filter
  image: string
  height: string
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://picsum.photos/seed/weft-brand1/600/400',
    height: 'h-64',
  },
  {
    id: 2,
    title: 'Web Design',
    category: 'Design',
    image: 'https://picsum.photos/seed/weft-design1/600/800',
    height: 'h-80',
  },
  {
    id: 3,
    title: 'Product Photo',
    category: 'Photography',
    image: 'https://picsum.photos/seed/weft-photo1/600/500',
    height: 'h-72',
  },
  {
    id: 4,
    title: 'Architecture Project',
    category: 'Architecture',
    image: 'https://picsum.photos/seed/weft-arch1/600/600',
    height: 'h-64',
  },
  {
    id: 5,
    title: 'Logo Design',
    category: 'Branding',
    image: 'https://picsum.photos/seed/weft-brand2/600/700',
    height: 'h-80',
  },
  {
    id: 6,
    title: 'UI/UX Design',
    category: 'Design',
    image: 'https://picsum.photos/seed/weft-design2/600/450',
    height: 'h-64',
  },
  {
    id: 7,
    title: 'Portrait Session',
    category: 'Photography',
    image: 'https://picsum.photos/seed/weft-photo2/600/550',
    height: 'h-72',
  },
  {
    id: 8,
    title: 'Interior Design',
    category: 'Architecture',
    image: 'https://picsum.photos/seed/weft-arch2/600/650',
    height: 'h-80',
  },
  {
    id: 9,
    title: 'Packaging Design',
    category: 'Branding',
    image: 'https://picsum.photos/seed/weft-brand3/600/500',
    height: 'h-64',
  },
]

interface PortfolioGridProps {
  activeFilter: Filter
}

export function PortfolioGrid({ activeFilter }: PortfolioGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredItems =
    activeFilter === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter)

  return (
    <div className="p-6 lg:p-10">
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={cn('relative mb-4 break-inside-avoid overflow-hidden', item.height)}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-300"
              loading="lazy"
            />
            <div
              className={cn(
                'absolute inset-0 flex flex-col items-center justify-center bg-black/60 transition-opacity duration-300',
                hoveredId === item.id ? 'opacity-100' : 'opacity-0',
              )}
            >
              <h3 className="mb-1 text-lg font-medium text-white">{item.title}</h3>
              <p className="text-sm text-white/70">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
      {filteredItems.length === 0 && (
        <p className="py-20 text-center text-text/50">No items match this filter.</p>
      )}
    </div>
  )
}
