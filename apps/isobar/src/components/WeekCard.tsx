import { Calendar } from 'lucide-react'
import type { Day } from '../data'
import { DayRow } from './DayRow'

interface WeekCardProps {
  readonly days: readonly Day[]
}

/**
 * The white forecast panel. Its height never changes — five 59 px rows plus the
 * heading — whatever the column count is, which is why it is the row's anchor.
 */
export function WeekCard({ days }: WeekCardProps) {
  return (
    <section
      aria-labelledby="isobar-week"
      className="rounded-card bg-card p-6 text-ink shadow-card"
    >
      <h2
        id="isobar-week"
        className="mb-2 flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] text-muted uppercase"
      >
        <Calendar aria-hidden="true" className="h-4 w-4" />
        5-day forecast
      </h2>
      <ul className="m-0 list-none p-0">
        {days.map((day) => (
          <DayRow key={day.label} day={day} />
        ))}
      </ul>
    </section>
  )
}
