import { cn } from '@free-react-templates/ui'
import { scheduleDays, scheduleRows } from '../data'

/* Weekly fitness schedule: blue header row, red time column and zebra
   shading on the odd day columns (Mon/Wed/Fri/Sun). */
export function Schedules() {
  return (
    <section id="schedules" aria-label="Fitness schedules" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-[13px] font-bold uppercase tracking-wide text-primary">
            Schedules
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-heading lg:text-[34px]">
            Fitness Schedules
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-center">
            <thead>
              <tr className="bg-blue">
                <th scope="col" className="px-6 py-7 text-sm font-bold text-white">
                  Time
                </th>
                {scheduleDays.map((day) => (
                  <th key={day} scope="col" className="px-6 py-7 text-sm font-bold text-white">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleRows.map((row) => (
                <tr key={row.time}>
                  <th scope="row" className="bg-primary px-6 py-7 text-sm font-bold text-white">
                    {row.time}
                  </th>
                  {row.classes.map((className, index) => (
                    <td
                      key={`${row.time}-${index}`}
                      className={cn(
                        'border-b-2 border-[#f8f9fd] px-6 py-7 text-sm text-neutral-700',
                        index % 2 === 0 && 'bg-zebra',
                      )}
                    >
                      {className}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
