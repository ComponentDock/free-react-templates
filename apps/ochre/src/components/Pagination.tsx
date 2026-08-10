import { cn } from '@free-react-templates/ui'

const pages = [1, 2, 3] as const
const nextLabel = 'Next'

export function Pagination() {
  return (
    <nav aria-label="Pagination" className="mt-10">
      <ul className="flex items-center justify-center gap-4">
        <li>
          <a href="#top" aria-disabled="true" tabIndex={-1} className="text-xl text-muted">
            Previous
          </a>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <a
              href="#top"
              aria-current={page === 1 ? 'page' : undefined}
              className={cn(
                'text-xl text-ink transition-colors hover:text-brand dark:text-gray-200 dark:hover:text-brand',
                page === 1 && 'text-brand',
              )}
            >
              {page}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#top"
            className="text-xl text-ink transition-colors hover:text-brand dark:text-gray-200 dark:hover:text-brand"
          >
            {nextLabel}
          </a>
        </li>
      </ul>
    </nav>
  )
}
