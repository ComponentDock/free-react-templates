import { TriangleAlert } from 'lucide-react'
import type { Night } from '../data'
import { formatTemp } from '../lib/format'
import { WeatherIcon } from './WeatherIcon'

interface NightCardProps {
  readonly night: Night
}

/**
 * The compact indigo panel: the same head and temperature rhythm as the
 * conditions card at 64 px, and one amber strip as its only chrome. Its height
 * follows the warning's wrap, never a fixed box.
 */
export function NightCard({ night }: NightCardProps) {
  return (
    <section
      aria-labelledby="isobar-night"
      className="isobar-night rounded-card bg-[linear-gradient(170deg,#1e1b4b,#312e81)] p-6 text-white shadow-card"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 id="isobar-night" className="m-0 text-[22px] font-bold">
            {night.city}
          </h2>
          <p className="mt-0.5 mb-0 text-[14px] text-muted">{night.when}</p>
        </div>
        <WeatherIcon
          icon={night.icon}
          label={night.iconLabel}
          className="h-16 w-16 flex-none"
        />
      </div>
      <p className="mt-[18px] mb-0 text-[64px] leading-none font-light tracking-[-0.06em]">
        {formatTemp(night.temp)}
        <span aria-hidden="true">°</span>
        <span className="sr-only"> degrees Celsius</span>
      </p>
      <p className="mt-1.5 mb-0 text-[16px] font-medium text-muted">{night.condition}</p>
      <p className="mt-[18px] mb-0 flex items-center gap-2 rounded-note bg-note-bg px-3 py-2.5 text-[13.5px] font-semibold text-note">
        <TriangleAlert aria-hidden="true" className="h-[18px] w-[18px] flex-none" />
        {night.note}
      </p>
    </section>
  )
}
