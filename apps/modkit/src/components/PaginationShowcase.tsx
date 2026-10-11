import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Band } from './Band'

interface PageVariant {
  id: string
  active: string
  shadow: string
}

const VARIANTS: PageVariant[] = [
  { id: 'primary', active: 'bg-kit-primary text-white', shadow: 'shadow-page-primary' },
  { id: 'secondary', active: 'bg-kit-secondary text-white', shadow: 'shadow-page-secondary' },
  { id: 'info', active: 'bg-kit-info text-white', shadow: 'shadow-page-info' },
]

const PAGES = ['1', '2', '3']

export function PaginationShowcase() {
  const [activePages, setActivePages] = useState<Record<string, string>>({
    primary: '1',
    secondary: '1',
    info: '1',
  })

  const select = (variant: string, page: string) =>
    setActivePages((prev) => ({ ...prev, [variant]: page }))

  return (
    <Band
      title="Pagination"
      lead="Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages."
    >
      <div className="space-y-6">
        {VARIANTS.map((variant) => (
          <ul
            key={variant.id}
            aria-label={`${variant.id} pagination`}
            className="flex items-center gap-1"
          >
            <li>
              <button
                type="button"
                aria-label={`Previous page (${variant.id})`}
                onClick={() => select(variant.id, '1')}
                className="cursor-pointer rounded px-3 py-1.5 text-[0.9rem] text-body hover:bg-band"
              >
                Prev
              </button>
            </li>
            {PAGES.map((page) => (
              <li key={page}>
                <button
                  type="button"
                  aria-current={activePages[variant.id] === page ? 'page' : undefined}
                  onClick={() => select(variant.id, page)}
                  className={cn(
                    'cursor-pointer rounded px-3 py-1.5 text-[0.9rem]',
                    activePages[variant.id] === page
                      ? cn(variant.active, variant.shadow)
                      : 'text-body hover:bg-band',
                  )}
                >
                  {page}
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                aria-label={`Next page (${variant.id})`}
                onClick={() => select(variant.id, '3')}
                className="cursor-pointer rounded px-3 py-1.5 text-[0.9rem] text-body hover:bg-band"
              >
                Next
              </button>
            </li>
          </ul>
        ))}
      </div>
    </Band>
  )
}
