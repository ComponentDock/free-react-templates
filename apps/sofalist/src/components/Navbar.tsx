import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'
import { cn } from '@free-react-templates/ui'

/* Navbar — transparent bar over the hero with the brand wordmark and five
   links; mobile gets a slide-down panel that closes via toggle, Escape, or
   a link click. */
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
    if (mobileOpen) panelRef?.focus()
  }, [mobileOpen, panelRef])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all',
        sticky ? 'bg-paper shadow-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-2xl font-semibold text-ink transition-colors">
          {BRAND}
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base text-ink transition-colors hover:text-amber"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="text-ink lg:hidden"
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
              className="absolute right-4 top-4 text-ink"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <a
              href="#home"
              onClick={() => setMobileOpen(false)}
              className="font-display text-2xl font-semibold text-ink"
            >
              {BRAND}
            </a>
            <nav aria-label="Mobile navigation" className="mt-8 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-medium text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
