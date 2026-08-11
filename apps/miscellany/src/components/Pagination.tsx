import { cn } from '@free-react-templates/ui'
import { paginationNextLabel, paginationPages, paginationPrevLabel } from '../data'

export function Pagination() {
  return (
    <div className="flex justify-center pt-2">
      <ul className="flex items-center gap-2">
        <li>
          <a
            href="#"
            aria-label={paginationPrevLabel}
            className="flex h-10 w-10 items-center justify-center rounded border border-black/10 text-heading transition-colors hover:bg-brand hover:text-white dark:border-white/20 dark:text-white"
          >
            «
          </a>
        </li>
        {paginationPages.map((page) => (
          <li key={page}>
            <a
              href="#"
              aria-current={page === 1 ? 'page' : undefined}
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded border transition-colors',
                page === 1
                  ? 'border-brand bg-brand text-white'
                  : 'border-black/10 text-heading hover:bg-brand hover:text-white dark:border-white/20 dark:text-white',
              )}
            >
              {page}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            aria-label={paginationNextLabel}
            className="flex h-10 w-10 items-center justify-center rounded border border-black/10 text-heading transition-colors hover:bg-brand hover:text-white dark:border-white/20 dark:text-white"
          >
            »
          </a>
        </li>
      </ul>
    </div>
  )
}
