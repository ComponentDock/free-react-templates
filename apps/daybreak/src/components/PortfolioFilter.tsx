import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const filters = ['All', 'Post', 'Image', 'Video', 'Extern'] as const

export type FilterCategory = (typeof filters)[number]

interface PortfolioFilterProps {
  onFilterChange?: (filter: FilterCategory) => void
}

export function PortfolioFilter({ onFilterChange }: PortfolioFilterProps) {
  const [active, setActive] = useState<FilterCategory>('All')

  const handleClick = (filter: FilterCategory) => {
    setActive(filter)
    onFilterChange?.(filter)
  }

  return (
    <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Portfolio filters">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => handleClick(filter)}
          className={cn(
            'rounded px-4 py-2 text-sm font-medium transition-colors',
            active === filter
              ? 'bg-primary-400 text-white'
              : 'bg-gray-100 text-smoke hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700',
          )}
          aria-pressed={active === filter}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
