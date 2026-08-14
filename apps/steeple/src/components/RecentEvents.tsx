import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { EVENTS } from '../data'

export function RecentEvents() {
  const [index, setIndex] = useState(0)
  const pages = EVENTS.length

  const prev = () => setIndex((i) => (i - 1 + pages) % pages)
  const next = () => setIndex((i) => (i + 1) % pages)

  return (
    <section id="events" aria-label="Recent events" className="py-14 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="relative mb-12 text-center text-3xl font-normal text-ink md:text-4xl">
          Recent Events
          <span
            aria-hidden="true"
            className="absolute -bottom-3 left-1/2 h-0.5 w-24 -translate-x-1/2 bg-accent"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-6 left-1/2 h-0.5 w-20 -translate-x-1/2 bg-accent"
          />
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {EVENTS.map((event) => (
                <article key={event.title} className="w-full shrink-0 px-3 md:w-1/3">
                  <div className="relative mb-4 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-48 w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Play aria-hidden="true" className="h-8 w-8 fill-white text-white" />
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-ink">{event.title}</h3>
                  <p className="mb-2 text-sm text-postdate">
                    {event.date} • By {event.author}
                  </p>
                  <p className="text-sm leading-relaxed text-body">{event.excerpt}</p>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous events"
            onClick={prev}
            className="absolute -left-4 top-1/3 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow transition-colors hover:bg-light md:flex"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next events"
            onClick={next}
            className="absolute -right-4 top-1/3 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow transition-colors hover:bg-light md:flex"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {EVENTS.map((event, i) => (
            <button
              key={event.title}
              type="button"
              aria-label={`Go to event ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
              className={cn('h-2 w-2 rounded-full', i === index ? 'bg-primary-600' : 'bg-dot')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
