import { useEffect, useState } from 'react'
import { Clock, Mail, Menu, Phone, Search, X } from 'lucide-react'
import { BRAND, NAV_LINKS, TOP_BAR_LINES } from '../data'
import { SOCIAL_ICONS } from './icons'
import { cn } from '@free-react-templates/ui'

const TOP_BAR_ICONS = { phone: Phone, mail: Mail, clock: Clock }

/* Navbar — thin white info bar (hidden below md), a sticky white header
   with the wordmark, nav links, a circular search icon, and a green
   "Get Free Quote" pill; mobile gets a slide-down panel that closes via
   the toggle, Escape, or a link click. */
export function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [panelRef, setPanelRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  useEffect(() => {
    panelRef?.focus()
  }, [mobileOpen, panelRef])

  return (
    <header className={cn('sticky top-0 z-40 bg-paper transition-all', sticky && 'shadow-md')}>
      {/* Top info bar */}
      <div className="hidden border-b border-sage-pale md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5">
          <ul role="list" className="flex items-center gap-6 text-base font-medium text-forest">
            {TOP_BAR_LINES.map((line) => {
              const Icon = TOP_BAR_ICONS[line.icon]
              return (
                <li key={line.text} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-garden" aria-hidden="true" />
                  {line.href ? (
                    <a href={line.href} className="transition-colors hover:text-garden">
                      {line.text}
                    </a>
                  ) : (
                    <span>{line.text}</span>
                  )}
                </li>
              )
            })}
          </ul>
          <ul role="list" className="flex items-center gap-4">
            {Object.entries(SOCIAL_ICONS).map(([key, Icon]) => (
              <li key={key}>
                <a
                  href="#home"
                  aria-label={key}
                  className="block text-sage-pale transition-colors hover:text-garden"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main header row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <a href="#home" className="font-display text-2xl font-bold text-forest">
          {BRAND}
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-plum transition-colors hover:text-garden"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            aria-label="Search"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(0,136,15,0.1)] text-garden"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <a
            href="#quote"
            className="rounded-full bg-garden px-6 py-2.5 text-lg font-medium text-paper transition-colors hover:bg-pink"
          >
            Get Free Quote
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="text-forest lg:hidden"
        >
          <Menu className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      {mobileOpen && (
        <div
          data-testid="mobile-overlay"
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setMobileOpen(false)}
        >
          <div
            ref={setPanelRef}
            tabIndex={-1}
            role="dialog"
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 h-full w-80 overflow-y-auto bg-paper p-6 shadow-xl outline-none"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="absolute right-4 top-4 text-forest"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <a
              href="#home"
              onClick={() => setMobileOpen(false)}
              className="font-display text-2xl font-bold text-forest"
            >
              {BRAND}
            </a>
            <nav aria-label="Mobile navigation" className="mt-8 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-medium text-plum"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#quote"
              onClick={() => setMobileOpen(false)}
              className="mt-8 block rounded-full bg-garden px-6 py-2.5 text-center text-lg font-medium text-paper"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
