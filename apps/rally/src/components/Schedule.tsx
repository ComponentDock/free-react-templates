import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { scheduleDays } from '../data'

export function Schedule() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="schedule" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-heading md:text-4xl">
            Event Schedule
          </h2>
          <p className="mt-4 text-muted">
            If you are looking at blank cassettes on the web, you may be very confused at the
            difference in price. You may see some for as low as $.17 each.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Conference days"
          className="mt-12 grid grid-cols-3 overflow-hidden rounded-md bg-[linear-gradient(0deg,#141da2_0%,#9b5cf6_100%)]"
        >
          {scheduleDays.map((day, index) => (
            <button
              key={day.label}
              type="button"
              role="tab"
              id={`day-tab-${index}`}
              aria-selected={activeDay === index}
              aria-controls={`day-panel-${index}`}
              onClick={() => setActiveDay(index)}
              className={cn(
                'px-4 py-4 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors',
                activeDay === index ? 'bg-white/20' : 'hover:bg-white/10',
              )}
            >
              {day.label}
            </button>
          ))}
        </div>

        {scheduleDays.map((day, index) => (
          <div
            key={day.label}
            role="tabpanel"
            id={`day-panel-${index}`}
            aria-labelledby={`day-tab-${index}`}
            className={cn('mt-8', activeDay === index ? 'block' : 'hidden')}
          >
            <ul className="divide-y divide-gray-100">
              {day.talks.map((talk, talkIndex) => (
                <li key={talk.title} className="flex items-center gap-5 py-5">
                  <img
                    src={`https://picsum.photos/seed/rally-sched-${index}-${talkIndex}/96/96`}
                    alt=""
                    aria-hidden="true"
                    className="h-16 w-16 shrink-0 rounded-md object-cover"
                  />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-accent">
                      {talk.time}
                    </p>
                    <h4 className="mt-1 font-display text-lg font-bold text-heading">
                      {talk.title}
                    </h4>
                    <p className="mt-0.5 text-sm text-muted">Speech by: {talk.speaker}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
