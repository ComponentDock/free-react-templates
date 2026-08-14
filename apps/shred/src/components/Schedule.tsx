import { useState } from 'react'
import { SCHEDULE } from '../data'
import { cn } from '@free-react-templates/ui'

/* Training Schedule — light-pink #ffdddd section: seven day tabs on the
   left and the selected day's coach cards (120px circular photo, coral
   time, class title, description, trainer attribution) on the right. */
export function Schedule() {
  const [active, setActive] = useState(0)
  const day = SCHEDULE[active]!

  return (
    <section id="schedule-section" aria-label="Training Schedule" className="bg-blush py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[3px] text-brand">
            Schedule
          </span>
          <h2 className="mt-2 text-4xl font-semibold text-black">Training Schedule</h2>
          <p className="mt-4 text-mist">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <nav
            role="tablist"
            aria-label="Schedule days"
            className="flex flex-col gap-2 lg:col-span-1"
          >
            {SCHEDULE.map((item, i) => {
              const selected = i === active
              return (
                <button
                  key={item.day}
                  role="tab"
                  id={`day-tab-${i}`}
                  aria-selected={selected}
                  aria-controls={`day-panel-${i}`}
                  onClick={() => setActive(i)}
                  className={cn(
                    'bg-white px-7 py-6 text-left transition-colors hover:bg-white/80',
                    selected && 'ring-2 ring-brand',
                  )}
                >
                  <span className="block text-[22px] font-semibold text-black">{item.day}</span>{' '}
                  <span className="block text-sm text-mist">{item.program}</span>
                </button>
              )
            })}
          </nav>

          <div
            id={`day-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`day-tab-${active}`}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            {day.rows.map((row) => (
              <article key={row.title} className="flex flex-col gap-6 bg-white p-8 sm:flex-row">
                <img
                  src={row.photo}
                  alt={`${row.coach} photo`}
                  className="h-24 w-24 shrink-0 rounded-full object-cover object-top"
                />
                <div>
                  <span className="font-bold text-brand">{row.time}</span>
                  <h3 className="mt-1 text-2xl font-semibold text-black">{row.title}</h3>
                  <p className="mt-3 text-mist">{row.text}</p>
                  <p className="mt-3 text-sm font-semibold text-black">
                    — {row.coach}, {row.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
