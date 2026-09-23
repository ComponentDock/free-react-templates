import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Blog', href: '#blog' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-header-bg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#home" className="font-display text-2xl font-bold tracking-wide text-white">
          Justlaw
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white transition-colors hover:text-primary-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#consultation"
            className="inline-block border border-primary-600 bg-white px-6 py-3 text-sm font-medium uppercase tracking-widest text-primary-600 transition-colors hover:bg-primary-500 hover:text-white"
          >
            Free Consultation
          </a>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-800 bg-header-bg px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-sm text-white transition-colors hover:text-primary-500"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#consultation"
            className="mt-3 inline-block border border-primary-600 bg-white px-6 py-2 text-sm font-medium uppercase tracking-widest text-primary-600"
            onClick={() => setMobileOpen(false)}
          >
            Free Consultation
          </a>
        </div>
      )}
    </header>
  )
}
