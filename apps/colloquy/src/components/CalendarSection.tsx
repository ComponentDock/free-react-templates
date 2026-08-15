import { CalendarDays } from 'lucide-react'
import { calendarDays, calendarHours, calendarSpeaker } from '../data'

export function CalendarSection() {
  return (
    <section id="events-section" className="bg-calendar px-6 py-24 lg:px-[141px] lg:py-[115px]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {calendarDays.map((day) => (
            <div key={day.label}>
              <h2 className="flex items-center gap-3 text-lg font-medium uppercase tracking-wide text-ink">
                <CalendarDays className="h-6 w-6 text-ink/70" aria-hidden="true" />
                {day.label}
              </h2>
              <ul className="mt-14 space-y-10">
                {day.events.map((event) => (
                  <li key={`${day.label}-${event.time}`} className="flex items-start gap-6">
                    <div className="w-24 shrink-0">
                      <p className="text-3xl font-medium leading-none text-ink">{event.time}</p>
                      <p className="mt-2 text-sm font-medium text-ink/80">{event.venue}</p>
                    </div>
                    <CalendarDays
                      className="mt-1 h-6 w-6 shrink-0 text-ink/70"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-lg font-medium text-ink">{event.title}</p>
                      <p className="mt-1 text-base text-meta">{calendarHours}</p>
                      <p className="mt-1 text-sm text-meta">{calendarSpeaker}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
