import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../content'
import { maxIndexFor, perViewFor, usePrefersReducedMotion } from '../lib/motion'
import { Reveal, Stars, containerClass } from './ui'

/** 3 / 2 / 1 across, read from the viewport and kept current on resize. */
function usePerView(): number {
  const [perView, setPerView] = useState(() => perViewFor(window.innerWidth))

  useEffect(() => {
    const update = () => setPerView(perViewFor(window.innerWidth))
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return perView
}

/**
 * A static three-up row at `lg` — the design renders no dots and no arrows
 * there, and a recreation must not "fix" that. Below 1024 it becomes a real
 * carousel: two-up at 768, one-up at 390, five seconds a step.
 */
export function Testimonials() {
  const perView = usePerView()
  const maxIndex = maxIndexFor(testimonials.items.length, perView)
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const clamp = Math.min(index, maxIndex)

  useEffect(() => {
    if (reduced || paused || maxIndex === 0) {
      return
    }
    const timer = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1))
    }, 5000)
    return () => window.clearInterval(timer)
  }, [reduced, paused, maxIndex])

  const go = (direction: 1 | -1) => {
    setIndex((current) => {
      const next = current + direction
      if (next < 0) {
        return maxIndex
      }
      return next > maxIndex ? 0 : next
    })
  }

  return (
    <section id="testimonials" className="scroll-mt-20 bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className={containerClass}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm leading-5 font-medium text-primary-700 dark:bg-primary-900/40 dark:text-primary-200">
            {testimonials.pill}
          </span>
          <h2 className="mt-4 text-3xl leading-9 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 dark:text-white">
            {testimonials.title}
          </h2>
          <p className="mt-3 text-lg leading-7 text-gray-600 dark:text-gray-400">{testimonials.sub}</p>
        </div>

        <div
          data-carousel=""
          className="relative mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              data-carousel-track=""
              className="flex transition-transform duration-500 motion-reduce:transition-none"
              style={{ transform: `translateX(-${clamp * (100 / perView)}%)` }}
            >
              {testimonials.items.map((item) => (
                <div
                  key={item.name}
                  data-carousel-slide=""
                  className="flex w-full flex-shrink-0 px-3 sm:w-1/2 lg:w-1/3"
                >
                  <Reveal className="flex w-full">
                    <figure className="flex h-full w-full flex-col rounded-2xl bg-white p-8 shadow-soft dark:bg-gray-950">
                      <Stars className="text-primary-400" />
                      <blockquote className="mt-4 flex-1 text-lg leading-7 font-medium text-gray-900 dark:text-gray-100">
                        “{item.quote}”
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="grid h-12 w-12 place-items-center rounded-full bg-primary-100 text-base font-bold text-primary-600"
                        >
                          {item.initial}
                        </span>
                        <span>
                          <span className="block text-base leading-6 font-semibold text-gray-900 dark:text-gray-100">
                            {item.name}
                          </span>
                          <span className="block text-sm leading-5 text-gray-600 dark:text-gray-400">
                            {item.area}
                          </span>
                        </span>
                      </figcaption>
                    </figure>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>

          {maxIndex > 0 ? (
            <>
              <button
                type="button"
                data-carousel-prev=""
                aria-label="Previous review"
                onClick={() => go(-1)}
                className="absolute top-1/2 -left-1 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white text-gray-700 shadow-lg dark:bg-gray-950 dark:text-gray-200"
              >
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                data-carousel-next=""
                aria-label="Next review"
                onClick={() => go(1)}
                className="absolute top-1/2 -right-1 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white text-gray-700 shadow-lg dark:bg-gray-950 dark:text-gray-200"
              >
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
              <div data-carousel-dots="" className="mt-8 flex justify-center gap-2">
                {Array.from({ length: maxIndex + 1 }, (_, dot) => (
                  <button
                    key={dot}
                    type="button"
                    aria-label={`Show review ${dot + 1}`}
                    aria-current={dot === clamp ? 'true' : undefined}
                    onClick={() => setIndex(dot)}
                    className={cn(
                      'rounded-full transition-all',
                      dot === clamp
                        ? 'h-2.5 w-8 bg-primary-600'
                        : 'my-[7px] h-2.5 w-2.5 bg-gray-300 dark:bg-gray-600',
                    )}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  )
}
