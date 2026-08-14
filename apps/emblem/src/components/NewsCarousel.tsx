import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { newsItems } from '../data'

const AUTOPLAY_MS = 5000

function getVisible(): number {
  if (window.innerWidth >= 1024) {
    return 3
  }
  if (window.innerWidth >= 640) {
    return 2
  }
  return 1
}

/** Emblem news carousel: tall image cards on a light band, auto-rotating
 *  with prev/next + dots, responsive items 1/2/3 per the reference owl
 *  config, dark overlay caption reveal on hover/focus. */
export function NewsCarousel() {
  const [visible, setVisible] = useState(getVisible)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const onResize = () => {
      const next = getVisible()
      setVisible(next)
      setIndex((current) => Math.min(current, newsItems.length - next))
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const maxIndex = Math.max(0, newsItems.length - visible)

  const go = useCallback(
    (delta: number) => {
      setIndex((current) => {
        const next = current + delta
        if (next < 0) {
          return maxIndex
        }
        if (next > maxIndex) {
          return 0
        }
        return next
      })
    },
    [maxIndex],
  )

  useEffect(() => {
    const id = setInterval(() => go(1), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [go])

  const trackStyle = useMemo(
    () => ({
      transform: `translateX(-${index * (100 / visible)}%)`,
    }),
    [index, visible],
  )

  return (
    <section id="projects" aria-label="News and events" className="bg-light py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <h2 className="text-3xl font-light text-brand lg:text-[2.5rem]">News &amp; Events</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/80">
          Insights from the studio — launches, thinking and the work we are proud of.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-7xl overflow-hidden px-6 lg:px-10">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={trackStyle}
          aria-live="polite"
        >
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="group relative h-[500px] shrink-0 bg-cover bg-center"
              style={{ width: `${100 / visible}%`, backgroundImage: `url(${item.image})` }}
            >
              <div
                className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/70 group-focus-within:bg-black/70"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                <h3 className="text-2xl font-bold text-white">
                  <a href="#blog" className="hover:text-white">
                    {item.title}
                  </a>
                </h3>
                <span className="mt-3 text-sm font-medium uppercase tracking-widest text-white/80">
                  {item.category}
                </span>
                <p className="mt-4 max-w-sm leading-relaxed text-white/90">{item.excerpt}</p>
                <a
                  href="#blog"
                  aria-label={`Read ${item.title}`}
                  className="mt-6 text-white transition-colors hover:text-brand"
                >
                  <ArrowRight className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous news"
          className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg transition-colors hover:bg-brand hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next news"
          className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg transition-colors hover:bg-brand hover:text-white"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        {Array.from({ length: maxIndex + 1 }, (_, dot) => (
          <button
            key={dot}
            type="button"
            onClick={() => setIndex(dot)}
            aria-label={`Go to slide ${dot + 1}`}
            aria-current={dot === index ? 'true' : undefined}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              dot === index ? 'bg-brand' : 'bg-ink/30 hover:bg-ink/50',
            )}
          />
        ))}
      </div>
    </section>
  )
}
