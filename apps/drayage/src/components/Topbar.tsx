import { MapPin, Phone } from 'lucide-react'
import { SOCIAL_LINKS } from '../data/content'
import { BRAND_ICONS } from './icons'

export function Topbar() {
  return (
    <div className="bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-2.5 text-xs md:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          <a href="tel:+442079308205" className="flex items-center gap-2 hover:text-brand">
            <Phone aria-hidden="true" className="h-3.5 w-3.5" />
            +44 20 7930 8205
          </a>
          <span className="flex items-center gap-2">
            <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
            450 Strand, Charing Cross, London
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a href="#contacts" className="hover:text-brand">
            Register or Sign In
          </a>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = BRAND_ICONS[social.label]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white/80 transition-colors hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
