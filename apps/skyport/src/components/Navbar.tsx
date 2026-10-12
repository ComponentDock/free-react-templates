import { useEffect, useRef, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { ChevronDown, Menu, X } from 'lucide-react'
import { UtilityBar } from './UtilityBar'
import { Wordmark } from './Wordmark'

interface NavItem {
  label: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Plan', href: '#plan' },
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#service' },
  { label: 'Faq', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

/** The two entries behind the "Pages" trigger. */
const PAGES: NavItem[] = [
  { label: 'Elements', href: '#service' },
  { label: 'Style Guide', href: '#contact' },
]

/** Scroll distance after which the header gains its offset shadow. */
const SCROLL_THRESHOLD = 100

const LINK_CLASS =
  'font-heading text-[12px] font-normal text-ink uppercase transition-colors hover:text-brand'

/**
 * The fixed white header: the dark utility strip sits above a logo/menu row with
 * a 20 px top pad. "Pages" opens a white dropdown (hover, click and keyboard) and
 * the menu collapses into a toggleable panel under `lg`. Past 100 px of scroll
 * the header keeps its opaque white background and gains the reference's offset
 * shadow.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [active, setActive] = useState('Home')
  const pagesTrigger = useRef<HTMLButtonElement>(null)

  const dropdownOpen = hovered || clicked

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  useEffect(() => {
    if (!dropdownOpen) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setHovered(false)
        setClicked(false)
        pagesTrigger.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [dropdownOpen])

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-[997] bg-surface pb-[20px] transition-all duration-500',
        scrolled && 'shadow-[-21.213px_21.213px_30px_rgba(158,158,158,0.3)]',
      )}
    >
      <UtilityBar />

      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1140px] items-center justify-between px-5 pt-[20px]"
      >
        <a href="#home" aria-label="Skyport home">
          <Wordmark />
        </a>

        <ul className="hidden items-center lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="ml-[10px]">
              <a
                href={item.href}
                aria-current={active === item.label ? 'page' : undefined}
                onClick={() => setActive(item.label)}
                className={cn(LINK_CLASS, 'block px-[8px]', active === item.label && 'text-brand')}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li
            className="relative ml-[10px]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <button
              type="button"
              ref={pagesTrigger}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={() => setClicked((open) => !open)}
              className={cn(LINK_CLASS, 'inline-flex items-center gap-1 px-[8px]')}
            >
              Pages
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </button>

            {dropdownOpen ? (
              <ul className="absolute top-full left-0 z-10 w-[170px] bg-surface p-[10px] shadow-[0_0_30px_rgba(127,137,161,0.25)]">
                {PAGES.map((page) => (
                  <li key={page.label}>
                    <a
                      href={page.href}
                      onClick={() => {
                        setClicked(false)
                        setHovered(false)
                      }}
                      className="block p-[10px] text-[12px] text-copy-alt normal-case transition-colors hover:text-brand"
                    >
                      {page.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="p-2 text-ink transition-colors hover:text-brand lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="mx-auto max-w-[1140px] px-5 lg:hidden">
          <ul className="mt-[20px] flex flex-col gap-3 border-t border-line pt-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActive(item.label)
                    setMobileOpen(false)
                  }}
                  className={cn(
                    'font-heading block text-[12px] uppercase transition-colors hover:text-brand',
                    active === item.label ? 'text-brand' : 'text-ink',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {PAGES.map((page) => (
              <li key={page.label}>
                <a
                  href={page.href}
                  onClick={() => setMobileOpen(false)}
                  className="block pl-4 text-[12px] text-copy-alt transition-colors hover:text-brand"
                >
                  {page.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
