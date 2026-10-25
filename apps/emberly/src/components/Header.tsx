import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BAND_IDS, CITY, HERO, NAV_LINKS, PHONE_HREF, PHONE_LABEL } from '../content'
import { useScrollSpy } from '../lib/useScrollSpy'
import { Wordmark } from './Wordmark'

interface HeaderProps {
  /** Past 50 px the header gains its shadow. */
  readonly lifted: boolean
}

/**
 * Sticky header: seven links from `xl` — they do not fit at 1,024–1,279 px, so
 * the disclosure is the `xl` breakpoint rather than `lg`. The phone pill shows
 * from `md`, the location pill from `2xl`.
 */
export function Header({ lifted }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(BAND_IDS)
  const activeLabel = NAV_LINKS.find((link) => link.id === active)?.label

  return (
    <header
      data-header
      className={cn(
        'sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur-lg transition-all',
        lifted && 'shadow-lg',
      )}
    >
      <div className="container mx-auto flex h-16 items-center gap-6 px-4 lg:h-20 lg:px-8">
        <a
          href="#main-content"
          aria-label="Emberly — back to the top"
          className="shrink-0 rounded focus-visible:outline-none"
        >
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden xl:flex xl:items-center xl:gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={`#${link.id}`}
              aria-current={activeLabel === link.label ? 'location' : undefined}
              className={cn(
                'text-sm font-medium transition-colors hover:text-ink-800',
                activeLabel === link.label ? 'font-semibold text-ink-800' : 'text-ink-600',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href="#areas"
            className="hidden items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-medium text-ink-600 2xl:inline-flex"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {CITY}
          </a>

          <a
            href={PHONE_HREF}
            data-phone
            className="hidden items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-800 md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {PHONE_LABEL}
          </a>

          <a
            href="#plans"
            className="hidden items-center justify-center rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-700 xl:inline-flex"
          >
            {HERO.primaryCta}
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 text-ink-700 xl:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" data-mobile-menu className="border-t border-ink-100 bg-white xl:hidden">
          <div className="container mx-auto px-4 py-3 lg:px-8">
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
            <div className="flex flex-wrap gap-2 border-t border-ink-100 pt-4">
              <a
                href={PHONE_HREF}
                data-phone
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-800"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {PHONE_LABEL}
              </a>
              <a
                href="#areas"
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-medium text-ink-600"
              >
                {CITY}
              </a>
            </div>
            <a
              href="#plans"
              onClick={() => setOpen(false)}
              className="mt-3 block w-full rounded-lg bg-primary-600 px-5 py-3 text-center text-sm font-bold text-white"
            >
              {HERO.primaryCta}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
