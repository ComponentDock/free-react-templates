import { MapPin, Phone, Mail } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-2 text-sm">
        <div className="flex items-center gap-6">
          <a
            href="#address"
            className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <span>198 West 21th Street, Suite 721 New York NY 10016</span>
          </a>
          <a
            href="tel:+1235235598"
            className="hidden items-center gap-2 text-white/80 transition-colors hover:text-white sm:flex"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>+1235 235 598</span>
          </a>
        </div>
        <a
          href="mailto:info@yoursite.com"
          className="hidden items-center gap-2 text-white/80 transition-colors hover:text-white md:flex"
        >
          <Mail className="h-3.5 w-3.5" aria-hidden="true" />
          <span>info@yoursite.com</span>
        </a>
      </div>
    </div>
  )
}
