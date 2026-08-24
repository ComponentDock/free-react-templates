import { useState } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const NAV_LINKS = ['Home', 'Menu', 'About', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-50 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="font-display text-2xl font-bold text-warm-900">
          Bonquet
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-display text-sm font-medium text-warm-900 transition-colors hover:text-brand-400"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:+10787833674" className="text-sm font-medium text-warm-900">
            +10 (78) 783 3674
          </a>
          <Button className="rounded-full bg-brand-400 px-6 py-2 font-display text-sm font-medium text-white hover:bg-brand-500">
            Book a Table
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-warm-900 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-brand-100 bg-warm-50 px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 font-display text-sm font-medium text-warm-900"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="tel:+10787833674" className="mt-2 block text-sm text-brand-400">
            +10 (78) 783 3674
          </a>
        </nav>
      )}
    </header>
  )
}
