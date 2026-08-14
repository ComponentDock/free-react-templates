import { useState } from 'react'
import { SCHEDULE } from '../data'
import { cn } from '@free-react-templates/ui'

/* Schedule — "Training Schedule" heading with seven vertical day tabs;
   each panel lists coach rows (round photo, time range, class title,
   paragraph, coach name + position). */
export function ScheduleSection() {
  const [active, setActive] = useState(0)
  const day = SCHEDULE[active]!

  return (
    <section id="schedule-section" aria-label="Training schedule" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[3px] text-brand">
            Schedule
          </span>
          <h2 className="mt-2 text-4xl font-bold text-black">Training Schedule</h2>
          <p className="mt-4 text-black/70">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          <div
            role="tablist"
            aria-label="Days"
            aria-orientation="vertical"
            className="flex flex-col gap-1"
          >
            {SCHEDULE.map((item, i) => (
              <button
                key={item.day}
                type="button"
                role="tab"
                id={`day-tab-${i}`}
                aria-selected={i === active}
                aria-controls={`day-panel-${i}`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                className={cn(
                  'flex items-center justify-between rounded-full px-5 py-3 text-left transition-colors',
                  i === active ? 'bg-brand text-white' : 'bg-light text-black hover:bg-brand/10',
                )}
              >
                <span className="text-[14px] font-bold">{item.day}</span>
                <span className="text-[12px] opacity-80">{item.program}</span>
              </button>
            ))}
          </div>

          <div className="md:col-span-2">
            <div
              role="tabpanel"
              id={`day-panel-${active}`}
              aria-labelledby={`day-tab-${active}`}
              className="flex flex-col gap-6"
            >
              {day.rows.map((row) => (
                <div
                  key={row.title}
                  className="flex flex-col gap-4 rounded-lg bg-light p-6 sm:flex-row sm:items-center"
                >
                  <img
                    src={row.photo}
                    alt=""
                    className="h-[120px] w-[120px] shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <span className="text-[12px] font-bold uppercase tracking-wide text-brand">
                      {row.time}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-black">{row.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-black/60">{row.text}</p>
                    <p className="mt-3 text-sm">
                      <span className="font-bold text-black">— {row.coach}</span>{' '}
                      <span className="text-black/50">{row.position}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
