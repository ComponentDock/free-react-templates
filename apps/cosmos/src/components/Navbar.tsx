import { useState, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

interface NavProps {
  onNavClick?: (section: string) => void
}

const NAV_LINKS = [
  { label: 'Home', href: '#home-section' },
  { label: 'Portfolio', href: '#portfolio-section' },
  { label: 'Services', href: '#services-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Contact', href: '#contact-section' },
]

export function Navbar({ onNavClick }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      setMobileOpen(false)
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: 'smooth' })
      onNavClick?.(id)
    },
    [onNavClick],
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home-section" className="font-mulish text-2xl font-bold">
          Cosmos<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 px-6 pb-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block py-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
