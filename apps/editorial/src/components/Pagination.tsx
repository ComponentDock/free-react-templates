interface PaginationProps {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav aria-label="Pagination" className="px-8 py-8 md:px-16">
      <ul className="flex items-center gap-2">
        <li>
          <button
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="px-3 py-2 text-sm font-medium text-text-light transition-colors hover:text-brand disabled:opacity-40 disabled:hover:text-text-light"
          >
            &laquo;
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                page === currentPage ? 'bg-brand text-white' : 'text-text-light hover:text-brand'
              }`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="px-3 py-2 text-sm font-medium text-text-light transition-colors hover:text-brand disabled:opacity-40 disabled:hover:text-text-light"
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  )
}
