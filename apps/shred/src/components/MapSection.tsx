import { MapPin } from 'lucide-react'
import { CONTACT } from '../data'

/* Map — full-width placeholder block where the original embeds Google
   Maps (kept dependency-free with a muted grid + location pin). */
export function MapSection() {
  return (
    <section aria-label="Map" className="flex h-72 w-full items-center justify-center bg-white">
      <div className="text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
          <MapPin className="h-8 w-8" aria-hidden="true" />
        </span>
        <p className="mt-4 font-semibold text-black">Shred Fitness Club</p>
        <p className="mt-1 text-sm text-mist">{CONTACT.address}</p>
      </div>
    </section>
  )
}
