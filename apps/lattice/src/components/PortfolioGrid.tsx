import { portfolioItems } from '../data'
import { PortfolioCard } from './PortfolioCard'

export function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-[28px] font-normal text-gray-900">Portfolio Gallery</h2>
          <p className="text-sm text-gray-500">Explore our creative work collection</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
