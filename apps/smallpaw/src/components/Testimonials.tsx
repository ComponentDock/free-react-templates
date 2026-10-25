import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/** 3 cards at `lg`, 2 at `sm`, 1 below — the reference's per-view ladder. */
function getPerView(): number {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    return 3
  }
  if (window.matchMedia('(min-width: 640px)').matches) {
    return 2
  }
  return 1
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Three reviews. The track slides by page, autoplay advances every 5 s and wraps,
 * hover pauses it and reduced motion never starts it. The arrows are `hidden
 * lg:flex`; the dots render at every width, one per page.
 */
export function Testimonials() {
  const [perView, setPerView] = useState(getPerView)
  const [page, setPage] = useState(0)
  const [paused, setPaused] = useState(false)
  const pages = Math.ceil(TESTIMONIALS.length / perView)

  useEffect(() => {
    const onResize = () => {
      setPerView(getPerView())
      setPage(0)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion() || paused || pages < 2) {
      return
    }

    const timer = setInterval(() => {
      setPage((current) => (current + 1) % pages)
    }, 5000)

    return () => clearInterval(timer)
  }, [paused, pages])

  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHead
          align="center"
          eyebrow="Clients"
          title="What people say"
          lede="Mostly about being told the price first."
        />

        <Reveal className="mt-16">
          <div
            data-testid="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative"
          >
            <div className="overflow-hidden">
              <ul
                data-testid="carousel-track"
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {TESTIMONIALS.map((testimonial) => (
                  <li
                    key={testimonial.name}
                    className="flex-none px-3"
                    style={{ width: `${100 / perView}%` }}
                  >
                    <figure className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-soft">
                      <div className="flex gap-1" aria-label="Five out of five stars">
                        {[0, 1, 2, 3, 4].map((star) => (
                          <Star
                            key={star}
                            aria-hidden="true"
                            className="h-5 w-5 fill-primary-400 text-primary-400"
                          />
                        ))}
                      </div>
                      <blockquote className="mt-5 flex-1 text-lg font-medium text-gray-900">
                        “{testimonial.quote}”
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-600"
                        >
                          {testimonial.initials}
                        </span>
                        <span>
                          <span className="block text-base font-semibold text-gray-900">
                            {testimonial.name}
                          </span>
                          <span className="block text-sm text-gray-500">{testimonial.place}</span>
                        </span>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setPage((current) => (current - 1 + pages) % pages)}
              className="absolute top-1/2 -left-4 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-600 shadow-lg hover:text-primary-600 lg:flex"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setPage((current) => (current + 1) % pages)}
              className="absolute top-1/2 -right-4 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-600 shadow-lg hover:text-primary-600 lg:flex"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>

            <div data-testid="carousel-dots" className="mt-8 flex justify-center gap-2">
              {Array.from({ length: pages }, (_unused, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={page === index ? 'true' : undefined}
                  onClick={() => setPage(index)}
                  className={cn(
                    'h-2.5 rounded-full transition-all',
                    page === index ? 'w-8 bg-primary-600' : 'w-2.5 bg-gray-300',
                  )}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
