import type { Now } from '../data'
import { formatTemp } from '../lib/format'
import { DetailTiles } from './DetailTiles'
import { HourStrip } from './HourStrip'
import { WeatherIcon } from './WeatherIcon'

interface NowCardProps {
  readonly now: Now
}

/**
 * The tall card. `overflow: hidden` is load-bearing: the 108 px glyph hangs
 * 10 px above the 24 px padding, so only the card's radius may clip it. The
 * sun turns once every 30 s and is the page's only animation.
 */
export function NowCard({ now }: NowCardProps) {
  return (
    <section
      aria-labelledby="isobar-city"
      className="isobar-now overflow-hidden rounded-card bg-[linear-gradient(160deg,#1d4ed8_0%,#2563eb_45%,#0e7490_100%)] p-6 text-white shadow-card"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 id="isobar-city" className="m-0 text-[22px] font-bold">
            {now.city}
          </h2>
          <p className="mt-0.5 mb-0 text-[14px] text-muted">{now.when}</p>
        </div>
        <WeatherIcon
          icon={now.icon}
          label={now.iconLabel}
          spin
          className="-mt-2.5 -mr-1.5 h-[108px] w-[108px] flex-none"
        />
      </div>
      <p className="isobar-temp">
        {formatTemp(now.temp)}
        <span aria-hidden="true">°</span>
        <span className="sr-only"> degrees Celsius</span>
      </p>
      <p className="mt-1.5 mb-0 text-[16px] font-medium text-muted">{now.condition}</p>
      <DetailTiles details={now.details} />
      <HourStrip hours={now.hours} />
    </section>
  )
}
