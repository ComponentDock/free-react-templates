import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { CHROME, TESTIMONIALS } from '../content'
import { prefersReducedMotion } from '../lib/motion'
import { usePerView } from '../lib/usePerView'
import { Reveal } from './Reveal'
import { Container, Stars } from './ui'

/** 5 s per move. */
const AUTOPLAY_MS = 5000

/**
 * Three reviews in a 3 / 2 / 1 carousel. With three slides and three in view
 * there is nothing to page, so neither arrows nor dots are rendered at desktop
 * — that is the design's own behaviour. The page index is clamped during
 * render, so a viewport that widens under a paged carousel shows page one
 * again without an effect.
 */
export function Testimonials() {
  const perView = usePerView()
  const reduced = prefersReducedMotion()
  const [requested, setRequested] = useState(0)
  const [paused, setPaused] = useState(false)

  const maxIndex = Math.max(0, TESTIMONIALS.items.length - perView)
  const index = Math.min(requested, maxIndex)

  useEffect(() => {
    if (reduced || paused || maxIndex === 0) {
      return undefined
    }
    const id = setInterval(() => setRequested(index >= maxIndex ? 0 : index + 1), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [reduced, paused, maxIndex, index])

  const goTo = (next: number) => setRequested(Math.min(maxIndex, Math.max(0, next)))

  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-950">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900 dark:text-primary-100">
              {TESTIMONIALS.badge}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl dark:text-white">
              {TESTIMONIALS.heading}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-lg leading-[1.625] text-ink-500 dark:text-gray-300">
              {TESTIMONIALS.lede}
            </p>
          </Reveal>
        </div>

        <div
          data-carousel
          data-index={index}
          className="relative mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {maxIndex > 0 && (
            <button
              type="button"
              aria-label={CHROME.previous}
              onClick={() => goTo(index - 1)}
              className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-ink-700 shadow-lg dark:bg-gray-800 dark:text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
          )}
          {maxIndex > 0 && (
            <button
              type="button"
              aria-label={CHROME.next}
              onClick={() => goTo(index + 1)}
              className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-ink-700 shadow-lg dark:bg-gray-800 dark:text-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          )}

          <div className="overflow-hidden">
            <div
              data-carousel-track
              className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
            >
              {TESTIMONIALS.items.map((item, position) => (
                <div
                  key={item.name}
                  data-carousel-slide
                  className="shrink-0 px-3"
                  style={{ width: `${100 / perView}%` }}
                >
                  <Reveal delay={(position + 1) * 100} className="h-full">
                    <figure className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-soft dark:bg-gray-800">
                      <Stars tone="primary" size="md" label={TESTIMONIALS.starsLabel} />
                      <blockquote className="mt-4 text-lg font-medium leading-7 text-ink-800 dark:text-white">
                        {item.quote}
                      </blockquote>
                      <figcaption className="mt-auto flex items-center gap-4 pt-6">
                        <span
                          aria-hidden="true"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-semibold text-primary-600 dark:bg-primary-900 dark:text-primary-100"
                        >
                          {item.initial}
                        </span>
                        <span>
                          <span className="block text-base font-semibold text-ink-800 dark:text-white">
                            {item.name}
                          </span>
                          <span className="block text-sm leading-6 text-gray-600 dark:text-gray-400">
                            {item.town}
                          </span>
                        </span>
                      </figcaption>
                    </figure>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>

          {maxIndex > 0 && (
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }, (_, page) => (
                <button
                  key={page}
                  type="button"
                  aria-label={`Go to slide ${page + 1}`}
                  aria-current={page === index ? 'true' : undefined}
                  onClick={() => goTo(page)}
                  className={cn(
                    'h-2.5 rounded-full transition-all',
                    page === index ? 'w-8 bg-primary-600' : 'w-2.5 bg-gray-300',
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
