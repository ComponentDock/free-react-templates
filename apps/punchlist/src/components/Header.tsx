import { useEffect, useRef, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, CHROME, CONTACT_LABEL, NAV_LINKS } from '../content'
import { useActiveSection } from '../lib/useActiveSection'
import { useTheme } from '../lib/theme'
import { ActionButton, Container, Logo } from './ui'

interface HeaderProps {
  /** The sticky bar gains its shadow past 50 px of scroll. */
  readonly lifted: boolean
  readonly onOpenQuote: () => void
}

const NAV_CLASS =
  'whitespace-nowrap text-sm font-medium leading-5 text-gray-600 transition-colors hover:text-gray-900 aria-[current=true]:text-primary-700 dark:text-gray-300 dark:hover:text-white'

/** The bands the nav labels point at, in document order. */
const SECTION_IDS: readonly string[] = [
  'rates',
  'work',
  'areas',
  'credentials',
  'testimonials',
  'faq',
  'contact',
]

/**
 * White sticky bar, 81 px from 1024 px up and 65 px below: wordmark, seven
 * labels, the dark toggle, the orange CTA and — under `lg` — a burger.
 */
export function Header({ lifted, onOpenQuote }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const burgerRef = useRef<HTMLButtonElement>(null)
  const active = useActiveSection(SECTION_IDS)
  const { isDark, toggle } = useTheme()

  useEffect(() => {
    if (!open) {
      return undefined
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        burgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      data-header
      className={cn(
        'sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-[16px] transition-shadow dark:border-gray-800 dark:bg-gray-950/80',
        lifted && 'shadow-md',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-3 lg:h-20">
        <a href="#top" aria-label={`${BRAND} home`} className="min-w-0 shrink-0">
          <Logo brand={BRAND} />
        </a>

        <nav aria-label="Main navigation" className="hidden min-w-0 items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={active === link.href.slice(1) ? 'true' : undefined}
              className={NAV_CLASS}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={CHROME.darkToggle}
            aria-pressed={isDark}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {isDark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <ActionButton size="header" className="hidden lg:inline-flex" onClick={onOpenQuote}>
            {CONTACT_LABEL}
          </ActionButton>

          <button
            ref={burgerRef}
            type="button"
            aria-label={open ? CHROME.menuClose : CHROME.menuOpen}
            aria-expanded={open}
            aria-controls="mobile-menu"
            data-mobile-toggle
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 lg:hidden dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-menu"
          data-mobile-menu
          className="border-t border-gray-200 bg-white px-4 py-4 lg:hidden dark:border-gray-800 dark:bg-gray-950"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-0 py-3 text-base font-semibold text-gray-800 dark:text-white"
            >
              {link.label}
            </a>
          ))}

          <ActionButton
            className="mt-2 w-full"
            onClick={() => {
              setOpen(false)
              onOpenQuote()
            }}
          >
            {CONTACT_LABEL}
          </ActionButton>
        </div>
      ) : null}
    </header>
  )
}
