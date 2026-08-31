import { Search } from 'lucide-react'
import type { PortfolioItem } from '../data'

interface PortfolioCardProps {
  item: PortfolioItem
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="group">
      <div
        className="relative h-[300px] overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
          boxShadow: '0px 20px 35px -30px rgba(0, 0, 0, 0.26)',
        }}
      >
        <div className="flex h-full items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white">
            <Search size={24} className="text-gray-700" />
          </div>
        </div>
      </div>
      <div className="w-full pt-3 text-center">
        <h3 className="text-lg font-medium">
          <a href="#" className="text-black transition-colors hover:text-brand">
            {item.title}
          </a>
        </h3>
        <span className="text-xs font-medium uppercase tracking-widest text-text-muted">
          {item.category}
        </span>
      </div>
    </div>
  )
}
