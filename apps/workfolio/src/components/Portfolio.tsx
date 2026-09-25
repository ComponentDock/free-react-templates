import { Plus } from 'lucide-react'

const portfolioItems = [
  { seed: 'workfolio-1', aspect: 'aspect-square' },
  { seed: 'workfolio-2', aspect: 'aspect-[3/4]' },
  { seed: 'workfolio-3', aspect: 'aspect-square' },
  { seed: 'workfolio-4', aspect: 'aspect-[3/4]' },
  { seed: 'workfolio-5', aspect: 'aspect-square' },
]

export function Portfolio() {
  return (
    <section className="bg-white py-24 md:py-32" id="portfolio">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header row */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-md">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-coral">
              My portfolio
            </p>
            <h2 className="text-2xl font-normal leading-snug text-heading md:text-3xl">
              Take a look around some of my awesome works
            </h2>
          </div>
          <a
            href="#portfolio"
            className="border border-coral px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-coral transition-colors hover:bg-coral hover:text-white"
          >
            More works
          </a>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {portfolioItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className={`group relative overflow-hidden ${item.aspect} ${
                i === 1 || i === 3 ? 'row-span-1 md:row-span-2' : ''
              }`}
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/600/600`}
                alt={`Portfolio project ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-coral/0 opacity-0 transition-all duration-300 group-hover:bg-coral/80 group-hover:opacity-100">
                <Plus className="h-8 w-8 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
