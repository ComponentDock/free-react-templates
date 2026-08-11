import { ChevronLeft, ChevronRight } from 'lucide-react'
import { activePage, nextLabel, pageCount, paginationLabel, prevLabel } from '../data'
import { cn } from '@free-react-templates/ui'

export function Pagination() {
  return (
    <nav aria-label={paginationLabel} className="pb-16 pt-2">
      <ul className="flex items-center justify-center gap-2">
        <li>
          <a
            href="#blog"
            aria-label={prevLabel}
            className="flex h-10 w-10 items-center justify-center border border-black/10 text-black/40 transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </a>
        </li>
        {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
          <li key={page}>
            <a
              href="#blog"
              aria-current={page === activePage ? 'page' : undefined}
              className={cn(
                'flex h-10 w-10 items-center justify-center border border-black/10 transition-colors',
                page === activePage
                  ? 'bg-brand text-white'
                  : 'text-black/40 hover:bg-brand hover:text-white',
              )}
            >
              {page}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#blog"
            aria-label={nextLabel}
            className="flex h-10 w-10 items-center justify-center border border-black/10 text-black/40 transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
