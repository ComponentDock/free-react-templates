import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Contact']

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-dark text-white">
      <div className="mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        <a href="/" className="font-heading text-2xl font-bold tracking-wide text-brand">
          Reflexly
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-heading text-sm uppercase tracking-wider text-white/80 transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-white/70 transition-colors hover:text-brand">
            <Search size={20} />
          </button>
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="text-white/70 transition-colors hover:text-brand md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        aria-label="Mobile navigation"
        className={cn(
          'overflow-hidden bg-bg-dark transition-all duration-300 md:hidden',
          menuOpen ? 'max-h-64' : 'max-h-0',
        )}
      >
        <ul className="flex flex-col gap-4 px-6 pb-4">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block font-heading text-sm uppercase tracking-wider text-white/80 transition-colors hover:text-brand"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
