import { useEffect, useRef, useState } from 'react'
import { MapPin, Menu, Moon, Phone, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, CHROME, CITY, CONTACT, NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from '../content'
import { useActiveSection } from '../lib/useActiveSection'
import { useTheme } from '../lib/theme'
import { ActionLink, Container, Logo, Pill } from './ui'

interface HeaderProps {
  /** The sticky bar gains its shadow past 50 px of scroll. */
  readonly lifted: boolean
}

const NAV_CLASS =
  'whitespace-nowrap text-sm font-semibold leading-5 text-ink-600 transition-colors hover:text-primary-700 aria-[current=true]:text-primary-700 dark:text-gray-300 dark:hover:text-primary-300'

/** The bands the nav labels point at, in document order. */
const SECTION_IDS: readonly string[] = [
  'incentives',
  'why-us',
  'services',
  'areas',
  'testimonials',
  'contact',
]

/**
 * White sticky bar, 81 px from 1280 px up and 65 px below: wordmark, six
 * labels from `xl`, a phone pill from `md`, a city pill only from `2xl`, the
 * theme toggle, the lime CTA from `xl` and a burger under that.
 */
export function Header({ lifted }: HeaderProps) {
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
        'sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur-[16px] transition-shadow dark:border-gray-800 dark:bg-gray-950/90',
        lifted && 'shadow-lg',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-3 xl:h-20">
        <a href="#top" aria-label={`${BRAND} home`} className="min-w-0 shrink-0">
          <Logo brand={BRAND} />
        </a>

        <nav aria-label="Main navigation" className="hidden min-w-0 items-center gap-7 xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={active === link.href.replace('#', '') ? 'true' : undefined}
              className={NAV_CLASS}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Pill
            href="#areas"
            icon={<MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />}
            className="hidden 2xl:inline-flex"
          >
            {CITY}
          </Pill>

          <Pill
            href={PHONE_HREF}
            icon={<Phone className="h-4 w-4 shrink-0" aria-hidden="true" />}
            className="hidden md:inline-flex"
          >
            {PHONE_DISPLAY}
          </Pill>

          <button
            type="button"
            onClick={toggle}
            aria-label={CHROME.darkToggle}
            aria-pressed={isDark}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-500 transition-colors hover:bg-ink-50 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {isDark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <ActionLink href="#quote" size="header" className="hidden xl:inline-flex">
            {CONTACT.primaryCta}
          </ActionLink>

          <button
            ref={burgerRef}
            type="button"
            aria-label={open ? CHROME.menuClose : CHROME.menuOpen}
            aria-expanded={open}
            data-mobile-toggle
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-600 transition-colors hover:bg-ink-50 xl:hidden dark:text-gray-300 dark:hover:bg-gray-800"
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
          data-mobile-menu
          className="border-t border-ink-100 bg-white px-4 py-4 xl:hidden dark:border-gray-800 dark:bg-gray-950"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-0 py-3 text-base font-semibold text-ink-700 dark:text-white"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-ink-100 pt-3 dark:border-gray-800">
            <Pill href={PHONE_HREF} icon={<Phone className="h-4 w-4 shrink-0" aria-hidden="true" />}>
              {PHONE_DISPLAY}
            </Pill>
            <Pill href="#areas" icon={<MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />}>
              {CITY}
            </Pill>
            <ActionLink
              href="#quote"
              size="header"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              {CONTACT.primaryCta}
            </ActionLink>
          </div>
        </div>
      ) : null}
    </header>
  )
}
