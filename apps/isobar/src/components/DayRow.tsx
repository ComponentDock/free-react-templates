import type { Day } from '../data'
import { formatTemp } from '../lib/format'
import { RangeBar } from './RangeBar'
import { WeatherIcon } from './WeatherIcon'

interface DayRowProps {
  readonly day: Day
}

/**
 * One forecast row: 56 px label, 40 px icon column, a right-aligned low, the
 * flexible bar and a 34 px high. Every row keeps its hairline except the last.
 */
export function DayRow({ day }: DayRowProps) {
  return (
    <li className="grid grid-cols-[56px_40px_34px_1fr_34px] items-center gap-2.5 border-b border-rule py-[11px] last:border-b-0">
      <span className="font-semibold">{day.label}</span>
      <WeatherIcon icon={day.icon} label={day.iconLabel} className="h-9 w-9" />
      <span className="text-right text-muted">{formatTemp(day.lo)}°</span>
      <RangeBar lo={day.lo} hi={day.hi} />
      <span className="font-semibold">{formatTemp(day.hi)}°</span>
    </li>
  )
}
