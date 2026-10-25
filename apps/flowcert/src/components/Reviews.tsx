import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { reviews, reviewsBadge, reviewsFootnote, reviewsHeading } from '../data'

const STARS = [0, 1, 2, 3, 4]

/** Five seconds per advance, cleared on hover and under reduced motion. */
const AUTOPLAY_MS = 5000

/** Three cards fill the track at `lg`, two at `sm`, one below it. */
export function perViewFor(width: number): number {
  if (width >= 1024) {
    return 3
  }
  if (width >= 640) {
    return 2
  }
  return 1
}

function prefersReducedMotion(): boolean {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Three review cards in a track that moves by one card per control. At `lg`
 * three cards fill the viewport, so the track has a single position and the
 * arrows clamp to it — which is exactly what the reference does.
 */
export function Reviews() {
  const [perView, setPerView] = useState(() => perViewFor(window.innerWidth))
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const maxIndex = Math.max(0, reviews.length - perView)

  useEffect(() => {
    const onResize = () => {
      const next = perViewFor(window.innerWidth)
      setPerView(next)
      setIndex((current) => Math.min(current, Math.max(0, reviews.length - next)))
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (paused || maxIndex === 0 || prefersReducedMotion()) {
      return
    }

    const timer = setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1))
    }, AUTOPLAY_MS)

    return () => clearInterval(timer)
  }, [paused, maxIndex])

  const goTo = (next: number) => {
    setIndex(Math.min(Math.max(next, 0), maxIndex))
  }

  return (
    <section id="testimonials" className="scroll-mt-24 bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
            {reviewsBadge}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {reviewsHeading}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{reviewsFootnote}</p>
        </div>

        <div
          data-testid="review-carousel"
          className="relative mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              data-testid="review-track"
              data-index={index}
              data-per-view={perView}
              style={{ transform: `translateX(-${(index * 100) / perView}%)` }}
              className="flex transition-transform duration-500 ease-out"
            >
              {reviews.map((review) => (
                <div
                  key={review.name}
                  style={{ flexBasis: `${100 / perView}%` }}
                  className="shrink-0 px-3"
                >
                  <div className="h-full rounded-2xl bg-white p-8 shadow-card">
                    <div className="mb-6 flex gap-1" role="img" aria-label="Rated 5 out of 5">
                      {STARS.map((star) => (
                        <Star
                          key={star}
                          aria-hidden="true"
                          className="h-5 w-5 text-primary-400"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg font-medium text-gray-900">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                    <div className="mt-6 flex items-center gap-4">
                      <div
                        aria-hidden="true"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-semibold text-primary-600"
                      >
                        {review.initial}
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

          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(index - 1)}
            className="absolute top-1/2 -left-4 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink-600 shadow-card transition-colors hover:text-primary-700 lg:flex"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(index + 1)}
            className="absolute top-1/2 -right-4 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink-600 shadow-card transition-colors hover:text-primary-700 lg:flex"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, dot) => (
              <button
                key={dot}
                type="button"
                aria-label={`Go to review slide ${dot + 1}`}
                aria-current={dot === index}
                onClick={() => goTo(dot)}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  dot === index ? 'w-8 bg-primary-600' : 'w-2.5 bg-primary-200',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
