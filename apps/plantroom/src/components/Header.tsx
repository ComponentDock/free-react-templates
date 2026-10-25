import { useEffect, useState } from 'react'
import { MapPin, Menu, Phone, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { CONTACT, NAV_LINKS } from '../data'
import { Wordmark } from './Wordmark'

const SPY_IDS = ['response', 'agreement', 'sectors', 'areas', 'why-us', 'contact'] as const

/**
 * Sticky translucent header: the six labels only from `xl` (measured — the
 * reference still shows the hamburger at 1100 px), a location pill from `2xl`,
 * the phone pill from `md`, the solid CTA from `xl`, the shadow past 50 px, and
 * a `.nav-active` scroll-spy over the six bands that exist on the page.
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

    SPY_IDS.forEach((id) => {
      const element = document.getElementById(id)
      if (element !== null) {
        observer.observe(element)
      }
    })

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
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 lg:h-20 lg:px-8">
        <a href="#top" aria-label="Plantroom home" className="flex shrink-0 items-center">
          <Wordmark />
        </a>

        <nav className="hidden min-w-0 items-center gap-7 xl:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.target}
              aria-current={active === link.spy ? 'true' : undefined}
              className={cn(
                'text-sm font-medium whitespace-nowrap text-ink-600 transition-colors hover:text-ink-800',
                active === link.spy ? 'nav-active' : '',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#areas"
            className="hidden items-center gap-1.5 rounded-lg border border-ink-200 px-3 py-2 text-sm font-medium text-ink-700 hover:border-primary-600 hover:text-primary-700 2xl:inline-flex"
          >
            <MapPin aria-hidden="true" className="h-4 w-4" />
            Fort Worth, TX
          </a>
          <a
            href={CONTACT.phoneHref}
            className="hidden items-center gap-1.5 rounded-lg border border-ink-200 px-3 py-2 text-sm font-medium text-ink-700 hover:border-primary-600 hover:text-primary-700 md:inline-flex"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            {CONTACT.phoneLabel}
          </a>
          <a
            href="#quote"
            className="hidden rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-700 xl:inline-flex"
          >
            Request a site survey
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-ink-600 hover:bg-ink-50 xl:hidden"
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
          <nav className="px-4 py-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.target}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium text-ink-800"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-ink-100 pt-4">
              <a href={CONTACT.phoneHref} className="btn btn-secondary">
                <Phone aria-hidden="true" className="h-4 w-4" />
                {CONTACT.phoneLabel}
              </a>
              <a href="#areas" onClick={() => setOpen(false)} className="btn btn-secondary">
                <MapPin aria-hidden="true" className="h-4 w-4" />
                Fort Worth, TX
              </a>
            </div>
            <a href="#quote" onClick={() => setOpen(false)} className="btn btn-primary mt-3 w-full">
              Request a site survey
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
