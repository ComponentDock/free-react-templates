import { cn } from '@free-react-templates/ui'
import { pages } from '../data'

export function Pagination() {
  return (
    <nav aria-label="Pagination" className="mt-[100px]">
      <ul className="flex items-center gap-2.5">
        {pages.map((page, index) => (
          <li key={page}>
            <a
              href="#blog"
              aria-label={`Page ${index + 1}`}
              aria-current={index === 0 ? 'page' : undefined}
              className={cn(
                'flex h-10 w-10 items-center justify-center bg-pageline text-[11px] text-ink transition-colors hover:bg-ink hover:text-white dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-100 dark:hover:text-gray-900',
                index === 0 &&
                  'bg-ink text-white hover:bg-ink hover:text-white dark:bg-gray-100 dark:text-gray-900',
              )}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
