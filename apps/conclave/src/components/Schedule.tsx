import { useState } from 'react'
import { Clock } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { SCHEDULE_DAYS } from '../data'

/* Schedule section: tabbed (Day 1-4), each tab shows 2-3 schedule cards.
   Each card has a left purple sidebar with speaker photo/name/role,
   and right side with time, title, and description. */

export function Schedule() {
  const [active, setActive] = useState(0)
  const day = SCHEDULE_DAYS[active]!

  return (
    <section id="schedule" className="bg-[#f7f7f7] py-[100px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p
            className="text-sm font-medium uppercase tracking-wider text-[#ea0763]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Schedule
          </p>
          <h2
            className="mt-3 text-3xl font-bold uppercase tracking-wide text-[#242424] md:text-[38px]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Schedule Plan
          </h2>
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
                'border-r border-[#ddd] px-[30px] py-[15px] text-lg font-semibold uppercase tracking-wide transition-colors last:border-r-0',
                i === active
                  ? 'bg-[#3b1d82] text-white'
                  : 'bg-white text-[#797979] hover:text-[#242424]',
              )}
              style={{ fontFamily: 'var(--font-heading)' }}
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
              className="mb-5 flex flex-col overflow-hidden rounded-[10px] border border-[#ddd] bg-white transition-colors hover:border-[#3b1d82] sm:flex-row"
            >
              {/* Purple sidebar with speaker info */}
              <div className="flex w-full flex-col items-center bg-[#3b1d82] p-6 text-center text-white sm:w-[200px]">
                <img
                  src={`https://picsum.photos/seed/conclave-schedule-${session.speaker.toLowerCase().replace(/\s+/g, '-')}/100/100`}
                  alt=""
                  className="h-16 w-16 rounded-full object-cover"
                />
                <h4
                  className="mt-3 text-sm font-bold uppercase tracking-wide"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {session.speaker}
                </h4>
                <p className="mt-1 text-xs text-white/70">{session.role}</p>
              </div>

              {/* Right side with session details */}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 text-sm text-[#ea0763]">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {session.time}
                </div>
                <h3
                  className="mt-3 text-lg font-bold uppercase tracking-wide text-[#242424]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {session.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
