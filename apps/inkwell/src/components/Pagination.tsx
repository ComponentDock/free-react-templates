import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const pages = [1, 2, 3, 4, 5] as const

export function Pagination() {
  return (
    <nav aria-label="Pagination" className="bg-surface pb-16 dark:bg-gray-900">
      <ul className="flex items-center justify-center gap-[10px]">
        <li>
          <button
            type="button"
            aria-label="Previous page"
            className="flex h-10 w-10 items-center justify-center rounded-[4px] text-black transition-colors hover:bg-ink hover:text-white dark:text-gray-200 dark:hover:bg-white dark:hover:text-black"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              aria-label={`Page ${page}`}
              aria-current={page === 1 ? 'page' : undefined}
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-[4px] text-black transition-colors hover:bg-ink hover:text-white dark:text-gray-200 dark:hover:bg-white dark:hover:text-black',
                page === 1 &&
                  'bg-ink text-white hover:bg-ink hover:text-white dark:bg-white dark:text-black',
              )}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            aria-label="Next page"
            className="flex h-10 w-10 items-center justify-center rounded-[4px] text-black transition-colors hover:bg-ink hover:text-white dark:text-gray-200 dark:hover:bg-white dark:hover:text-black"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </li>
      </ul>
    </nav>
  )
}
