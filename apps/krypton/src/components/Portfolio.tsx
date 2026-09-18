import { useState } from 'react'

const items = [
  {
    title: 'Brand Redesign',
    category: 'Design',
    img: 'https://picsum.photos/seed/krypton-port1/600/400',
  },
  {
    title: 'E-commerce Platform',
    category: 'Development',
    img: 'https://picsum.photos/seed/krypton-port2/600/400',
  },
  {
    title: 'Marketing Campaign',
    category: 'Marketing',
    img: 'https://picsum.photos/seed/krypton-port3/600/400',
  },
  {
    title: 'Mobile App UI',
    category: 'Design',
    img: 'https://picsum.photos/seed/krypton-port4/600/400',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Development',
    img: 'https://picsum.photos/seed/krypton-port5/600/400',
  },
  {
    title: 'Social Strategy',
    category: 'Marketing',
    img: 'https://picsum.photos/seed/krypton-port6/600/400',
  },
] as const

const filters = ['All', 'Design', 'Development', 'Marketing'] as const

export function Portfolio() {
  const [filter, setFilter] = useState<string>('All')

  const visible = filter === 'All' ? items : items.filter((i) => i.category === filter)

  return (
    <section id="portfolio" aria-label="Portfolio" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body dark:text-gray-400">
            A selection of our recent work across design, development, and marketing.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? 'bg-primary-500 text-white'
                  : 'bg-mist text-body hover:bg-primary-50 hover:text-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-xl">
              <img
                src={item.img}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-primary-300">
                    {item.category}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
