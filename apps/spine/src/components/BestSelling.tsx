import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { bestSellingBooks, bestSellingTitle, scrollLeftLabel, scrollRightLabel } from '../data'
import { BookCard } from './BookCard'

export function BestSelling() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByWindow = (direction: 1 | -1) => {
    const track = trackRef.current!
    track.scrollLeft += direction * track.clientWidth
  }

  return (
    <section aria-labelledby="best-selling-heading" className="bg-section py-[95px]">
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="best-selling-heading"
          className="mb-[22px] text-center font-display text-3xl font-bold text-ink"
        >
          {bestSellingTitle}
        </h2>
        <div className="relative">
          <div
            ref={trackRef}
            data-testid="best-selling-track"
            className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {bestSellingBooks.map((book) => (
              <div key={book.cover} className="w-1/2 shrink-0 sm:w-1/3 lg:w-1/4">
                <BookCard book={book} />
              </div>
            ))}
          </div>
          <button
            type="button"
            aria-label={scrollLeftLabel}
            onClick={() => scrollByWindow(-1)}
            className="absolute -left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-md transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={scrollRightLabel}
            onClick={() => scrollByWindow(1)}
            className="absolute -right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-md transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
