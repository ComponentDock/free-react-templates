import { cn } from '@free-react-templates/ui'
import { portfolioItems } from '../data'

export function Portfolio() {
  return (
    <section id="portfolio" className="py-[130px] bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <div
              key={item.seed}
              className={cn(
                'group relative overflow-hidden',
                index === 0 && 'col-span-2 row-span-2',
              )}
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/600/400`}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-4 text-white">
                  <h3 className="text-sm font-semibold uppercase tracking-wider">{item.title}</h3>
                  <p className="text-xs uppercase tracking-wide text-white/80">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
