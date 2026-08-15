import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { scheduleDays } from '../data'

export function Schedule() {
  const [active, setActive] = useState(0)
  const day = scheduleDays[active]!

  return (
    <section id="schedule" aria-label="Event schedule" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-medium text-heading md:text-[46px]">Event Schedule</h2>
        </div>
        <div
          role="tablist"
          aria-label="Schedule days"
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {scheduleDays.map((d, i) => (
            <button
              key={d.tab}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls={`day-panel-${i}`}
              onClick={() => setActive(i)}
              className={cn(
                'rounded-full border-2 px-8 py-3 text-base font-medium capitalize transition-colors',
                i === active
                  ? 'border-rainbow-3 bg-rainbow-3 text-white'
                  : 'border-gray-300 bg-white text-heading hover:border-rainbow-3 hover:text-rainbow-3',
              )}
            >
              {d.tab}
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          id={`day-panel-${active}`}
          aria-labelledby={`day-tab-${active}`}
          className="mx-auto max-w-3xl"
        >
          <ul aria-label={`${day.tab} talks`} className="space-y-6">
            {day.talks.map((talk) => (
              <li
                key={talk.speakerName + talk.time}
                className="flex items-center gap-5 rounded-lg border border-faq-border bg-white p-5"
              >
                <img
                  src={talk.image}
                  alt={`${talk.speakerName} portrait`}
                  className="h-16 w-16 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <div
                    aria-hidden="true"
                    className="mb-2 h-0.5 w-16"
                    style={{
                      background:
                        'linear-gradient(to right, #ff9600 0%, #fe531e 26%, #c022a5 57%, #1bb8f9 100%)',
                    }}
                  />
                  <p className="text-sm font-medium text-rainbow-3">{talk.time}</p>
                  <h3 className="text-lg font-medium text-heading">{talk.speakerName}</h3>
                  <p className="mt-1 text-sm leading-6 text-body">{talk.blurb}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
