import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { paginationPages } from '../data'

export function Pagination() {
  return (
    <nav aria-label="Blog pagination" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <ul className="flex items-center justify-center gap-2">
        <li>
          <a
            href="#home"
            className="flex h-10 items-center gap-1 px-3 text-sm text-muted transition-colors hover:text-indigo-deep"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            Previous
          </a>
        </li>
        {paginationPages.map((page, index) => (
          <li key={page}>
            <a
              href="#home"
              aria-current={index === 0 ? 'page' : undefined}
              className={cn(
                'flex h-10 w-10 items-center justify-center text-sm font-medium transition-colors',
                index === 0
                  ? 'brand-gradient text-white'
                  : 'text-muted hover:brand-gradient hover:text-white',
              )}
            >
              {page}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#home"
            className="flex h-10 items-center gap-1 px-3 text-sm text-muted transition-colors hover:text-indigo-deep"
          >
            Next
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
