import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'
import { cn } from '@free-react-templates/ui'

/* Header — fixed bar over the hero: transparent with white text at the
   top of the page; on scroll it becomes a translucent navy bar with a
   soft shadow and the Sign In / Add Listing group hides (source
   behavior). Desktop nav has two hover dropdowns (Listing, Blog); the
   mobile view gets a slide-in panel with the same links. */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [panelRef, setPanelRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
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
    <header
      className={cn(
        'fixed top-0 z-40 w-full transition-colors',
        scrolled
          ? 'bg-[rgba(26,33,61,0.8)] shadow-[0_10px_15px_rgba(25,25,25,0.1)]'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-4">
        <a href="#home" className="font-display text-2xl font-bold tracking-wide text-white">
          {BRAND}
        </a>

        {/* Inline search (desktop) */}
        <div className="relative hidden w-64 xl:block">
          <Search
            className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-white"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search"
            aria-label="Search listings"
            className="h-12 w-full rounded-full border border-[rgba(35,47,85,0.15)] bg-white/25 pl-12 pr-4 text-white outline-none placeholder:text-white/80"
          />
        </div>

        <nav aria-label="Main navigation" className="hidden items-center lg:flex">
          <ul role="list" className="flex items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="group relative">
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-7 font-display text-base font-semibold text-white transition-colors hover:text-brand"
                >
                  {link.label}
                  {link.children && <ChevronDown className="h-4 w-4" aria-hidden="true" />}
                </a>
                {link.children && (
                  <div className="absolute left-0 top-full hidden w-44 bg-[rgba(26,33,61,0.8)] py-2 group-hover:block">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm font-medium text-white transition-colors hover:text-brand"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={cn('ml-auto flex items-center gap-6', scrolled && 'hidden')}>
          <a
            href="#login"
            className="font-display text-base font-medium text-white transition-colors hover:text-brand"
          >
            Sign In
          </a>
          <a
            href="#listing"
            className="rounded-full bg-brand px-6 py-3 font-display text-base font-medium text-white transition-colors hover:bg-deep"
          >
            Add Listing
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="ml-auto text-white lg:hidden"
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
              className="absolute right-4 top-4 text-navy"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <a
              href="#home"
              onClick={() => setMobileOpen(false)}
              className="font-display text-2xl font-bold tracking-wide text-navy"
            >
              {BRAND}
            </a>
            <nav aria-label="Mobile navigation" className="mt-8 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 font-display text-lg font-medium text-navy"
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <ul role="list" className="ml-4 border-l border-[#DEE0E5] pl-3">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1.5 text-base text-muted"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3 border-t border-[#DEE0E5] pt-6">
              <a
                href="#login"
                onClick={() => setMobileOpen(false)}
                className="font-display text-base font-medium text-navy"
              >
                Sign In
              </a>
              <a
                href="#listing"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-brand px-6 py-3 text-center font-display text-base font-medium text-white"
              >
                Add Listing
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
