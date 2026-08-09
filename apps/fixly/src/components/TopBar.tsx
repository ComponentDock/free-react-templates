import { Clock, MapPin, Phone } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-accent text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6">
        <p className="inline-flex items-center gap-2">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Monday - Friday 8:00AM-8:00PM</span>
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <a
            href="tel:+23923929210"
            className="inline-flex items-center gap-2 transition-colors hover:text-white/70"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Call Us: +2 392 3929 210</span>
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Location</span>
          </span>
        </div>
      </div>
    </div>
  )
}
