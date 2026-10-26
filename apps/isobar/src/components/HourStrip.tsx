import type { Hour } from '../data'
import { formatTemp } from '../lib/format'
import { WeatherIcon } from './WeatherIcon'

interface HourStripProps {
  readonly hours: readonly Hour[]
}

/** Five equal cells under a translucent hairline; no hover, no controls. */
export function HourStrip({ hours }: HourStripProps) {
  return (
    <ol
      aria-label="Next hours"
      className="grid grid-cols-5 gap-1.5 border-t border-white/25 pt-4 text-center"
    >
      {hours.map((hour) => (
        <li key={hour.time} className="flex flex-col items-center gap-1 text-[13px]">
          <span className="text-muted">{hour.time}</span>
          <WeatherIcon icon={hour.icon} label={hour.iconLabel} className="h-[34px] w-[34px]" />
          <strong className="text-[15px] font-semibold">{formatTemp(hour.temp)}°</strong>
        </li>
      ))}
    </ol>
  )
}
