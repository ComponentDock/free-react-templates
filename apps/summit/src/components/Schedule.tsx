import { useState } from 'react'
import { Clock, Download, MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { PILL, SCHEDULE_DAYS } from '../data'

/* Schedule recreated from the source's our-schedule area: three day tabs
   (Monday/Tuesday/Wednesday) switching four bordered session cards each,
   with a "Download Schedule (PDF)" pill below. */

export function Schedule() {
  const [active, setActive] = useState(0)
  const day = SCHEDULE_DAYS[active]!

  return (
    <section id="schedule" className="bg-navy py-[100px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-brand">Our Timetable</p>
          <h4 className="mt-3 text-3xl font-bold uppercase tracking-wide text-white md:text-[38px]">
            Schedule Plan
          </h4>
        </div>

        <div
          role="tablist"
          aria-label="Schedule days"
          className="mt-12 flex flex-wrap justify-center"
        >
          {SCHEDULE_DAYS.map((item, i) => (
            <button
              key={item.label}
              type="button"
              role="tab"
              id={`schedule-tab-${i}`}
              aria-selected={i === active}
              aria-controls="schedule-panel"
              onClick={() => setActive(i)}
              className={cn(
                'border-r border-[#4c4f8d] px-[30px] py-[15px] text-lg font-semibold uppercase tracking-wide transition-colors last:border-r-0',
                i === active ? 'bg-tab-active text-white' : 'bg-tab text-muted hover:text-white',
              )}
            >
              {item.label} <span className="ml-1 text-sm font-medium">{item.date}</span>
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id="schedule-panel"
          aria-labelledby={`schedule-tab-${active}`}
          className="mx-auto mt-10 max-w-5xl"
        >
          {day.sessions.map((session) => (
            <article
              key={session.title}
              className="mb-5 flex flex-col gap-5 rounded-[10px] border border-line p-[25px] transition-colors hover:border-brand sm:flex-row sm:items-center"
            >
              <img
                src={`https://picsum.photos/seed/summit-session-${session.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')}/90/90`}
                alt=""
                className="h-[90px] w-[90px] shrink-0 rounded object-cover"
              />
              <div className="min-w-0 flex-1">
                <h5 className="text-xl font-semibold text-white">{session.title}</h5>
                <p className="mt-1 text-muted">
                  by <span className="font-medium text-white">{session.speaker}</span> /{' '}
                  {session.role}
                </p>
                <p className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-white">
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand" aria-hidden="true" />
                    {session.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                    {session.place}
                  </span>
                </p>
              </div>
              <a
                href="#schedule"
                className="shrink-0 text-sm font-medium uppercase tracking-wider text-brand transition-colors hover:text-white"
              >
                View More
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#schedule" className={PILL}>
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Schedule (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}
