import { useState } from 'react'

export interface PortfolioItem {
  id: number
  title: string
  category: string
  seed: string
}

export interface PortfolioGridProps {
  items: PortfolioItem[]
  activeFilter?: string
}

export function PortfolioGrid({ items, activeFilter = 'All' }: PortfolioGridProps) {
  const filtered =
    activeFilter === 'All' ? items : items.filter((item) => item.category === activeFilter)

  return (
    <div className="columns-3 gap-4 space-y-4">
      {filtered.map((item) => (
        <PortfolioCard key={item.id} item={item} />
      ))}
    </div>
  )
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative cursor-pointer break-inside-avoid overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={`https://picsum.photos/seed/${item.seed}/400/300`}
        alt={item.title}
        className="h-auto w-full object-cover"
      />
      <div
        className={`absolute inset-0 flex items-center justify-center bg-ink/70 transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-sm font-bold uppercase tracking-wider text-white">{item.title}</span>
      </div>
    </div>
  )
}
