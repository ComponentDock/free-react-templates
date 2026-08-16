import { useState } from 'react'
import { ChevronDown, Menu, Sparkles, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

const pageLinks = ['Pricing', 'Services Details', 'Blog Details'] as const

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-navy">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Spotless home">
          <Sparkles className="h-6 w-6 text-accent" aria-hidden="true" />
          <span className="text-2xl font-bold uppercase tracking-wide text-white">Spotless</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-widest text-white transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}

          {/* Pages dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((value) => !value)}
              aria-expanded={dropdownOpen}
              className="inline-flex items-center gap-1 text-[13px] font-medium uppercase tracking-widest text-white transition-colors hover:text-accent"
            >
              Pages
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-md border border-gray-100 bg-white py-2 shadow-lg">
                {pageLinks.map((label) => (
                  <a
                    key={label}
                    href="#services"
                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand"
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="btn-pill">
            Appointment
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          'border-t border-white/10 bg-navy px-4 py-4 lg:hidden',
          menuOpen ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base font-medium uppercase tracking-wider text-white transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-base font-medium uppercase tracking-wider text-accent"
          >
            Pages
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-pill mt-2 mb-2 w-fit"
          >
            Appointment
          </a>
        </div>
      </div>
    </header>
  )
}
