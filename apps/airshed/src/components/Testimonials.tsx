import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../content'
import { usePerView } from '../lib/perView'
import { Container, Reveal, SectionPill } from './ui'

/**
 * Three quote cards in a real carousel at every width: one per view on a phone
 * with three dots, two at 768 px with two dots, and three at 1024 px and up
 * where there is nowhere to move — so no arrow is rendered at all rather than a
 * disabled one. Autoplay advances every five seconds and pauses on hover.
 */
export function Testimonials() {
  const perView = usePerView()
  const maxIndex = Math.max(0, TESTIMONIALS.items.length - perView)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const current = Math.min(index, maxIndex)

  useEffect(() => {
    if (maxIndex === 0 || paused) {
      return undefined
    }
    const id = setInterval(() => {
      setIndex((value) => (value + 1) % (maxIndex + 1))
    }, 5000)
    return () => clearInterval(id)
  }, [maxIndex, paused])

  const slideWidth = 100 / perView

  return (
    <section
      id="testimonials"
      className="section bg-gray-50 dark:bg-gray-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionPill>{TESTIMONIALS.pill}</SectionPill>
        </Reveal>
        <Reveal className="mx-auto mt-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.9px] text-ink-800 sm:text-4xl dark:text-white">
            {TESTIMONIALS.heading}
          </h2>
        </Reveal>
        <Reveal className="mx-auto mt-3 max-w-3xl text-center">
          <p className="text-lg leading-7 text-ink-500 dark:text-gray-300">{TESTIMONIALS.lede}</p>
        </Reveal>

        <div className="mt-16 overflow-hidden">
          <div
            data-carousel-track
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {TESTIMONIALS.items.map((item) => (
              <div key={item.name} className="shrink-0 px-3" style={{ width: `${slideWidth}%` }}>
                <figure className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-soft dark:bg-gray-800">
                  <div className="flex gap-0.5" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-primary-400 text-primary-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-lg font-medium leading-7 text-ink-800 dark:text-white">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-base font-bold text-primary-700">
                      {item.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-base font-semibold text-ink-800 dark:text-white">
                        {item.name}
                      </span>
                      <span className="block text-sm text-ink-500 dark:text-gray-400">
                        {item.town}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {maxIndex > 0 ? (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => setIndex(Math.max(0, current - 1))}
              disabled={current === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:border-primary-500 hover:text-primary-700 disabled:opacity-40 dark:border-gray-700 dark:text-gray-200"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }, (_, dot) => (
                <button
                  key={dot}
                  type="button"
                  aria-label={`Show review group ${dot + 1}`}
                  aria-current={dot === current ? 'true' : undefined}
                  onClick={() => setIndex(dot)}
                  className={cn(
                    'h-2.5 w-2.5 rounded-full transition-colors',
                    dot === current ? 'bg-primary-600' : 'bg-ink-200 dark:bg-gray-700',
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next review"
              onClick={() => setIndex(Math.min(maxIndex, current + 1))}
              disabled={current === maxIndex}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:border-primary-500 hover:text-primary-700 disabled:opacity-40 dark:border-gray-700 dark:text-gray-200"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
