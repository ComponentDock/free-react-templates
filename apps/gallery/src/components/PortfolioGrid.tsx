export interface PortfolioItem {
  id: number
  category: string
  type: string
  seed: string
}

const ITEMS: PortfolioItem[] = [
  { id: 1, category: 'Smartphone', type: 'Gallery', seed: 'gallery-1' },
  { id: 2, category: 'Book', type: 'Video', seed: 'gallery-2' },
  { id: 3, category: 'Doodle', type: 'Video', seed: 'gallery-3' },
  { id: 4, category: 'Foster', type: 'Gallery', seed: 'gallery-4' },
  { id: 5, category: 'Starlight', type: 'Article', seed: 'gallery-5' },
  { id: 6, category: 'Open Book', type: 'Video', seed: 'gallery-6' },
  { id: 7, category: 'Burger', type: 'Video', seed: 'gallery-7' },
  { id: 8, category: 'Printscreen', type: 'Article', seed: 'gallery-8' },
  { id: 9, category: 'Bottle', type: 'Article', seed: 'gallery-9' },
]

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const isWide = item.id === 4

  return (
    <div
      className={`group relative cursor-pointer overflow-hidden ${
        isWide ? 'col-span-1 sm:col-span-2' : 'col-span-1'
      }`}
    >
      <img
        src={`https://picsum.photos/seed/${item.seed}/${isWide ? 800 : 400}/400`}
        alt={item.category}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/50">
        <div className="text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-sm font-semibold uppercase tracking-wider">{item.category}</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-gray-300">{item.type}</p>
        </div>
      </div>
    </div>
  )
}

export function PortfolioGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
        {ITEMS.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
