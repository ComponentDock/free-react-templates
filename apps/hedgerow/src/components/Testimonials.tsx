import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Reveal, prefersReducedMotion } from './Reveal'
import { testimonials } from '../content'

/** The reference's three breakpoints: three up, two up, one up. */
export function perViewFor(width: number): number {
  if (width >= 1024) {
    return 3
  }
  if (width >= 640) {
    return 2
  }
  return 1
}

function usePerView(): number {
  const [perView, setPerView] = useState(() => perViewFor(window.innerWidth))

  useEffect(() => {
    const onResize = () => setPerView(perViewFor(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return perView
}

/** Three reviews; advances every 5 s, pauses on hover, 3/2/1 cards per view. */
export function Testimonials() {
  const perView = usePerView()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const pages = Math.ceil(testimonials.items.length / perView)
  const current = Math.min(index, pages - 1)

  useEffect(() => {
    if (pages <= 1 || paused || prefersReducedMotion()) {
      return
    }

    const timer = window.setInterval(() => setIndex((value) => (value + 1) % pages), 5000)
    return () => window.clearInterval(timer)
  }, [pages, paused])

  const step = (direction: number) => setIndex((value) => (value + direction + pages) % pages)

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 bg-gray-50 py-20 lg:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
            {testimonials.chip}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {testimonials.title}
          </h2>
          <p className="mt-3 text-gray-600">{testimonials.lede}</p>
        </Reveal>

        <div className="relative mt-14" data-carousel>
          <div className="overflow-hidden">
            <ul
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * (100 / perView)}%)` }}
            >
              {testimonials.items.map((review) => (
                <li
                  key={review.name}
                  className="shrink-0 px-2"
                  style={{ flexBasis: `${100 / perView}%` }}
                >
                  <figure className="h-full rounded-2xl bg-white p-8 shadow-soft">
                    <div className="flex gap-1 text-primary-400" aria-label="Rated 5 out of 5">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Star key={star} aria-hidden="true" className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-5 text-lg leading-relaxed font-medium text-gray-900">
                      “{review.quote}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-base font-semibold text-primary-600"
                      >
                        {review.name.charAt(0)}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-gray-900">
                          {review.name}
                        </span>
                        <span className="block text-sm text-gray-500">{review.place}</span>
                      </span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>

          {pages > 1 && (
            <>
              <div className="mt-8 flex items-center justify-center gap-3">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={() => step(-1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none"
                >
                  <ChevronLeft aria-hidden="true" className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next review"
                  onClick={() => step(1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none"
                >
                  <ChevronRight aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2" data-carousel-dots>
                {Array.from({ length: pages }, (_, dot) => (
                  <button
                    key={dot}
                    type="button"
                    aria-label={`Go to review group ${dot + 1}`}
                    aria-current={dot === current ? 'true' : undefined}
                    onClick={() => setIndex(dot)}
                    className={cn(
                      'h-2.5 rounded-full transition-all',
                      dot === current ? 'w-8 bg-primary-600' : 'w-2.5 bg-gray-300',
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
