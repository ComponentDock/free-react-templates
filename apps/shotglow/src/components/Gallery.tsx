import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const categories = ['All', 'Wedding', 'Fashion', 'Portrait', 'Magazine'] as const
type Category = (typeof categories)[number]

interface GalleryItem {
  id: number
  category: Exclude<Category, 'All'>
  title: string
  subtitle: string
  seed: string
}

const items: GalleryItem[] = [
  {
    id: 1,
    category: 'Wedding',
    title: 'Smiling Beautiful Women',
    subtitle: 'Fashion photography',
    seed: 'shotglow-gal1',
  },
  {
    id: 2,
    category: 'Fashion',
    title: 'Urban Style Collection',
    subtitle: 'Fashion photography',
    seed: 'shotglow-gal2',
  },
  {
    id: 3,
    category: 'Portrait',
    title: 'Golden Hour Portraits',
    subtitle: 'Portrait session',
    seed: 'shotglow-gal3',
  },
  {
    id: 4,
    category: 'Magazine',
    title: 'Editorial Spread',
    subtitle: 'Magazine feature',
    seed: 'shotglow-gal4',
  },
  {
    id: 5,
    category: 'Wedding',
    title: 'Summer Ceremony',
    subtitle: 'Wedding photography',
    seed: 'shotglow-gal5',
  },
  {
    id: 6,
    category: 'Fashion',
    title: 'Studio Session',
    subtitle: 'Fashion photography',
    seed: 'shotglow-gal6',
  },
]

export function Gallery() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? items : items.filter((i) => i.category === active)

  return (
    <section id="gallery" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 max-w-xl">
          <p className="mb-2 font-heading text-sm font-medium uppercase tracking-widest text-slate-900">
            Recent project
          </p>
          <h2 className="font-heading text-4xl font-semibold uppercase text-gray-200 sm:text-5xl">
            Check Latest Work
          </h2>
        </div>

        {/* Filter bar */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                'px-5 py-2 font-heading text-sm font-medium uppercase tracking-wider transition-colors',
                active === cat ? 'bg-slate-900 text-white' : 'text-slate-900 hover:bg-slate-900/10',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <a
              key={item.id}
              href="#"
              className="group relative block aspect-[4/3] overflow-hidden bg-slate-900"
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/800/600`}
                alt={item.title}
                className="h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-40"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <p className="mb-1 text-sm font-light text-white">{item.subtitle}</p>
                <h4 className="font-heading text-lg font-semibold text-white">{item.title}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
