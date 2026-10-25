import { useState } from 'react'
import { MapPin, Menu, Phone, Star, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { brand, navLinks } from '../data'
import { Wordmark } from './Wordmark'

/**
 * Licence strip + sticky header. The strip is the page's trade credential
 * (certification, filing promise, service county, rating); the header carries
 * the six band links, the location and phone pills and one solid CTA. The
 * desktop nav switches on at `xl` and the location pill at `2xl`, because six
 * links plus two pills and a CTA do not fit in 1024 px.
 */
export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="w-full border-b border-transparent bg-ink-800 text-ink-100">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 text-xs lg:px-8">
          <ul className="flex min-w-0 items-center gap-x-4 overflow-hidden">
            <li className="flex shrink-0 items-center gap-1.5 whitespace-nowrap">
              <span className="opacity-70">Certified tester</span>
              <span className="font-semibold">{brand.certification}</span>
            </li>
            <li className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap sm:flex">
              <span className="opacity-70">Results filed for you</span>
            </li>
            <li className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap sm:flex">
              <span className="opacity-70">Serving</span>
              <span className="font-semibold">{brand.county}</span>
            </li>
          </ul>
          <p className="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-medium">
            <Star aria-hidden="true" className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span>{brand.rating}</span>
            <span className="opacity-70">{brand.ratingNote}</span>
          </p>
        </div>
      </div>

      <header
        className="sticky top-0 z-50 w-full border-b border-ink-100 bg-white/90 backdrop-blur-lg"
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setOpen(false)
          }
        }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 lg:h-20 lg:px-8">
          <a href="#top" aria-label={`${brand.name} home`} className="flex shrink-0 items-center">
            <Wordmark />
          </a>

          <nav aria-label="Main navigation" className="hidden min-w-0 xl:flex xl:items-center xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-sm font-semibold text-ink-600 transition-colors hover:text-primary-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#areas"
              className="hidden items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-medium text-ink-700 transition-colors hover:border-primary-600 hover:text-primary-700 2xl:inline-flex"
            >
              <MapPin aria-hidden="true" className="h-4 w-4" />
              <span>
                {brand.city}, {brand.region}
              </span>
            </a>
            <a
              href={brand.phoneHref}
              className="hidden items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-800 transition-colors hover:border-primary-600 hover:text-primary-700 md:inline-flex"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              <span>{brand.phone}</span>
            </a>
            <ButtonLink href="#quote" className="hidden h-auto px-5 py-2.5 text-sm font-bold xl:inline-flex">
              Book a test
            </ButtonLink>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
              className="rounded-lg p-2 text-ink-600 transition-colors hover:bg-ink-50 xl:hidden"
            >
              {open ? (
                <X aria-hidden="true" className="h-6 w-6" />
              ) : (
                <Menu aria-hidden="true" className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div id="mobile-nav" hidden={!open} className="xl:hidden">
          <nav aria-label="Mobile navigation" className="border-t border-ink-100 bg-white px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-semibold text-ink-800"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-wrap gap-2 border-t border-ink-100 pt-4">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-800"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                <span>{brand.phone}</span>
              </a>
              <a
                href="#areas"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-medium text-ink-700"
              >
                <MapPin aria-hidden="true" className="h-4 w-4" />
                <span>
                  {brand.city}, {brand.region}
                </span>
              </a>
            </div>
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-3 block w-full rounded-lg bg-primary-600 px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-primary-700"
            >
              Book a test
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
