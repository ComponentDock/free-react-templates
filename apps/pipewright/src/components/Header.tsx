import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, BRAND_NOTE, NAV_LINKS } from '../content'
import { Container, PhonePill } from './ui'

interface HeaderProps {
  /** The sticky bar gains its shadow past 50 px of scroll. */
  readonly lifted: boolean
}

/**
 * Two-line wordmark, four labels that only exist from 1280 px up, the bronze
 * phone pill from 768 px up and a hamburger below 1280 px. There is no
 * dark-mode control: this design ships light-only.
 */
export function Header({ lifted }: HeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <header
      data-header
      className={cn(
        'sticky top-0 z-50 border-b border-ink-200 bg-ink-50/95 backdrop-blur transition-shadow',
        lifted && 'shadow-lg',
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-3 lg:h-24">
        <a href="#top" className="min-w-0 leading-none">
          <span className="block font-serif text-2xl font-semibold text-ink-800 lg:text-3xl">
            {BRAND}
          </span>
          <span className="mt-1.5 block truncate text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink-400">
            {BRAND_NOTE}
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden xl:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={`#${link.id}`}
              className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.05em] text-ink-500 transition-colors hover:text-primary-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <PhonePill className="hidden md:inline-flex" />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-ink-400 transition-colors hover:bg-ink-100 xl:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {open && (
        <div className="xl:hidden">
          <nav
            aria-label="Mobile navigation"
            className="border-t border-ink-200 bg-ink-50 px-4 py-4 lg:px-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-base uppercase tracking-wider text-ink-700"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 border-t border-ink-200 pt-4">
              <PhonePill className="w-full justify-center" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
