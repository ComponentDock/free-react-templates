import { useState, useEffect } from 'react'
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        'sticky top-0 z-50 transition-colors',
        scrolled ? 'bg-[#333333]' : 'bg-[#333333]/90',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="font-heading text-xl font-bold text-[#c5a55a]">
          Precedent
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-3 py-2 text-sm font-medium text-[#b2b2b8] transition-colors hover:text-[#c5a55a]"
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
          className="flex h-9 w-9 items-center justify-center rounded text-[#b2b2b8] transition-colors hover:text-[#c5a55a] lg:hidden"
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
                'block py-2 text-sm font-medium text-[#b2b2b8] transition-colors hover:text-[#c5a55a]',
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
