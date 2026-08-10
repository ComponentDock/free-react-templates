import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const pages = [1, 2, 3, 4] as const

export function Pagination() {
  const [active, setActive] = useState(1)

  return (
    <nav aria-label="Pagination" className="mt-4">
      <ul className="flex flex-wrap items-center gap-2">
        <li>
          <button
            type="button"
            aria-label="Previous page"
            disabled={active === 1}
            onClick={() => setActive(active - 1)}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-[2px] border border-line-page text-ink-body transition-colors',
              active === 1
                ? 'cursor-not-allowed text-gray-400'
                : 'hover:bg-brand-500 hover:text-white',
            )}
          >
            «
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              aria-label={`Page ${page}`}
              aria-current={page === active}
              onClick={() => setActive(page)}
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-[2px] border border-line-page transition-colors',
                page === active
                  ? 'border-brand-500 bg-brand-500 text-white shadow-[0_2px_10px_-5px_black]'
                  : 'text-ink-body hover:bg-brand-500 hover:text-white',
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
            disabled={active === 4}
            onClick={() => setActive(active + 1)}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-[2px] border border-line-page text-ink-body transition-colors',
              active === 4
                ? 'cursor-not-allowed text-gray-400'
                : 'hover:bg-brand-500 hover:text-white',
            )}
          >
            »
          </button>
        </li>
      </ul>
    </nav>
  )
}
