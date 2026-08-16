import { useEffect, useState } from 'react'
import { ChevronDown, Cross, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Events', href: '#events' },
  { label: 'Causes', href: '#causes' },
  { label: 'Blog', href: '#blog' },
  { label: 'Pastor', href: '#pastor' },
  { label: 'Contact', href: '#contact' },
] as const

const ministryLinks = [
  'Staff',
  'Beliefs',
  'History',
  'Mission',
  'Wedding & Funerals',
  'Jobs & Internship',
  'Fellowships',
  'Home Groups',
  'Recovery Groups',
  'Memberships',
  'Children & Students',
  'Volunteer',
  'Counseling',
  'Assistance',
] as const

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      data-variant={scrolled ? 'solid' : 'transparent'}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-3" aria-label="Vesper home">
          <span
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full transition-colors',
              scrolled ? 'bg-gold text-white' : 'border border-white/40 bg-white/10 text-white',
            )}
          >
            <Cross className="h-5 w-5" aria-hidden="true" />
          </span>
          <span
            className={cn(
              'font-script text-3xl leading-none transition-colors',
              scrolled ? 'text-gray-900' : 'text-white',
            )}
          >
            Vesper
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-[13px] font-semibold uppercase tracking-wider transition-colors',
                scrolled ? 'text-gray-700 hover:text-gold-dark' : 'text-white/90 hover:text-gold',
              )}
            >
              {link.label}
            </a>
          ))}

          {/* Ministries dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((value) => !value)}
              aria-expanded={dropdownOpen}
              className={cn(
                'inline-flex items-center gap-1 text-[13px] font-semibold uppercase tracking-wider transition-colors',
                scrolled ? 'text-gray-700 hover:text-gold-dark' : 'text-white/90 hover:text-gold',
              )}
            >
              Ministries
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 rounded-md border border-gray-100 bg-white py-2 shadow-lg">
                {ministryLinks.map((label) => (
                  <a
                    key={label}
                    href="#ministries"
                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-gold-dark"
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
          className={cn(
            'rounded-lg p-2 transition-colors lg:hidden',
            scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10',
          )}
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
          'border-t border-gray-100 bg-white px-4 py-4 lg:hidden',
          menuOpen ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base font-medium text-gray-900 transition-colors hover:text-gold-dark"
            >
              {link.label}
            </a>
          ))}
          <p className="mt-2 border-t border-gray-100 pt-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Ministries
          </p>
          {ministryLinks.map((label) => (
            <a
              key={label}
              href="#ministries"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-gray-600 transition-colors hover:text-gold-dark"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
