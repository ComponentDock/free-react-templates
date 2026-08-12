import { useState } from 'react'
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { events } from '../data'

const PER_VIEW = 3

// "Upcoming Events" carousel — 6 cards, 3 per view, with prev/next controls.
// Each card: 360px photo with a purple date badge straddling the bottom edge,
// title and a pin + venue line.
export function Events() {
  const [index, setIndex] = useState(0)
  const maxIndex = Math.max(0, events.length - PER_VIEW)
  const visible = events.slice(index, index + PER_VIEW)

  return (
    <section id="events" className="bg-paper py-[100px]">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center font-display text-[42px] font-bold uppercase text-ink">
          Upcoming Events
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {visible.map((event) => (
            <article key={event.title} className="text-center">
              <div
                className="relative h-[360px] bg-cover bg-center"
                role="img"
                aria-label={event.title}
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className="absolute bottom-[-21px] left-0 w-full text-center">
                  <span className="inline-block bg-brand px-2 pb-[9px] pt-3 text-[15px] text-white">
                    {event.date}
                  </span>
                </div>
              </div>
              <div className="px-2.5 pb-[25px] pt-[45px]">
                <h4 className="font-display text-[26px] font-bold text-ink">{event.title}</h4>
                <p className="mt-2.5 text-muted">
                  <MapPin className="mr-1 inline h-4 w-4 text-brand" />
                  {event.venue}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => setIndex((current) => Math.max(0, current - 1))}
            disabled={index === 0}
            aria-label="Previous events"
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand text-brand transition',
              'hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-30',
            )}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setIndex((current) => Math.min(maxIndex, current + 1))}
            disabled={index === maxIndex}
            aria-label="Next events"
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand text-brand transition',
              'hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-30',
            )}
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
