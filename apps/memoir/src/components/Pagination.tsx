import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function Pagination() {
  const [active, setActive] = useState(1)

  const goTo = (page: number) => {
    setActive(Math.min(Math.max(page, 1), 5))
  }

  return (
    <nav aria-label="Pagination" className="mt-4">
      <ul className="flex flex-wrap items-center gap-2">
        <li>
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Previous page"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-500 text-sky-500 transition-colors hover:bg-sky-500 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
        </li>
        {[1, 2, 3, 4, 5].map((page) => (
          <li key={page}>
            <button
              type="button"
              onClick={() => goTo(page)}
              aria-label={`Page ${page}`}
              aria-current={page === active}
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-full border transition-colors',
                page === active
                  ? 'border-sky-500 bg-sky-500 text-white'
                  : 'border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white',
              )}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Next page"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-500 text-sky-500 transition-colors hover:bg-sky-500 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </li>
      </ul>
    </nav>
  )
}
