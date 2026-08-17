import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FEATURE_IMAGES, FEATURE_PLACES } from '../data'

const PAGE_SIZE = 3

/* Feature Places — centered section header followed by a carousel of
   destination cards. Each slide is a page of up to three cards; prev/next
   arrows and dots page through them with wrap-around. */
export function FeaturePlaces() {
  const pages = FEATURE_PLACES.map((_, index) => index).reduce<number[][]>((acc, index) => {
    const last = acc[acc.length - 1]
    if (!last || last.length === PAGE_SIZE) acc.push([index])
    else last.push(index)
    return acc
  }, [])
  const [page, setPage] = useState(0)
  const goTo = (next: number) => setPage(((next % pages.length) + pages.length) % pages.length)

  return (
    <section aria-label="Feature Places" id="feature-places" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mx-auto h-1.5 w-20 bg-brand" aria-hidden="true" />
          <h2 className="mt-4 text-4xl font-extrabold text-ink lg:text-5xl">Feature Places</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/60">
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters.
          </p>
        </div>

        <div className="relative mt-14">
          {pages.map((pageIndices, pageIndex) => (
            <div
              key={pageIndex}
              aria-hidden={pageIndex !== page ? 'true' : undefined}
              className={cn(
                'grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3',
                pageIndex === page ? 'relative' : 'pointer-events-none absolute inset-0 opacity-0',
              )}
            >
              {pageIndices.map((placeIndex) => {
                const place = FEATURE_PLACES[placeIndex]!
                return (
                  <article key={place.name} className="bg-white">
                    <div className="relative">
                      <img
                        src={FEATURE_IMAGES[placeIndex]}
                        alt={place.name}
                        loading="lazy"
                        className="aspect-[5/6] w-full object-cover"
                      />
                      <span className="absolute bottom-0 left-1/2 flex w-[calc(100%-3rem)] -translate-x-1/2 translate-y-1/3 flex-col bg-white px-5 pb-5 pt-4 shadow-[0_20px_25px_rgba(29,42,59,0.1)]">
                        <span className="flex items-center gap-2 text-sm font-bold text-ink">
                          {place.rating}
                          <Star className="h-4 w-4 fill-star text-star" aria-hidden="true" />
                          <span className="text-ink/60">{place.reviews}</span>
                        </span>
                        <h3 className="mt-2 flex items-center justify-between gap-2">
                          <span className="flex items-center gap-1.5 text-base font-extrabold text-ink">
                            <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                            {place.name}
                          </span>
                          <ArrowRight
                            className="h-4 w-4 shrink-0 text-ink transition-colors group-hover:text-brand"
                            aria-hidden="true"
                          />
                        </h3>
                      </span>
                    </div>
                  </article>
                )
              })}
            </div>
          ))}

          <button
            type="button"
            aria-label="Previous page"
            onClick={() => goTo(page - 1)}
            className="absolute -left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white text-ink shadow-lg transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next page"
            onClick={() => goTo(page + 1)}
            className="absolute -right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white text-ink shadow-lg transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="mt-10 flex justify-center gap-2">
            {pages.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                aria-label={`Go to page ${dotIndex + 1}`}
                aria-current={dotIndex === page ? 'true' : undefined}
                onClick={() => goTo(dotIndex)}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  dotIndex === page ? 'w-8 bg-brand' : 'w-2.5 bg-ink/20 hover:bg-ink/40',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
