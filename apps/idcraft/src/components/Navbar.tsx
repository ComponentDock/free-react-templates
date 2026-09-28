import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur shadow-sm">
        <a href="#" className="text-xl font-bold text-dark-heading">
          IDcraft
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-dark-heading hover:text-amber-brand transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-amber-brand text-white text-sm font-semibold px-6 py-3 hover:bg-dark-heading transition-colors"
        >
          Available for freelance work
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-dark-heading"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col p-4 gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm font-medium text-dark-heading hover:text-amber-brand py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <a
              href="#contact"
              className="block text-center bg-amber-brand text-white text-sm font-semibold px-6 py-3"
              onClick={() => setMobileOpen(false)}
            >
              Available for freelance work
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
