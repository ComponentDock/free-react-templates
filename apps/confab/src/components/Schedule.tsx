import { useState } from 'react'
import { Clock, MapPin, User } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { SCHEDULE, type DayKey } from '../data'
import { SectionTitle } from './SectionTitle'

/* Schedule — three centered day tabs switching a dark card of timed session
   rows (time, title, speaker). Each day lists distinct sessions. */
export function Schedule() {
  const [activeDay, setActiveDay] = useState<DayKey>(SCHEDULE.days[0]!.key)

  return (
    <section id="schedule" aria-label="Schedule" className="scroll-mt-20 bg-coal py-[120px]">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle heading="Schedule" />

        <div
          role="tablist"
          aria-label="Conference days"
          className="mb-10 flex justify-center border-b border-white/20"
        >
          {SCHEDULE.days.map((day) => (
            <button
              key={day.key}
              role="tab"
              id={`tab-${day.key}`}
              aria-selected={activeDay === day.key}
              aria-controls={`panel-${day.key}`}
              type="button"
              onClick={() => setActiveDay(day.key)}
              className={cn(
                'border-b-4 px-5 pb-4 pt-5 font-display text-base font-medium text-white transition-colors sm:text-lg',
                activeDay === day.key
                  ? 'border-brand text-white'
                  : 'border-transparent text-mist hover:text-white',
              )}
            >
              {day.label}
            </button>
          ))}
        </div>

        {SCHEDULE.days.map((day) =>
          activeDay === day.key ? (
            <div
              key={day.key}
              role="tabpanel"
              id={`panel-${day.key}`}
              aria-labelledby={`tab-${day.key}`}
              className="bg-card p-8 sm:p-10"
            >
              <ul className="divide-y divide-white/10">
                {SCHEDULE.sessions[day.key].map((session) => (
                  <li
                    key={session.title}
                    className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:gap-8"
                  >
                    <span className="w-28 shrink-0 font-sans text-lg font-medium text-white">
                      {session.time}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-sans text-xl font-medium text-white">{session.title}</h4>
                      <p className="mt-1 flex items-center gap-2 text-mist">
                        <User aria-hidden="true" className="size-4 text-blush" />
                        {session.speaker}
                      </p>
                    </div>
                    <span className="flex items-center gap-2 text-sm uppercase tracking-wide text-mist">
                      <Clock aria-hidden="true" className="size-4 text-blush" />
                      {day.label}
                    </span>
                    <span className="hidden items-center gap-2 text-sm text-mist lg:flex">
                      <MapPin aria-hidden="true" className="size-4 text-blush" />
                      Main Stage
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null,
        )}
      </div>
    </section>
  )
}
