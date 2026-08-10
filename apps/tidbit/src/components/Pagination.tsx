import { currentPage, paginationPages } from '../data'

/** Circular pagination: current page = solid accent circle, others grey. */
export function Pagination() {
  return (
    <nav aria-label="Pagination" className="mt-16 flex justify-center gap-2">
      {paginationPages.map((page) => {
        if (page === '…') {
          return (
            <span
              key={page}
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center text-body"
            >
              {page}
            </span>
          )
        }
        if (page === currentPage) {
          return (
            <span
              key={page}
              aria-current="page"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white"
            >
              {page}
            </span>
          )
        }
        return (
          <a
            key={page}
            href="#top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-soft text-sm font-bold text-ink transition-colors hover:bg-accent hover:text-white"
          >
            {page}
          </a>
        )
      })}
    </nav>
  )
}
