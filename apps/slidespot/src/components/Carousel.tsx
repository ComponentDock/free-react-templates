import { useState, useCallback, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const SLIDES = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/slidespot-1/1920/900',
    heading: 'Define Your Budget',
    phone: '0123 456 78901',
    email: 'email@info.com',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/slidespot-2/1920/900',
    heading: 'Kids Collection',
    phone: '0123 456 78901',
    email: 'email@info.com',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/slidespot-3/1920/900',
    heading: 'Ladies Collection',
    phone: '0123 456 78901',
    email: 'email@info.com',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/slidespot-4/1920/900',
    heading: 'Summer Essentials',
    phone: '0123 456 78901',
    email: 'email@info.com',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
] as const

const INTERVAL_MS = 6000

export function Carousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = SLIDES.length

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + total) % total)
    },
    [total],
  )

  const next = useCallback(() => goTo(current + 1), [goTo, current])
  const prev = useCallback(() => goTo(current - 1), [goTo, current])

  useEffect(() => {
    if (paused) {
      clearInterval(timerRef.current!)
      timerRef.current = null
      return
    }
    timerRef.current = setInterval(next, INTERVAL_MS)
    return () => {
      clearInterval(timerRef.current!)
    }
  }, [paused, next])

  const slide = SLIDES[current]!

  return (
    <section id="carousel" className="relative mx-auto max-w-[1400px] px-4 py-16 sm:px-6 md:py-24">
      <h2 className="mb-8 text-center text-2xl font-semibold text-ink dark:text-white md:text-3xl">
        Featured Collection
      </h2>

      <div className="relative overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-900">
        <div className="flex flex-col md:flex-row">
          {/* Text side */}
          <div className="flex flex-col justify-center bg-surface px-6 py-10 md:order-1 md:w-1/2 md:px-12 lg:px-16 dark:bg-gray-800">
            <h3 className="mb-4 text-4xl font-extrabold uppercase tracking-tight text-ink sm:text-5xl lg:text-6xl dark:text-white">
              {slide.heading}
            </h3>
            <p className="mb-1 text-lg font-medium text-ink-light dark:text-gray-300">
              Call: {slide.phone}
            </p>
            <p className="mb-4 text-lg font-medium text-ink-light dark:text-gray-300">
              Email Address: {slide.email}
            </p>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {slide.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded border-2 border-ink px-5 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-ink"
              >
                Shop the collection
              </button>
              <button
                type="button"
                className="rounded bg-ink px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-ink dark:hover:bg-gray-200"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Image side */}
          <div className="relative h-72 w-full md:order-2 md:h-[500px] md:w-1/2 lg:h-[600px]">
            <img
              src={slide.image}
              alt={slide.heading}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
              loading={current === 0 ? 'eager' : 'lazy'}
            />
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-ink shadow-md transition-colors hover:bg-white dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-700"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-ink shadow-md transition-colors hover:bg-white dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-700"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Pagination dots */}
        <div
          className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                'h-3 w-3 rounded-full transition-all duration-300',
                i === current
                  ? 'bg-brand scale-110'
                  : 'bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
