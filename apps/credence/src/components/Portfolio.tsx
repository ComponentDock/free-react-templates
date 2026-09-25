import { useState } from 'react'

const categories = ['ALL', 'WEB DESIGN', 'BRANDING', 'GRAPHIC DESIGN'] as const

type Category = (typeof categories)[number]

const images = [
  {
    src: 'https://picsum.photos/seed/credence-p1/600/400',
    alt: 'Portfolio item 1',
    category: 'WEB DESIGN' as Category,
  },
  {
    src: 'https://picsum.photos/seed/credence-p2/600/400',
    alt: 'Portfolio item 2',
    category: 'BRANDING' as Category,
  },
  {
    src: 'https://picsum.photos/seed/credence-p3/600/400',
    alt: 'Portfolio item 3',
    category: 'GRAPHIC DESIGN' as Category,
  },
  {
    src: 'https://picsum.photos/seed/credence-p4/600/400',
    alt: 'Portfolio item 4',
    category: 'WEB DESIGN' as Category,
  },
  {
    src: 'https://picsum.photos/seed/credence-p5/600/400',
    alt: 'Portfolio item 5',
    category: 'BRANDING' as Category,
  },
  {
    src: 'https://picsum.photos/seed/credence-p6/600/400',
    alt: 'Portfolio item 6',
    category: 'GRAPHIC DESIGN' as Category,
  },
]

export function Portfolio() {
  const [active, setActive] = useState<Category>('ALL')

  const filtered = active === 'ALL' ? images : images.filter((img) => img.category === active)

  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-8">
          <div className="mb-2 h-1 w-10 rounded bg-brand" />
          <h2 className="text-3xl font-bold text-ink">Portfolio</h2>
          <p className="mt-1 text-sm uppercase tracking-widest text-mist">MY WORK</p>
        </div>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                active === cat
                  ? 'text-brand underline underline-offset-4'
                  : 'text-ink-light hover:text-brand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((img) => (
            <div key={img.src} className="overflow-hidden rounded-lg">
              <img
                src={img.src}
                alt={img.alt}
                className="h-48 w-full object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
