export interface PortfolioFilterProps {
  active: string
  onFilter: (category: string) => void
}

const CATEGORIES = ['All', 'Post', 'Image', 'Video', 'Extern']

export function PortfolioFilter({ active, onFilter }: PortfolioFilterProps) {
  return (
    <div className="flex items-center justify-center gap-3 py-4">
      {CATEGORIES.map((cat, i) => (
        <span key={cat} className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onFilter(cat)}
            className={`text-sm font-medium transition-colors hover:text-brand ${
              active === cat ? 'text-brand' : 'text-ink'
            }`}
          >
            {cat}
          </button>
          {i < CATEGORIES.length - 1 && <span className="text-separator">·</span>}
        </span>
      ))}
    </div>
  )
}
