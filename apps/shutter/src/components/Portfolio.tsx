import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const categories = ['All', 'Weddings', 'Portraits', 'Nature', 'Editorial'] as const

type Category = (typeof categories)[number]

interface WorkItem {
  title: string
  category: Exclude<Category, 'All'>
  tall: boolean
  seed: string
}

const items: WorkItem[] = [
  { title: 'Golden Hour Ceremony', category: 'Weddings', tall: true, seed: 'shutter-p1' },
  { title: 'Studio Portrait', category: 'Portraits', tall: true, seed: 'shutter-p2' },
  { title: 'Mountain Dawn', category: 'Nature', tall: false, seed: 'shutter-p3' },
  { title: 'Fashion Editorial', category: 'Editorial', tall: true, seed: 'shutter-p4' },
  { title: 'Coastal Vows', category: 'Weddings', tall: false, seed: 'shutter-p5' },
  { title: 'Environmental Portrait', category: 'Portraits', tall: false, seed: 'shutter-p6' },
  { title: 'Autumn Forest', category: 'Nature', tall: true, seed: 'shutter-p7' },
  { title: 'Brand Campaign', category: 'Editorial', tall: false, seed: 'shutter-p8' },
]

function srcFor(item: WorkItem) {
  return `https://picsum.photos/seed/${item.seed}/600/${item.tall ? 900 : 600}`
}

export function Portfolio() {
  const [filter, setFilter] = useState<Category>('All')
  const [lightbox, setLightbox] = useState<WorkItem | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightbox])

  const visible = filter === 'All' ? items : items.filter((item) => item.category === filter)

  return (
    <section id="portfolio" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Selected Work
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A curated collection of moments from weddings, portraits and editorial stories around
            the world.
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter portfolio by category"
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors',
                filter === category
                  ? 'border-accent-500 bg-accent-500 text-white'
                  : 'border-gray-300 text-gray-600 hover:border-accent-500 hover:bg-accent-500 hover:text-white dark:border-gray-700 dark:text-gray-300',
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {visible.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setLightbox(item)}
              aria-label={`View ${item.title}`}
              className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            >
              <img
                src={srcFor(item)}
                alt={item.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span>
                  <span className="text-xs font-medium uppercase tracking-widest text-accent-400">
                    {item.category}
                  </span>
                  <span className="block font-serif text-lg font-semibold text-white">
                    {item.title}
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
        >
          <figure
            onClick={(event) => event.stopPropagation()}
            className="relative max-w-3xl rounded-xl bg-white p-3 shadow-2xl dark:bg-gray-900"
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
              className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <img
              src={srcFor(lightbox)}
              alt={lightbox.title}
              className="max-h-[75vh] w-full rounded-lg object-cover"
            />
            <figcaption className="mt-3 flex items-baseline justify-between px-1">
              <span className="font-serif text-lg font-semibold text-gray-900 dark:text-white">
                {lightbox.title}
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-accent-600 dark:text-accent-400">
                {lightbox.category}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
