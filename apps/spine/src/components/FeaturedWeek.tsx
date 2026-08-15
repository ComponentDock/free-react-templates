import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react'
import { featured, scrollLeftLabel, scrollRightLabel } from '../data'

const FEATURED_CARD_COUNT = 2

export function FeaturedWeek() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByWindow = (direction: 1 | -1) => {
    const track = trackRef.current!
    track.scrollLeft += direction * track.clientWidth
  }

  return (
    <section id="featured" aria-labelledby="featured-heading" className="bg-white pt-[120px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 id="featured-heading" className="font-display text-3xl font-bold text-ink">
            {featured.title}
          </h2>
          <a
            href="#latest"
            className="relative pb-2.5 text-base font-medium text-ink transition-all hover:text-brand hover:tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {featured.viewAllLabel}
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-edge" aria-hidden="true" />
          </a>
        </div>
        <div className="relative">
          <div
            ref={trackRef}
            data-testid="featured-track"
            className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {Array.from({ length: FEATURED_CARD_COUNT }, (_card, cardIndex) => (
              <article
                key={cardIndex}
                className="flex w-full shrink-0 overflow-hidden bg-brand lg:w-[75%]"
              >
                <img src={featured.cover} alt="" className="w-1/3 object-cover lg:w-1/2" />
                <div className="flex flex-1 flex-col justify-center px-6 py-8 text-white lg:px-5 lg:py-[29px] lg:pl-20">
                  <span className="font-display text-lg italic">{featured.publisher}</span>
                  <h3 className="mt-3 font-display text-2xl font-normal leading-tight lg:text-4xl">
                    {featured.bookTitle}
                  </h3>
                  <p className="mt-1 text-sm">{featured.author}</p>
                  <p className="mt-2 text-[32px] font-medium">{featured.price}</p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="flex items-center gap-0.5">
                      {Array.from({ length: 4 }, (_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-4 w-4"
                          fill="currentColor"
                          aria-hidden="true"
                        />
                      ))}
                      <StarHalf className="h-4 w-4" fill="currentColor" aria-hidden="true" />
                    </span>
                    <span className="text-sm">{featured.reviews}</span>
                  </div>
                  <a
                    href="#latest"
                    className="mt-6 inline-block w-fit rounded-full border border-white px-10 py-[17px] text-base font-medium transition-colors hover:bg-white hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {featured.viewDetailsLabel}
                  </a>
                </div>
              </article>
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
