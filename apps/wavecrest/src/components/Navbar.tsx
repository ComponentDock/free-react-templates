import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-navy/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="font-heading text-2xl text-white">
          Wavecrest
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 sm:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="sm"
            className="sm:hidden text-white"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-navy/95 px-4 pb-4 sm:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm text-white/80 transition-colors hover:text-brand"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
