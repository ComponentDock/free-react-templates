import { useState } from 'react'

const filters = ['ALL', 'WEB DESIGN', 'BRANDING', 'GRAPHIC DESIGN'] as const

const portfolioItems = [
  { id: 1, category: 'WEB DESIGN', seed: 'cvfolio-port-1', tall: false },
  { id: 2, category: 'BRANDING', seed: 'cvfolio-port-2', tall: true },
  { id: 3, category: 'GRAPHIC DESIGN', seed: 'cvfolio-port-3', tall: false },
  { id: 4, category: 'WEB DESIGN', seed: 'cvfolio-port-4', tall: false },
  { id: 5, category: 'BRANDING', seed: 'cvfolio-port-5', tall: true },
  { id: 6, category: 'GRAPHIC DESIGN', seed: 'cvfolio-port-6', tall: false },
  { id: 7, category: 'WEB DESIGN', seed: 'cvfolio-port-7', tall: false },
  { id: 8, category: 'BRANDING', seed: 'cvfolio-port-8', tall: false },
  { id: 9, category: 'GRAPHIC DESIGN', seed: 'cvfolio-port-9', tall: false },
  { id: 10, category: 'WEB DESIGN', seed: 'cvfolio-port-10', tall: false },
]

function SectionHeading({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">{subtitle}</p>
      <h2 className="mb-4 text-3xl font-bold text-heading">{title}</h2>
      <div className="mx-auto h-[10px] w-[50px] rounded-[5px] bg-brand" />
    </div>
  )
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('ALL')

  const items =
    activeFilter === 'ALL'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading subtitle="MY WORK" title="Portfolio" />

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-md px-5 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-brand text-white'
                  : 'bg-gray-100 text-paragraph hover:bg-brand hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-lg ${
                item.tall ? 'row-span-2' : ''
              }`}
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/600/400`}
                alt={`Portfolio item ${item.id}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/50">
                <span className="text-lg font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
