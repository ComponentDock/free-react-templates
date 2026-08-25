import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Practicing Area', href: '#practice-area' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
      )}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a
          href="#home"
          className={cn(
            'text-2xl font-bold tracking-tight',
            scrolled ? 'text-charcoal' : 'text-white',
          )}
        >
          Lawguard
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand',
                  scrolled ? 'text-gray-700' : 'text-white/90',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Phone + CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:1234899381"
            className={cn(
              'flex items-center gap-2 text-sm font-medium',
              scrolled ? 'text-brand' : 'text-white',
            )}
          >
            <Phone size={16} />
            123-489-9381
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={cn('lg:hidden', scrolled ? 'text-charcoal' : 'text-white')}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t bg-white px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm font-medium text-gray-700 hover:text-brand"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:1234899381"
            className="mt-3 flex items-center gap-2 text-sm font-medium text-brand"
          >
            <Phone size={16} />
            123-489-9381
          </a>
        </div>
      )}
    </nav>
  )
}
