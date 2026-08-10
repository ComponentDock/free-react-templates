import { cn } from '@free-react-templates/ui'
import { activePage, paginationLabel, paginationPages } from '../data'

/** Square page-number links (01–04, 09); the active page is black. */
export function Pagination() {
  return (
    <nav aria-label={paginationLabel} className="mt-12">
      <ul className="flex gap-1">
        {paginationPages.map((page) => {
          const isActive = page === activePage
          return (
            <li key={page}>
              <a
                href="#top"
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'flex h-10 min-w-10 items-center justify-center border px-3 text-sm transition-colors',
                  isActive
                    ? 'border-black bg-black text-white'
                    : 'border-line bg-white text-ink hover:bg-soft hover:text-accent',
                )}
              >
                {page}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
