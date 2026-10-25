import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS, TESTIMONIALS_COPY } from '../content'
import { useReducedMotion } from '../lib/motion'
import { usePerView } from '../lib/usePerView'
import { BandHeading, Container, Stars } from './ui'

/**
 * Three reviews. At 1440 all three are visible, so there are no arrows and no
 * dot row — the reference hides both when there is nowhere to go. Below `lg`
 * it becomes a real carousel with 5 s autoplay that pauses on hover.
 */
export function Testimonials() {
  const perView = usePerView()
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const maxIndex = Math.max(0, TESTIMONIALS.length - perView)
  const current = Math.min(index, maxIndex)

  useEffect(() => {
    if (reduced || paused || maxIndex === 0) {
      return undefined
    }
    const id = setInterval(() => {
      setIndex((previous) => (previous >= maxIndex ? 0 : previous + 1))
    }, 5000)
    return () => clearInterval(id)
  }, [maxIndex, paused, reduced])

  const go = (next: number) => setIndex(Math.max(0, Math.min(next, maxIndex)))

  return (
    <section id="testimonials" className="section bg-gray-50 lg:py-32 dark:bg-gray-900">
      <Container>
        <BandHeading
          pill={TESTIMONIALS_COPY.pill}
          heading={TESTIMONIALS_COPY.heading}
          lede={TESTIMONIALS_COPY.lede}
          centered
        />

        <div
          className="mt-14 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <ul
            data-carousel-track
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${(current * 100) / perView}%)` }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <li
                key={testimonial.name}
                data-carousel-slide
                className="shrink-0 px-3"
                style={{ flexBasis: `${100 / perView}%` }}
              >
                <figure className="flex h-full min-h-[280px] flex-col rounded-2xl bg-white p-8 shadow-soft dark:bg-gray-800">
                  <Stars />
                  <blockquote className="mt-4 flex-1 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700"
                    >
                      {testimonial.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </span>
                      <span className="block text-xs text-gray-500 dark:text-gray-400">
                        {testimonial.area}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        {maxIndex > 0 ? (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label={TESTIMONIALS_COPY.previous}
              onClick={() => go(current - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-colors hover:text-primary-700 dark:bg-gray-800 dark:text-gray-200"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }, (_, dot) => (
                <button
                  key={dot}
                  type="button"
                  aria-label={`${TESTIMONIALS_COPY.goTo} ${dot + 1}`}
                  aria-current={dot === current ? 'true' : undefined}
                  onClick={() => go(dot)}
                  className={cn(
                    'h-2.5 rounded-full transition-all',
                    dot === current ? 'w-8 bg-primary-600' : 'w-2.5 bg-gray-300 dark:bg-gray-600',
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label={TESTIMONIALS_COPY.next}
              onClick={() => go(current + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-colors hover:text-primary-700 dark:bg-gray-800 dark:text-gray-200"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
