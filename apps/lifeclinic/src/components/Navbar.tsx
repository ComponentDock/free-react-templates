import { useState, useEffect } from 'react'
import { Menu, X, Heart } from 'lucide-react'
import {
  siteName,
  navItems,
  appointmentLabel,
  navLabel,
  mobileNavLabel,
  menuTriggerLabel,
  menuCloseLabel,
} from '../data'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      aria-label={navLabel}
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'bg-navy shadow-lg' : 'bg-brand/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand">
            <Heart aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="text-2xl font-bold">{siteName}</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex" role="list">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  item.active ? 'text-white' : 'text-white/80'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#appointment"
          className="hidden rounded bg-cta px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-cta-hover lg:inline-block"
        >
          {appointmentLabel}
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? menuCloseLabel : menuTriggerLabel}
          aria-expanded={mobileOpen}
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-white/20 bg-navy px-4 pb-4 lg:hidden">
          <ul className="space-y-2" role="list" aria-label={mobileNavLabel}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-white ${
                    item.active ? 'text-white' : 'text-white/80'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#appointment"
            className="mt-3 block rounded bg-cta px-6 py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-cta-hover"
            onClick={() => setMobileOpen(false)}
          >
            {appointmentLabel}
          </a>
        </div>
      )}
    </nav>
  )
}
