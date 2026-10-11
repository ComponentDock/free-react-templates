import { useState } from 'react'
import { CalendarDays, ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import { SectionTitle } from './SectionTitle'

interface EventCard {
  name: string
  seed: string
  price: string
  date: string
  duration: string
}

const EVENTS: readonly EventCard[] = [
  {
    name: 'Mega Turkey',
    seed: 'wanderbug-event-1',
    price: '$1200',
    date: '12 Jan - 18 Jan',
    duration: '5 Days',
  },
  {
    name: 'Finlande',
    seed: 'wanderbug-event-2',
    price: '$1200',
    date: '12 Jan - 18 Jan',
    duration: '5 Days',
  },
  {
    name: 'Spitzberg',
    seed: 'wanderbug-event-3',
    price: '$1200',
    date: '12 Jan - 18 Jan',
    duration: '5 Days',
  },
  {
    name: 'Mega Turkey',
    seed: 'wanderbug-event-4',
    price: '$1200',
    date: '12 Jan - 18 Jan',
    duration: '5 Days',
  },
]

const VISIBLE = 3

/* Upcoming events: a three-up card row that steps one card at a time through
   React state, so the same markup works as a carousel on narrow screens. */
export function Events() {
  const [slide, setSlide] = useState(0)
  const lastSlide = Math.max(EVENTS.length - VISIBLE, 0)

  return (
    <section id="events" className="bg-white pt-[120px] pb-[100px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <SectionTitle eyebrow="Check our best promotional tour" title="Upcoming Events" />

        <div className="overflow-hidden">
          <ul
            data-testid="events-track"
            style={{ transform: `translateX(-${slide * (100 / VISIBLE)}%)` }}
            className="flex gap-[30px] transition-transform duration-500"
          >
            {EVENTS.map((event) => (
              <li
                key={event.seed}
                className="w-full shrink-0 sm:w-[calc((100%-30px)/2)] lg:w-[calc((100%-60px)/3)]"
              >
                <article className="h-full overflow-hidden rounded-[5px] bg-white shadow-[0_10px_15px_rgba(0,9,94,0.06)]">
                  <img
                    src={`https://picsum.photos/seed/${event.seed}/600/420`}
                    alt={`${event.name} tour`}
                    loading="lazy"
                    className="h-[220px] w-full rounded-t-[5px] object-cover"
                  />
                  <div className="px-[23px] pt-[30px] pb-[30px]">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-[22px] font-bold text-navy">
                        <a href="#events" className="transition-colors hover:text-periwinkle">
                          {event.name}
                        </a>
                      </h3>
                      <span className="text-[22px] font-bold text-periwinkle">{event.price}</span>
                    </div>
                    <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] font-medium text-navy">
                      <a
                        href="#events"
                        className="inline-flex items-center gap-1 transition-colors hover:text-periwinkle"
                      >
                        <CalendarDays className="h-4 w-4 text-periwinkle" aria-hidden="true" />
                        {event.date}
                      </a>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-4 w-4 text-periwinkle" aria-hidden="true" />
                        {event.duration}
                      </span>
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            aria-label="Previous events"
            onClick={() => setSlide((current) => Math.max(current - 1, 0))}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-periwinkle text-periwinkle transition-colors hover:bg-periwinkle hover:text-white focus-visible:ring-2 focus-visible:ring-periwinkle"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next events"
            onClick={() => setSlide((current) => Math.min(current + 1, lastSlide))}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-periwinkle text-periwinkle transition-colors hover:bg-periwinkle hover:text-white focus-visible:ring-2 focus-visible:ring-periwinkle"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
