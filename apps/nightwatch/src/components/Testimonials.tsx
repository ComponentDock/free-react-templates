import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../content'
import { prefersReducedMotion } from '../lib/scroll'
import { containerClass } from './ui'

export const AUTOPLAY_MS = 5000

/** 3 / 2 / 1 cards per view — the reference's breakpoints, not a guess. */
export function perView(width: number): number {
  if (width >= 1024) return 3
  if (width >= 640) return 2
  return 1
}

export function Testimonials() {
  const [width, setWidth] = useState(() => window.innerWidth)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const view = perView(width)
  const maxIndex = Math.max(0, TESTIMONIALS.cards.length - view)
  const active = Math.min(index, maxIndex)
  const reduced = prefersReducedMotion()

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (maxIndex === 0 || paused || reduced) {
      return
    }
    const id = setInterval(() => setIndex((current) => (current + 1) % (maxIndex + 1)), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [maxIndex, paused, reduced])

  const go = (next: number) => setIndex((next + maxIndex + 1) % (maxIndex + 1))

  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className={containerClass}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm leading-5 font-medium text-primary-700">
            {TESTIMONIALS.pill}
          </p>
          <h2 className="mt-4 text-[30px] leading-[34px] font-bold tracking-[-0.9px] text-gray-900 sm:text-4xl sm:leading-10 dark:text-white">
            {TESTIMONIALS.title}
          </h2>
          <p className="mt-3 text-base leading-6 text-gray-600 dark:text-gray-400">{TESTIMONIALS.note}</p>
        </div>

        <div
          aria-roledescription="carousel"
          aria-label="Client references"
          className="mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <ul
              className="flex transition-transform duration-500 motion-reduce:transition-none"
              style={{ transform: `translateX(-${active * (100 / view)}%)` }}
            >
              {TESTIMONIALS.cards.map((card) => (
                <li
                  key={card.name}
                  data-testid="testimonial-card"
                  className="shrink-0 px-3"
                  style={{ width: `${100 / view}%` }}
                >
                  <figure className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-soft dark:bg-gray-950">
                    <div className="flex gap-1 text-primary-400">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Star key={star} aria-hidden="true" className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-5 flex-1 text-lg leading-7 font-medium text-gray-900 dark:text-gray-100">
                      {`“${card.quote}”`}
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-100 text-base font-bold text-primary-600">
                        {card.initial}
                      </span>
                      <span>
                        <span className="block text-base leading-6 font-semibold text-gray-900 dark:text-white">
                          {card.name}
                        </span>
                        <span className="block text-sm leading-5 text-gray-600 dark:text-gray-400">
                          {card.role}
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
                aria-label="Previous reference"
                onClick={() => go(active - 1)}
                className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink-700 shadow-soft dark:bg-gray-950 dark:text-gray-200"
              >
                <ChevronLeft aria-hidden="true" className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: maxIndex + 1 }, (_, dot) => (
                  <button
                    key={dot}
                    type="button"
                    aria-label={`Go to reference ${dot + 1}`}
                    onClick={() => setIndex(dot)}
                    className={cn(
                      'h-2.5 rounded-full transition-all',
                      dot === active ? 'w-8 bg-primary-600' : 'w-2.5 bg-gray-300',
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next reference"
                onClick={() => go(active + 1)}
                className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink-700 shadow-soft dark:bg-gray-950 dark:text-gray-200"
              >
                <ChevronRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
