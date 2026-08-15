import { useState } from 'react'
import {
  scheduleDays,
  scheduleEntries,
  scheduleEyebrow,
  scheduleLead,
  scheduleTitle,
} from '../data'
import { cn } from '@free-react-templates/ui'

export function Schedule() {
  const [active, setActive] = useState(0)
  const day = scheduleDays[active]

  return (
    <section aria-label={scheduleTitle} className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">
            {scheduleEyebrow}
          </span>
          <h2 className="mt-2 text-4xl font-black text-ink md:text-[2.5rem]">{scheduleTitle}</h2>
          <p className="mt-4 text-muted">{scheduleLead}</p>
        </div>

        {/* Single-letter day tabs; active tab gets a 2px red top border. */}
        <div
          role="tablist"
          aria-label={scheduleTitle}
          className="mt-12 flex flex-wrap justify-center gap-1"
        >
          {scheduleDays.map((item, index) => (
            <button
              key={`${item.tab}-${index}`}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-controls="schedule-panel"
              id={`schedule-tab-${index}`}
              onClick={() => setActive(index)}
              className={cn(
                'border-t-2 px-5 py-3 text-sm font-bold text-ink transition-colors hover:text-brand',
                index === active ? 'border-brand text-brand' : 'border-transparent',
              )}
            >
              {item.tab}
            </button>
          ))}
        </div>

        <div
          id="schedule-panel"
          role="tabpanel"
          aria-labelledby={`schedule-tab-${active}`}
          className="mt-10"
        >
          <ul className="grid gap-6 md:grid-cols-2">
            {scheduleEntries.map((entry) => (
              <li
                key={entry.title}
                className="flex items-center gap-5 border border-[#edf0f5] p-5 transition-colors hover:bg-brand hover:text-white"
              >
                <img
                  src={entry.image}
                  alt=""
                  className="h-16 w-16 shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-brand transition-colors group-hover:text-white">
                    {day?.name} {entry.time}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-black transition-colors hover:text-brand">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#aeaeae] transition-colors">
                    {entry.instructor}, {entry.duration}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
