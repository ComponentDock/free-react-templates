interface PortfolioItem {
  label: string
  category: string
  seed: string
}

const items: PortfolioItem[] = [
  { label: 'CLOCK', category: 'post', seed: 'daybreak-1' },
  { label: 'BAG', category: 'image', seed: 'daybreak-2' },
  { label: 'FISH', category: 'post', seed: 'daybreak-3' },
  { label: 'BOTTLE', category: 'video', seed: 'daybreak-4' },
  { label: 'PAPER', category: 'extern', seed: 'daybreak-5' },
  { label: 'BLUE ICE', category: 'post', seed: 'daybreak-6' },
]

interface PortfolioGridProps {
  activeFilter?: string
}

export function PortfolioGrid({ activeFilter = 'All' }: PortfolioGridProps) {
  const filtered =
    activeFilter === 'All'
      ? items
      : items.filter((item) => item.category === activeFilter.toLowerCase())

  return (
    <div
      className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      role="list"
      aria-label="Portfolio items"
    >
      {filtered.map((item) => (
        <div
          key={item.label}
          role="listitem"
          className="group relative overflow-hidden rounded bg-gray-100 dark:bg-gray-800"
        >
          <img
            src={`https://picsum.photos/seed/${item.seed}/600/400`}
            alt={item.label}
            loading="lazy"
            decoding="async"
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
            <span className="font-display text-sm font-bold tracking-widest text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
