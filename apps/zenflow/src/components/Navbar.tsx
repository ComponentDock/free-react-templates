import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Service', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team', href: '#team' },
  { label: 'Clients', href: '#clients' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setMobileOpen(false)
    if (mobileOpen) {
      window.addEventListener('resize', handler)
      return () => window.removeEventListener('resize', handler)
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:py-4">
        <a
          href="#home"
          className="font-display text-2xl font-bold uppercase tracking-wider text-ink"
        >
          Zenflow
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium uppercase tracking-wider text-body transition-colors hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center text-body lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-gray-200 px-4 pb-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-3 py-2 text-sm font-medium uppercase tracking-wider text-body hover:text-primary-400"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
