import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Podcasts', 'About', 'Blog', 'Contact'] as const

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-heading">
          Ear<span className="text-brand">worm</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-heading transition-colors hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="text-heading transition-colors hover:text-brand">
            <Search className="h-5 w-5" />
          </button>
          <div className="hidden items-center gap-2 md:flex">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-heading transition-colors hover:text-brand"
              >
                {s.label[0]}
              </a>
            ))}
          </div>
          <button
            aria-label="Toggle menu"
            className="text-heading md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm font-medium text-heading transition-colors hover:text-brand"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-heading transition-colors hover:text-brand"
              >
                {s.label[0]}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
