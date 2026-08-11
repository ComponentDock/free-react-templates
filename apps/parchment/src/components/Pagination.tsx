import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  firstPage,
  lastPage,
  nextPageLabel,
  pageLabel,
  paginationLabel,
  paginationPages,
  previousPageLabel,
} from '../data'

/* Centered pagination (reference `nav.pgn`): Prev/Next arrow-icon buttons
   and 3.6rem-tall page numbers; hover background #dddddd, current page navy
   #111860 with white text. The trailing ellipsis is decorative. */
export function Pagination() {
  const [current, setCurrent] = useState(firstPage)

  const pageButtonClasses =
    'flex h-[3.6rem] min-w-[3.6rem] items-center justify-center px-3 text-[1.7rem] font-bold text-ink transition-colors hover:bg-hover-gray'

  return (
    <nav aria-label={paginationLabel} className="mt-12 text-center">
      <ul className="inline-flex items-center gap-1">
        <li>
          <button
            type="button"
            aria-label={previousPageLabel}
            onClick={() => setCurrent((page) => Math.max(firstPage, page - 1))}
            className="flex h-[3.6rem] w-[5rem] items-center justify-center rounded-[3px] text-ink transition-colors hover:bg-hover-gray"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
        </li>
        {paginationPages.map((page) =>
          page === '…' ? (
            <li key="ellipsis">
              <span className="px-2 text-[1.7rem] text-black/60">…</span>
            </li>
          ) : (
            <li key={page}>
              <button
                type="button"
                aria-current={page === current ? 'page' : undefined}
                aria-label={pageLabel(page)}
                onClick={() => setCurrent(page)}
                className={cn(
                  pageButtonClasses,
                  page === current && 'bg-brand text-white hover:bg-brand',
                )}
              >
                {page}
              </button>
            </li>
          ),
        )}
        <li>
          <button
            type="button"
            aria-label={nextPageLabel}
            onClick={() => setCurrent((page) => Math.min(lastPage, page + 1))}
            className="flex h-[3.6rem] w-[5rem] items-center justify-center rounded-[3px] text-ink transition-colors hover:bg-hover-gray"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </li>
      </ul>
    </nav>
  )
}
