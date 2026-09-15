import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS } from '../data'

/* Navbar: fixed dark bar with Conclave logo, uppercase menu links
   and a "Get Ticket" button; collapses to hamburger toggle on mobile. */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all',
        scrolled ? 'bg-[#111429] shadow-[0_2px_40px_8px_rgba(0,0,0,0.15)]' : 'bg-[#111429]/80',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8"
      >
        <a
          href="#home"
          className="text-3xl font-bold uppercase tracking-wide text-white"
          style={{ fontFamily: 'var(--font-heading)' }}
          aria-label="Conclave home"
        >
          {BRAND}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={i === 0 ? 'page' : undefined}
              className={cn(
                'text-sm font-medium uppercase tracking-wider transition-colors hover:text-white',
                i === 0 ? 'text-white' : 'text-white/80',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden items-center rounded-[4px] border-2 border-[#3b1d82] px-6 py-2.5 text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-[#3b1d82] hover:text-white lg:inline-flex"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Get Ticket
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
            className="rounded p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen ? (
        <nav
          aria-label="Mobile"
          className="border-t border-white/10 bg-[#111429] px-4 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-[4px] border-2 border-[#3b1d82] px-6 py-2.5 text-sm font-medium uppercase tracking-wider text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get Ticket
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
