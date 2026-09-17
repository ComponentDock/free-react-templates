import { useState } from 'react'

const filters = ['All', 'Haircuts', 'Dye', 'Shave'] as const
type Filter = (typeof filters)[number]

interface Item {
  id: number
  src: string
  alt: string
  category: Filter
}

const items: Item[] = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/sg-portfolio1/400/400',
    alt: 'Portfolio haircut',
    category: 'Haircuts',
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/sg-portfolio2/400/400',
    alt: 'Portfolio dye job',
    category: 'Dye',
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/sg-portfolio3/400/400',
    alt: 'Portfolio shave',
    category: 'Shave',
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/sg-portfolio4/400/400',
    alt: 'Portfolio haircut style',
    category: 'Haircuts',
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/sg-portfolio5/400/400',
    alt: 'Portfolio color work',
    category: 'Dye',
  },
  {
    id: 6,
    src: 'https://picsum.photos/seed/sg-portfolio6/400/400',
    alt: 'Portfolio shave detail',
    category: 'Shave',
  },
]

export function Portfolio() {
  const [active, setActive] = useState<Filter>('All')

  const visible = active === 'All' ? items : items.filter((i) => i.category === active)

  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-serif text-3xl font-bold text-dark">Our Portfolio</h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-gold-400" />

        {/* Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-sm border px-5 py-2 font-serif text-sm font-semibold uppercase transition-colors ${
                active === f
                  ? 'border-gold-400 bg-gold-400 text-white'
                  : 'border-dark text-dark hover:border-gold-400 hover:text-gold-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <div key={item.id} className="overflow-hidden rounded">
              <img
                src={item.src}
                alt={item.alt}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
