import { MapPin } from 'lucide-react'
import { mapLabel } from '../data'

/** Static map placeholder between contact and footer (source #map — a
 *  Google-map embed; the recreation uses an inert placeholder with no
 *  external map dependency). */
export function MapBlock() {
  return (
    <section
      data-testid="map"
      aria-label={mapLabel}
      className="relative flex h-72 items-center justify-center overflow-hidden bg-light"
      style={{
        backgroundImage:
          'linear-gradient(rgba(3, 63, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(3, 63, 255, 0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg">
          <MapPin className="h-6 w-6" aria-hidden="true" />
        </span>
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-ink">{mapLabel}</p>
      </div>
    </section>
  )
}
