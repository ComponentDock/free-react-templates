import { ArrowLeft, ArrowRight } from 'lucide-react'
import { nextLabel, pageNumbers, paginationLabel, prevLabel } from '../data'

export function Pagination() {
  return (
    <nav aria-label={paginationLabel} className="bg-white pb-16">
      <ul className="flex flex-wrap items-center justify-center gap-2">
        <li>
          <a
            href="#"
            aria-label={prevLabel}
            className="flex items-center gap-2 rounded-none px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            {prevLabel}
          </a>
        </li>
        {pageNumbers.map((page) => (
          <li key={page}>
            <a
              href="#"
              aria-label={`Page ${page}`}
              className="rounded-none px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
            >
              {page}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            aria-label={nextLabel}
            className="flex items-center gap-2 rounded-none px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            {nextLabel}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
