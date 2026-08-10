import { cn } from '@free-react-templates/ui'

const pages = [1, 2, 3, 4] as const

/** Numbered pagination control, first page marked as the current page. */
export function Pagination() {
  return (
    <nav aria-label="Pagination" className="bg-white">
      <ul className="mx-auto flex max-w-6xl items-center gap-1 px-4 pb-10 lg:px-6">
        {pages.map((page) => {
          const current = page === 1
          return (
            <li key={page}>
              <a
                href="#top"
                aria-current={current ? 'page' : undefined}
                className={cn(
                  'inline-block px-3 py-2 text-[0.89rem] transition-colors',
                  current ? 'font-medium text-ink' : 'text-[#b3b3b3] hover:text-ink',
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
