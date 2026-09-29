import { FilterSelect } from './FilterSelect'
import { cn } from '@free-react-templates/ui'

interface AdvancedSearchProps {
  resultCount?: number
  className?: string
  onSearch?: () => void
  onReset?: () => void
}

const filters = [
  { label: 'ACCESSORIES', options: ['Watch', 'Hat', 'Scarf', 'Belt', 'Bag'] },
  { label: 'COLOR', options: ['Black', 'White', 'Red', 'Blue', 'Green'] },
  { label: 'SIZE', options: ['XS', 'S', 'M', 'L', 'XL'] },
  { label: 'SALE', options: ['On Sale', 'Not On Sale'] },
  { label: 'TIME', options: ['Today', 'This Week', 'This Month', 'This Year'] },
  { label: 'TYPE', options: ['T-Shirt', 'Pants', 'Dress', 'Jacket', 'Shoes'] },
]

export function AdvancedSearch({
  resultCount = 108,
  className,
  onSearch,
  onReset,
}: AdvancedSearchProps) {
  return (
    <div className={cn('mt-6', className)}>
      <h3 className="mb-4 text-sm font-medium text-seekstream-heading">Advanced Search</h3>

      <div className="mb-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
        {filters.map((filter) => (
          <FilterSelect key={filter.label} label={filter.label} options={filter.options} />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-seekstream-results">{resultCount} results</span>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onReset}
            className="text-sm font-medium text-seekstream-text underline-offset-2 transition-colors hover:underline"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={onSearch}
            className="rounded bg-seekstream-btn px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-seekstream-btn-hover"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
