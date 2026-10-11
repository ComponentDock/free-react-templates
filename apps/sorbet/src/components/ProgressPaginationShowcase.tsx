import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ShowcaseSection } from './section'

const BARS = [
  { id: 'forty', width: 40, label: '40% Complete', fill: 'bg-primary-500' },
  { id: 'sixty', width: 60, label: '60% Complete', fill: 'bg-info' },
  { id: 'seventy', width: 70, label: '70% Complete', fill: 'bg-warning' },
]

const STACKED_BARS = [
  { id: 'success', width: 35, label: '35% Complete (success)', fill: 'bg-success' },
  { id: 'warning', width: 20, label: '20% Complete (warning)', fill: 'bg-warning' },
  { id: 'danger', width: 30, label: '30% Complete (danger)', fill: 'bg-danger' },
]

const ROW_ONE = [1, 2, 3, 4, 5]

const ROW_TWO = [1, 2, 3, 4, 5, 6, 7]

const PAGE_ITEM =
  'flex h-9 min-w-9 cursor-pointer items-center justify-center rounded px-3 text-sm transition-colors'

const pageClass = (active: boolean) =>
  cn(PAGE_ITEM, active ? 'bg-primary-500 text-heading' : 'text-heading/40 hover:text-primary-500')

/** The labeled 5px progress bars beside the two pagination rows. */
export function ProgressPaginationShowcase() {
  const [pageOne, setPageOne] = useState(1)
  const [pageTwo, setPageTwo] = useState(2)

  return (
    <ShowcaseSection id="progressbar">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="mb-5 text-[28px] font-medium text-heading">Progress bars</h2>
          <div className="space-y-4">
            {BARS.map(({ id, width, label, fill }) => (
              <div
                key={id}
                role="progressbar"
                aria-valuenow={width}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={label}
                className="h-[5px] w-full overflow-hidden rounded bg-track"
              >
                <div className={cn('h-full', fill)} style={{ width: `${width}%` }} />
              </div>
            ))}
            <div className="h-[5px] w-full overflow-hidden rounded bg-track">
              {STACKED_BARS.map(({ id, width, label, fill }) => (
                <div key={id} className={cn('h-full', fill)} style={{ width: `${width}%` }}>
                  <span className="sr-only">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-[28px] font-medium text-heading">Paginations</h2>
          <nav aria-label="Pagination one" className="mb-4 flex flex-wrap items-center gap-1">
            <button
              type="button"
              aria-label="Previous page one"
              onClick={() => setPageOne((page) => Math.max(1, page - 1))}
              className={pageClass(false)}
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            {ROW_ONE.map((page) => (
              <button
                key={page}
                type="button"
                aria-label={`Page one ${page}`}
                aria-current={pageOne === page ? 'page' : undefined}
                onClick={() => setPageOne(page)}
                className={pageClass(pageOne === page)}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              aria-label="Next page one"
              onClick={() => setPageOne((page) => Math.min(ROW_ONE.length, page + 1))}
              className={pageClass(false)}
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </nav>

          <nav aria-label="Pagination two" className="flex flex-wrap items-center gap-1">
            <button
              type="button"
              onClick={() => setPageTwo((page) => Math.max(1, page - 1))}
              className={pageClass(false)}
            >
              Previous
            </button>
            {ROW_TWO.map((page) => (
              <button
                key={page}
                type="button"
                aria-label={`Page two ${page}`}
                aria-current={pageTwo === page ? 'page' : undefined}
                onClick={() => setPageTwo(page)}
                className={pageClass(pageTwo === page)}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPageTwo((page) => Math.min(ROW_TWO.length, page + 1))}
              className={pageClass(false)}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </ShowcaseSection>
  )
}
