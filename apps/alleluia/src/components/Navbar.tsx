import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

const navLinks = [
  { label: 'Sermons', href: '#sermons' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="bg-brand text-white text-xs py-2">
        <div className="container mx-auto px-4 flex justify-end gap-4">
          <a href="#" aria-label="Facebook" className="hover:opacity-80">
            Facebook
          </a>
          <a href="#" aria-label="Twitter" className="hover:opacity-80">
            Twitter
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80">
            Instagram
          </a>
        </div>
      </div>
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          <a href="#" className="font-oldstandard text-2xl font-bold text-text-primary">
            Alleluia
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-primary hover:text-brand transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Search"
              className="text-text-secondary hover:text-brand transition-colors"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              className="md:hidden text-text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-6 py-3 text-text-primary hover:bg-surface transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
