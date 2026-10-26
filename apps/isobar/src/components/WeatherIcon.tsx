import { cn } from '@free-react-templates/ui'
import type { IconKey } from '../data'

interface WeatherIconProps {
  readonly icon: IconKey
  /** The condition name; every glyph is a labelled image on this page. */
  readonly label: string
  /** Sizing utilities — the row uses 34, 36, 64 and 108 px. */
  readonly className?: string
  /** The conditions card's sun is the page's only moving part. */
  readonly spin?: boolean
}

/**
 * Six weather shapes, drawn to the reference's own geometry at 64 units: a sun
 * disc with eight rays, the same disc behind a cloud, a cloud, rain, a bolt and
 * snow. One component so a glyph can never drift between the three cards.
 */
export function WeatherIcon({ icon, label, className, spin = false }: WeatherIconProps) {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label={label} className={cn('block', className)}>
      {glyph(icon, cn('isobar-sun', spin && 'isobar-spin'))}
    </svg>
  )
}

const CLOUD = 'M18 40h30a10 10 0 0 0 1.3-19.9A15 15 0 0 0 20.6 22 9 9 0 0 0 18 40Z'
const RAIN = 'M24 46l-3 8M34 46l-3 8M44 46l-3 8'

function glyph(icon: IconKey, sunClass: string) {
  switch (icon) {
    case 'sun':
      return (
        <g className={sunClass}>
          <circle cx="32" cy="32" r="11" />
          <path d="M32 10v6M32 48v6M10 32h6M48 32h6M16.4 16.4l4.2 4.2M43.4 43.4l4.2 4.2M16.4 47.6l4.2-4.2M43.4 20.6l4.2-4.2" />
        </g>
      )
    case 'partly':
      return (
        <>
          <g className={sunClass}>
            <circle cx="24" cy="24" r="10" />
            <path d="M24 6v4M24 38v4M6 24h4M38 24h4M11.3 11.3l2.8 2.8M33.9 33.9l2.8 2.8M11.3 36.7l2.8-2.8M33.9 14.1l2.8-2.8" />
          </g>
          <path
            className="isobar-cloud"
            d="M22 52h26a9 9 0 0 0 1.2-17.9A13 13 0 0 0 24.4 36 8 8 0 0 0 22 52Z"
          />
        </>
      )
    case 'cloud':
      return (
        <path
          className="isobar-cloud"
          d="M18 48h30a10 10 0 0 0 1.3-19.9A15 15 0 0 0 20.6 30 9 9 0 0 0 18 48Z"
        />
      )
    case 'rain':
      return (
        <>
          <path className="isobar-cloud" d={CLOUD} />
          <path className="isobar-rain" d={RAIN} />
        </>
      )
    case 'thunder':
      return (
        <>
          <path className="isobar-cloud" d={CLOUD} />
          <path className="isobar-bolt" d="M34 42l-7 11h7l-3 9 10-13h-7l4-7Z" />
        </>
      )
    case 'snow':
      return (
        <>
          <path
            className="isobar-cloud"
            d="M18 38h30a10 10 0 0 0 1.3-19.9A15 15 0 0 0 20.6 20 9 9 0 0 0 18 38Z"
          />
          <g className="isobar-snow">
            <path d="M22 45v9M18.1 47.2l7.8 4.6M18.1 51.8l7.8-4.6M34 49v9M30.1 51.2l7.8 4.6M30.1 55.8l7.8-4.6M46 45v9M42.1 47.2l7.8 4.6M42.1 51.8l7.8-4.6" />
          </g>
        </>
      )
  }
}
