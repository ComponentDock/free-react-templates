import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  'Home',
  'About',
  'Practice Areas',
  'Cases',
  'Attorneys',
  'Blog',
  'Contact',
] as const

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-50 bg-[#212529]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-xl font-bold text-white">
          Docket
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-3 py-2 text-sm font-medium text-[#b2b2b8] transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="flex h-9 w-9 items-center justify-center rounded text-[#b2b2b8] transition-colors hover:text-white lg:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setMenuOpen(false)}
              className={cn(
                'block py-2 text-sm font-medium text-[#b2b2b8] transition-colors hover:text-white',
              )}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
