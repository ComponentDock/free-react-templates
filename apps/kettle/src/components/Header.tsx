import { useEffect, useState } from 'react'
import { Menu, MapPin, Phone, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS, SPY_IDS } from '../data'
import { Wordmark } from './Wordmark'

/**
 * Sticky translucent header. The six labels appear at `xl`, not `lg`: at
 * 1024–1279 px six labels plus two pills and a CTA do not fit, and the
 * reference itself keeps the wider threshold. The scroll spy is run against the
 * six bands that exist on this page.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return
    }

    const bands = SPY_IDS.map((id) => document.getElementById(id)).filter(
      (band): band is HTMLElement => band !== null,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )

    bands.forEach((band) => observer.observe(band))

    return () => observer.disconnect()
  }, [])

  return (
    <header
      data-testid="site-header"
      className={cn(
        'sticky top-0 z-50 w-full border-b border-ink-100 bg-white/90 backdrop-blur-lg transition-shadow',
        scrolled ? 'shadow-lg' : 'shadow-none',
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-6 px-4 lg:h-20 lg:px-8">
        <a href="#top" aria-label="Kettle home" className="flex shrink-0 items-center">
          <Wordmark />
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden min-w-0 items-center gap-7 xl:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.target}
              aria-current={active === link.spy ? 'true' : undefined}
              className={cn(
                'text-sm font-semibold whitespace-nowrap text-ink-600 transition-colors hover:text-primary-700',
                active === link.spy && 'nav-active',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="#areas"
            className="hidden items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-medium text-ink-600 transition-colors hover:border-ink-300 hover:text-ink-800 2xl:inline-flex"
          >
            <MapPin aria-hidden="true" className="h-4 w-4" />
            {BRAND.locality}
          </a>
          <a
            href={BRAND.phoneHref}
            className="hidden items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-700 transition-colors hover:border-ink-300 hover:text-ink-900 md:inline-flex"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            {BRAND.phone}
          </a>
          <a
            href="#size"
            className="hidden rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-700 xl:inline-flex"
          >
            Size mine
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-ink-600 hover:bg-ink-100 xl:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-ink-100 bg-white xl:hidden">
          <nav aria-label="Mobile navigation" className="container mx-auto px-4 py-4 lg:px-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.target}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-semibold text-ink-800"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-ink-100 pt-4">
              <a
                href={BRAND.phoneHref}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-3 py-2 text-sm font-semibold text-ink-700"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                {BRAND.phone}
              </a>
              <a
                href="#areas"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-3 py-2 text-sm font-medium text-ink-600"
              >
                <MapPin aria-hidden="true" className="h-4 w-4" />
                {BRAND.locality}
              </a>
              <a href="#size" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Size mine
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
