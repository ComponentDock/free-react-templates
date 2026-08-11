import { nextPageLabel, pageLabel, paginationLabel, previousPageLabel } from '../data'

const pages = [1, 2]

export function Pagination() {
  return (
    <nav aria-label={paginationLabel} className="flex justify-center pt-2">
      <ul className="flex items-center gap-3">
        <li>
          <a
            href="#"
            className="inline-block bg-white px-5 py-2.5 font-serif text-sm font-bold text-ink shadow-sm transition-colors hover:bg-coal hover:text-brand"
          >
            {previousPageLabel}
          </a>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <a
              href="#"
              aria-current={page === 1 ? 'page' : undefined}
              aria-label={pageLabel(page)}
              className="inline-block bg-white px-5 py-2.5 font-serif text-sm font-bold text-ink shadow-sm transition-colors hover:bg-coal hover:text-brand"
            >
              {page}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="inline-block bg-white px-5 py-2.5 font-serif text-sm font-bold text-ink shadow-sm transition-colors hover:bg-coal hover:text-brand"
          >
            {nextPageLabel}
          </a>
        </li>
      </ul>
    </nav>
  )
}
