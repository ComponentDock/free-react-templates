import { useState } from 'react'
import { Button, cn } from '@free-react-templates/ui'

type Category = 'All' | 'Fashion' | 'Lifestyle' | 'Natural' | 'Wedding'

const tabs: Category[] = ['All', 'Fashion', 'Lifestyle', 'Natural', 'Wedding']

interface PortfolioItem {
  id: number
  title: string
  category: Exclude<Category, 'All'>
  image: string
}

const allItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'COLORS SPEAK',
    category: 'Fashion',
    image: 'https://picsum.photos/seed/reflexly-pf-1/600/600',
  },
  {
    id: 2,
    title: 'COLORS SPEAK',
    category: 'Lifestyle',
    image: 'https://picsum.photos/seed/reflexly-pf-2/600/600',
  },
  {
    id: 3,
    title: 'COLORS SPEAK',
    category: 'Natural',
    image: 'https://picsum.photos/seed/reflexly-pf-3/600/600',
  },
  {
    id: 4,
    title: 'COLORS SPEAK',
    category: 'Wedding',
    image: 'https://picsum.photos/seed/reflexly-pf-4/600/600',
  },
  {
    id: 5,
    title: 'COLORS SPEAK',
    category: 'Fashion',
    image: 'https://picsum.photos/seed/reflexly-pf-5/600/600',
  },
  {
    id: 6,
    title: 'COLORS SPEAK',
    category: 'Lifestyle',
    image: 'https://picsum.photos/seed/reflexly-pf-6/600/600',
  },
  {
    id: 7,
    title: 'COLORS SPEAK',
    category: 'Natural',
    image: 'https://picsum.photos/seed/reflexly-pf-7/600/600',
  },
  {
    id: 8,
    title: 'COLORS SPEAK',
    category: 'Wedding',
    image: 'https://picsum.photos/seed/reflexly-pf-8/600/600',
  },
  {
    id: 9,
    title: 'COLORS SPEAK',
    category: 'Fashion',
    image: 'https://picsum.photos/seed/reflexly-pf-9/600/600',
  },
  {
    id: 10,
    title: 'COLORS SPEAK',
    category: 'Lifestyle',
    image: 'https://picsum.photos/seed/reflexly-pf-10/600/600',
  },
]

const INITIAL_COUNT = 6

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<Category>('All')
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)

  const filteredItems =
    activeTab === 'All' ? allItems : allItems.filter((item) => item.category === activeTab)

  const visibleItems = filteredItems.slice(0, visibleCount)
  const hasMore = visibleCount < filteredItems.length

  return (
    <section id="portfolio" className="bg-bg-light py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-heading text-3xl font-bold uppercase tracking-wider text-text-primary md:text-4xl">
            Portfolio
          </h2>
          <div className="mx-auto h-1 w-16 bg-brand" />
        </div>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab)
                setVisibleCount(INITIAL_COUNT)
              }}
              className={cn(
                'rounded-btn px-6 py-2 font-heading text-sm uppercase tracking-wider transition-colors',
                activeTab === tab
                  ? 'bg-brand text-white'
                  : 'bg-transparent text-text-secondary hover:text-brand',
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visibleItems.map((item) => (
            <article
              key={item.id}
              className="group relative mb-4 break-inside-avoid overflow-hidden"
            >
              <img
                src={item.image}
                alt={`${item.title} - ${item.category} photography`}
                className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-overlay opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="mb-1 font-heading text-lg font-bold uppercase tracking-wider text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80">{item.category}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="mt-10 text-center">
            <Button
              className="rounded-btn bg-brand px-8 py-3 font-heading text-sm uppercase tracking-wider text-white hover:bg-brand-hover"
              onClick={() => setVisibleCount((prev) => prev + INITIAL_COUNT)}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
