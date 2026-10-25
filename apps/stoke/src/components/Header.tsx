import { useState } from 'react'
import { MapPin, Menu, Phone, Star, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  BAND_IDS,
  CITY,
  LICENCE,
  LICENCE_LOCATION,
  NAV_LINKS,
  PHONE_HREF,
  PHONE_LABEL,
} from '../content'
import { useScrollSpy } from '../lib/useScrollSpy'
import { useScrollState } from '../lib/useScrollState'
import { Wordmark } from './Wordmark'

/** The 36 px licence fact strip above the header. It scrolls away. */
function LicenceStrip() {
  return (
    <div data-licence-bar className="w-full bg-ink-800 text-ink-100">
      <div className="container mx-auto flex h-9 items-center justify-between gap-4 px-4 text-xs lg:px-8">
        <ul className="flex min-w-0 items-center gap-x-4 gap-y-1 overflow-hidden">
          <li className="flex shrink-0 items-center gap-1.5 whitespace-nowrap">
            <span className="hidden opacity-70 sm:inline">Licence</span>
            <span className="font-semibold">{LICENCE}</span>
          </li>
          <li className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap sm:flex">
            <span className="opacity-70">NATE-certified on every truck</span>
          </li>
          <li className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap sm:flex">
            <span className="opacity-70">Serving</span>
            <span className="font-semibold">{LICENCE_LOCATION}</span>
          </li>
        </ul>
        <p className="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-medium">
          <Star className="h-3 w-3 text-amber-400" aria-hidden="true" fill="currentColor" />
          <span>4.9</span>
          <span className="opacity-70">260+ reviews on Google (sample)</span>
        </p>
      </div>
    </div>
  )
}

export function Header() {
  const { y } = useScrollState()
  const active = useScrollSpy(BAND_IDS)
  const [open, setOpen] = useState(false)
  const lifted = y > 50

  return (
    <>
      <LicenceStrip />
      <header
        data-header
        className={cn(
          'sticky top-0 z-50 w-full border-b border-ink-100 bg-white/90 backdrop-blur-lg transition-shadow',
          lifted && 'shadow-lg',
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between gap-6 px-4 lg:h-20 lg:px-8">
          <a href="#main-content" aria-label="Stoke home" className="flex shrink-0 items-center">
            <Wordmark />
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden min-w-0 xl:flex xl:items-center xl:gap-7"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={`#${link.id}`}
                aria-current={active === link.id ? 'page' : undefined}
                className="whitespace-nowrap text-sm font-semibold text-ink-600 transition-colors hover:text-primary-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <span className="hidden 2xl:block">
              <a
                href="#areas"
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-medium text-ink-700 transition-colors hover:border-primary-200"
              >
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{CITY}</span>
              </a>
            </span>
            <span className="hidden md:block">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-800 transition-colors hover:border-primary-200"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{PHONE_LABEL}</span>
              </a>
            </span>
            <a
              href={PHONE_HREF}
              className="hidden rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-700 xl:inline-flex"
            >
              Call now
            </a>
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="rounded-lg p-2 text-ink-600 transition-colors hover:bg-ink-50 xl:hidden"
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {open ? (
          <div id="mobile-menu" className="xl:hidden">
            <nav aria-label="Mobile navigation" className="border-t border-ink-100 bg-white px-4 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold text-ink-800"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-wrap gap-2 border-t border-ink-100 pt-4">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-800"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{PHONE_LABEL}</span>
                </a>
                <a
                  href="#areas"
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-medium text-ink-700"
                >
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{CITY}</span>
                </a>
              </div>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  )
}
