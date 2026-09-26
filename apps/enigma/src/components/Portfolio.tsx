import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

type FilterCategory = 'all' | 'web' | 'digital' | '3d' | 'brand'

interface PortfolioItem {
  id: number
  category: FilterCategory
  image: string
  title: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: 'web',
    image: 'https://picsum.photos/seed/enigma-1/800/600',
    title: 'Web Project 1',
  },
  {
    id: 2,
    category: 'digital',
    image: 'https://picsum.photos/seed/enigma-2/800/600',
    title: 'Digital Project 1',
  },
  {
    id: 3,
    category: 'web',
    image: 'https://picsum.photos/seed/enigma-3/800/600',
    title: 'Web Project 2',
  },
  {
    id: 4,
    category: 'digital',
    image: 'https://picsum.photos/seed/enigma-4/800/600',
    title: 'Digital Project 2',
  },
  {
    id: 5,
    category: '3d',
    image: 'https://picsum.photos/seed/enigma-5/800/600',
    title: '3D Project 1',
  },
  {
    id: 6,
    category: 'brand',
    image: 'https://picsum.photos/seed/enigma-6/1200/600',
    title: 'Brand Project 1',
  },
  {
    id: 7,
    category: '3d',
    image: 'https://picsum.photos/seed/enigma-7/800/600',
    title: '3D Project 2',
  },
  {
    id: 8,
    category: 'brand',
    image: 'https://picsum.photos/seed/enigma-8/800/600',
    title: 'Brand Project 2',
  },
]

const filters: { label: string; value: FilterCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web design', value: 'web' },
  { label: 'Digital design', value: 'digital' },
  { label: '3D Rendering', value: '3d' },
  { label: 'Brand Identity', value: 'brand' },
]

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all')

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section className="overflow-hidden" id="work">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap gap-6 pb-24 list-none">
          {filters.map((filter) => (
            <li key={filter.value}>
              <button
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  'text-base pb-2 transition-colors cursor-pointer border-b-2',
                  activeFilter === filter.value
                    ? 'text-brand-black border-brand-black'
                    : 'text-gray-accent border-transparent hover:text-dark-teal',
                )}
                aria-pressed={activeFilter === filter.value}
              >
                {filter.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px]">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={cn(
              'relative group overflow-hidden',
              item.category === 'brand' && item.id === 6 ? 'md:col-span-2' : '',
            )}
          >
            <a
              href={item.image}
              className="block w-full h-[400px] md:h-[600px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${item.image})` }}
              aria-label={`View ${item.title}`}
            >
              <div className="absolute inset-0 bg-dark-teal/0 group-hover:bg-dark-teal/80 transition-all duration-400 flex items-end p-12">
                <h2 className="text-white text-[30px] font-normal opacity-0 group-hover:opacity-100 tracking-[10px] group-hover:tracking-normal transition-all duration-300">
                  + See Project
                </h2>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
