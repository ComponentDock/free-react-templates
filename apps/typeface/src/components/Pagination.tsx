import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { nextPageLabel, pageLabel, paginationLabel, previousPageLabel } from '../data'

const pageCount = 5

const circle =
  'flex h-10 w-10 items-center justify-center rounded-full border border-line text-body transition-colors hover:bg-brand hover:text-white'

/* Centered circular pagination (reference `ul.pagination`, 40px circles):
   ‹ 1 2 3 4 5 › with the active page filled in brand purple. */
export function Pagination() {
  const [current, setCurrent] = useState(1)
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

  const goTo = (target: number) => {
    setCurrent(Math.min(pageCount, Math.max(1, target)))
  }

  return (
    <nav aria-label={paginationLabel} className="mt-12 flex justify-center">
      <ul className="flex items-center gap-2">
        <li>
          <button
            type="button"
            aria-label={previousPageLabel}
            onClick={() => goTo(current - 1)}
            className={circle}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              aria-label={pageLabel(page)}
              aria-current={page === current ? 'page' : undefined}
              onClick={() => goTo(page)}
              className={cn(
                circle,
                page === current && 'border-brand bg-brand text-white hover:bg-brand',
              )}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            aria-label={nextPageLabel}
            onClick={() => goTo(current + 1)}
            className={circle}
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </li>
      </ul>
    </nav>
  )
}
