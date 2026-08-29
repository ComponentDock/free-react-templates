import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

export function Pagination() {
  const [active, setActive] = useState(1)
  const pages = [1, 2, 3, 4, 5]

  return (
    <section data-testid="pagination" className="mb-12">
      <h2 className="mb-6 text-base font-medium text-paddle-heading">Pagination</h2>
      <div className="flex flex-wrap gap-2">
        <button
          className="btn-pagination"
          aria-label="Previous page"
          onClick={() => setActive(Math.max(1, active - 1))}
        >
          &lt;
        </button>
        {pages.map((p) => (
          <button
            key={p}
            className={cn('btn-pagination', active === p && 'active')}
            onClick={() => setActive(p)}
            aria-label={`Page ${p}`}
            aria-current={active === p ? 'page' : undefined}
          >
            {p}
          </button>
        ))}
        <button
          className="btn-pagination"
          aria-label="Next page"
          onClick={() => setActive(Math.min(5, active + 1))}
        >
          &gt;
        </button>
      </div>
    </section>
  )
}
