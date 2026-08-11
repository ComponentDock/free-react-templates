import { MapPin, Phone } from 'lucide-react'
import {
  copyright,
  footerColumns,
  footerCredit,
  footerPhotoLabel,
  footerPhotoSeeds,
  siteName,
} from '../data'

/* Footer — #353535 (reference: .footer-section): a full-width room-photo
   strip (.footer-room-pic), the serif logo, four widget columns (Location
   / Reception / Shuttle Service / Restaurant; phone numbers become tel:
   links) and the copyright bar with the repo-standard credit. */
export function Footer() {
  return (
    <footer className="bg-charcoal pt-11">
      <ul className="grid grid-cols-2 lg:grid-cols-4">
        {footerPhotoSeeds.map((seed, index) => (
          <li key={seed}>
            <img
              src={`https://picsum.photos/seed/${seed}/480/300`}
              alt={footerPhotoLabel(index)}
              className="h-36 w-full object-cover sm:h-44"
            />
          </li>
        ))}
      </ul>

      <div className="mx-auto max-w-7xl px-4 pt-14 pb-16 lg:px-6">
        <p className="mb-12 text-center font-serif text-3xl tracking-wide text-white">{siteName}</p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h5 className="mb-4 text-lg text-gold">{column.title}</h5>
              <div className="flex items-start gap-3">
                {column.icon === 'map' ? (
                  <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-gold" />
                ) : (
                  <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-gold" />
                )}
                {column.href ? (
                  <a
                    href={column.href}
                    className="text-sm leading-6 tracking-[0.5px] text-white/90 transition-colors hover:text-gold"
                  >
                    {column.text}
                  </a>
                ) : (
                  <p className="text-sm leading-6 tracking-[0.5px] text-white/90">{column.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="px-4 text-center text-sm text-white/70">
          {copyright} <span aria-hidden="true">·</span> {footerCredit}
        </p>
      </div>
    </footer>
  )
}
