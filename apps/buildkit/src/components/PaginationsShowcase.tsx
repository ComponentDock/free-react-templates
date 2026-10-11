import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ShowcaseSection, SubHeading } from './section'

const PAGES_ONE = [1, 2, 3, 4, 5]

const PAGES_TWO = [1, 2, 3, 4, 5, 6, 7]

const circle = (active: boolean) =>
  cn(
    'flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border border-transparent text-sm transition-colors',
    active
      ? 'bg-primary-600 text-white'
      : 'bg-white text-black/40 hover:bg-primary-600 hover:text-white',
  )

const outline = (active: boolean) =>
  cn(
    'flex h-[50px] min-w-[50px] cursor-pointer items-center justify-center rounded-full px-3 text-sm transition-colors',
    active
      ? 'bg-primary-600 text-white shadow-[0_10px_27px_-20px_rgba(0,0,0,0.33)]'
      : 'text-black/40 hover:text-primary-600',
  )

export function PaginationsShowcase() {
  const [activeOne, setActiveOne] = useState(1)
  const [activeTwo, setActiveTwo] = useState(2)

  return (
    <ShowcaseSection id="paginations" title="Paginations" className="bg-light">
      <div className="space-y-4">
        <SubHeading>Circle pagination</SubHeading>
        <nav aria-label="Circle pagination" className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            aria-label="Previous circle page"
            onClick={() => setActiveOne(Math.max(1, activeOne - 1))}
            className={circle(false)}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          {PAGES_ONE.map((page) => (
            <button
              key={page}
              type="button"
              aria-label={`Circle page ${page}`}
              aria-current={activeOne === page ? 'page' : undefined}
              onClick={() => setActiveOne(page)}
              className={circle(activeOne === page)}
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            aria-label="Next circle page"
            onClick={() => setActiveOne(Math.min(PAGES_ONE.length, activeOne + 1))}
            className={circle(false)}
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </nav>
      </div>

      <div className="space-y-4">
        <SubHeading>Outline pagination</SubHeading>
        <nav aria-label="Outline pagination" className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            aria-label="Previous outline page"
            onClick={() => setActiveTwo(Math.max(1, activeTwo - 1))}
            className={outline(false)}
          >
            Previous
          </button>
          {PAGES_TWO.map((page) => (
            <button
              key={page}
              type="button"
              aria-label={`Outline page ${page}`}
              aria-current={activeTwo === page ? 'page' : undefined}
              onClick={() => setActiveTwo(page)}
              className={outline(activeTwo === page)}
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            aria-label="Next outline page"
            onClick={() => setActiveTwo(Math.min(PAGES_TWO.length, activeTwo + 1))}
            className={outline(false)}
          >
            Next
          </button>
        </nav>
      </div>
    </ShowcaseSection>
  )
}
