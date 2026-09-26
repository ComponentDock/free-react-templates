import { useState } from 'react'
import { Share2, Eye, Heart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const categories = ['All', 'Graphic Design', 'Web Design', 'Software', 'Apps']

const portfolioItems = [
  {
    title: 'Work 01',
    category: 'Graphic Design',
    image: 'https://picsum.photos/seed/jockford-work1/600/400',
  },
  {
    title: 'Work 02',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/jockford-work2/600/400',
  },
  {
    title: 'Work 03',
    category: 'Software',
    image: 'https://picsum.photos/seed/jockford-work3/600/400',
  },
  {
    title: 'Work 04',
    category: 'Apps',
    image: 'https://picsum.photos/seed/jockford-work4/600/400',
  },
  {
    title: 'Work 05',
    category: 'Graphic Design',
    image: 'https://picsum.photos/seed/jockford-work5/600/400',
  },
  {
    title: 'Work 06',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/jockford-work6/600/400',
  },
]

export function Work() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="work" className="bg-bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-3xl font-bold text-text-primary">Recent Work</h2>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                activeFilter === cat
                  ? 'bg-brand text-white'
                  : 'bg-bg-primary text-text-secondary hover:bg-brand/10 hover:text-brand',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/60 group-hover:opacity-100">
                <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                <div className="flex gap-3">
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-brand"
                    aria-label={`Share ${item.title}`}
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-brand"
                    aria-label={`View ${item.title}`}
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-brand"
                    aria-label={`Like ${item.title}`}
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
