import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'
import { PillLink } from './Pill'
import { cn } from '@free-react-templates/ui'

/* Navbar — three-part sticky header: left menu, centered brand wordmark,
   right links + orange Free Quote pill. Turns white with a shadow after
   scrolling; mobile gets a slide-down panel with the same links. */
export function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!dropdown && !mobileOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdown(false)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [dropdown, mobileOpen])

  const onLight = !sticky
  const linkClass = cn(
    'group relative inline-flex items-center gap-1 text-lg font-medium transition-colors',
    onLight ? 'text-white' : 'text-ink',
  )

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all',
        sticky ? 'bg-white shadow-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-4 px-6 py-4 lg:grid-cols-[1fr_auto_1fr]">
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              {link.children ? (
                <>
                  <button
                    type="button"
                    aria-expanded={dropdown}
                    onClick={() => setDropdown(true)}
                    className={cn(linkClass, 'text-lg font-medium')}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn('h-4 w-4 transition-transform', dropdown && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                  {dropdown && (
                    <div className="absolute left-0 top-full w-48 bg-white py-2 shadow-lg">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-base font-normal text-body transition-colors hover:bg-peach/40 hover:text-brand"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={link.href} className={cn(linkClass, 'text-lg font-medium')}>
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-[3px] w-full origin-left scale-x-0 bg-brand transition-transform group-hover:scale-x-100"
                  />
                </a>
              )}
            </div>
          ))}
        </nav>

        <a
          href="#home"
          className={cn(
            'justify-self-start font-display text-3xl font-semibold transition-colors lg:justify-self-center',
            onLight ? 'text-white' : 'text-ink',
          )}
        >
          {BRAND}
        </a>

        <div className="hidden items-center justify-end gap-8 lg:flex">
          {NAV_LINKS.slice(3).map((link) => (
            <a key={link.label} href={link.href} className={cn(linkClass, 'text-lg font-medium')}>
              {link.label}
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left scale-x-0 bg-brand transition-transform group-hover:scale-x-100"
              />
            </a>
          ))}
          <PillLink href="#contact" variant="header">
            Free Quote
          </PillLink>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className={cn('justify-self-end lg:hidden', onLight ? 'text-white' : 'text-ink')}
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
            role="dialog"
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 h-full w-80 overflow-y-auto bg-white p-6 shadow-xl"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="absolute right-4 top-4 text-ink"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <a
              href="#home"
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl font-semibold text-ink"
            >
              {BRAND}
            </a>
            <nav aria-label="Mobile navigation" className="mt-8 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-lg font-medium text-ink"
                  >
                    {link.label}
                  </a>
                  {link.children?.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="ml-4 mt-2 block text-base text-body"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
