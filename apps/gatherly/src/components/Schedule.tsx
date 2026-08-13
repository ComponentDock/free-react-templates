import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { schedule } from '../data'

/** Light-background schedule section with four day tabs (Day 01–04) and
 *  per-day entry lists: speaker photo, time, session title, description and
 *  a speaker credit with role (source #schedule-section nav-pills). */
export function Schedule() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="schedule-section" data-testid="schedule" className="bg-light py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-4">
        <p className="section-eyebrow">{schedule.eyebrow}</p>
        <h2 className="section-title">{schedule.heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted">{schedule.intro}</p>

        <div
          role="tablist"
          aria-label="Conference days"
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {schedule.days.map((day, index) => (
            <button
              key={day.day}
              type="button"
              role="tab"
              aria-selected={index === activeDay}
              aria-controls={`day-panel-${index}`}
              onClick={() => setActiveDay(index)}
              className={cn(
                'rounded-[2px] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.1em] transition-colors',
                index === activeDay
                  ? 'bg-brand text-white'
                  : 'bg-white text-ink/70 hover:bg-brand/10 hover:text-brand',
              )}
            >
              <span className="block">{day.day}</span>
              <span className="mt-0.5 block text-[10px] font-normal normal-case tracking-normal text-current opacity-70">
                {day.date}
              </span>
            </button>
          ))}
        </div>

        <div
          id={`day-panel-${activeDay}`}
          role="tabpanel"
          className="mt-10 grid gap-6 lg:grid-cols-3"
        >
          {schedule.days[activeDay]!.entries.map((entry) => (
            <article
              key={entry.title}
              className="flex flex-col gap-4 rounded border border-line bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={entry.image}
                  alt={`${entry.speaker} portrait`}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-brand">
                    {entry.time}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">{entry.speaker}</p>
                </div>
              </div>
              <h3 className="text-lg font-bold leading-snug text-ink">{entry.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted">{entry.description}</p>
              <p className="border-t border-line pt-3 text-xs text-muted">
                — {entry.speaker} <span className="italic">({entry.role})</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
