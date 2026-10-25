import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { REVIEWS, REVIEWS_HEADING, REVIEWS_NOTE } from '../content'
import { prefersReducedMotion } from '../lib/motion'
import { usePerView } from '../lib/usePerView'
import { Reveal } from './Reveal'

const AUTOPLAY_MS = 5000

export function Testimonials() {
  const perView = usePerView()
  const reduced = prefersReducedMotion()
  const pages = Math.max(1, Math.ceil(REVIEWS.length / perView))
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduced || pages <= 1) {
      return
    }
    const id = setInterval(() => setIndex((current) => (current + 1) % pages), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [pages, reduced])

  const page = Math.min(index, pages - 1)

  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
            Reviews
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {REVIEWS_HEADING}
          </h2>
          <p className="mt-4 text-ink-500">{REVIEWS_NOTE}</p>
        </Reveal>

        <Reveal className="relative mt-12">
          <div className="overflow-hidden" data-carousel>
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {REVIEWS.map((review) => (
                <div
                  key={review.name}
                  data-carousel-slide
                  className="shrink-0 px-3"
                  style={{ width: `${100 / perView}%` }}
                >
                  <div className="h-full rounded-2xl bg-white p-8 shadow-soft">
                    <div className="mb-6 flex gap-1" aria-hidden="true">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-4 w-4 text-amber-400" fill="currentColor" />
                      ))}
                    </div>
                    <blockquote className="text-lg font-medium text-gray-900">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-semibold text-primary-600">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{review.name}</div>
                        <div className="text-sm text-gray-600">{review.town}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {pages > 1 ? (
            <>
              <button
                type="button"
                aria-label="Previous reviews"
                onClick={() => setIndex((current) => Math.max(0, current - 1))}
                className="absolute -left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition-colors hover:text-primary-700 lg:flex"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next reviews"
                onClick={() => setIndex((current) => Math.min(pages - 1, current + 1))}
                className="absolute -right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition-colors hover:text-primary-700 lg:flex"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
              <div className="mt-8 flex items-center justify-center gap-2">
                {Array.from({ length: pages }, (_, dot) => (
                  <button
                    key={dot}
                    type="button"
                    aria-label={`Go to review page ${dot + 1}`}
                    aria-current={page === dot ? 'true' : undefined}
                    onClick={() => setIndex(dot)}
                    className={cn(
                      'h-2.5 rounded-full transition-all',
                      page === dot ? 'w-8 bg-primary-600' : 'w-2.5 bg-gray-300',
                    )}
                  />
                ))}
              </div>
            </>
          ) : null}
        </Reveal>
      </div>
    </section>
  )
}
