import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { activePage, nextPageLabel, pageCount, pageLabel, prevPageLabel } from '../data'

export function Pagination() {
  return (
    <nav aria-label="Pagination" className="px-6 pb-20 lg:px-12">
      <ul className="flex items-center justify-center gap-2.5">
        <li>
          <button
            type="button"
            aria-label={prevPageLabel}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-black transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
        </li>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            <button
              type="button"
              aria-label={pageLabel(page)}
              aria-current={page === activePage ? 'page' : undefined}
              className={cn(
                'h-10 w-10 rounded-full border text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60',
                page === activePage
                  ? 'border-transparent bg-brand text-white'
                  : 'border-line text-black hover:border-brand hover:text-brand',
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-black transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </li>
      </ul>
    </nav>
  )
}
