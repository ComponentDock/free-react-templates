import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = ['Home', 'About', 'Gallery', 'Blog', 'Contact']

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className={cn('fixed top-0 left-0 right-0 z-50 bg-transparent', className)}
      data-testid="navbar"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-white tracking-wide">
            Crispshot
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={cn(
                  'text-sm font-medium text-white/80 hover:text-white transition-colors',
                  link === 'Home' && 'text-white',
                )}
              >
                {link}
              </a>
            ))}
            <button
              type="button"
              aria-label="Search"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Search size={18} />
            </button>
          </div>

          {/* Mobile Toggler */}
          <button
            type="button"
            className="md:hidden text-white"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-white/80 hover:text-white py-2 text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
