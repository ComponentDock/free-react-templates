import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      aria-label="Main navigation"
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'bg-black text-white shadow-lg' : 'bg-transparent text-white'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="text-xl font-bold">
          Tidy<span className="text-accent-400">Wash</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary-400 ${
                scrolled ? 'text-gray-300' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="#about"
            className="rounded bg-primary-400 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
          >
            Request A Quote
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/20 bg-black px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-gray-300 transition-colors hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded bg-primary-400 px-5 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-500"
          >
            Request A Quote
          </ButtonLink>
        </div>
      )}
    </nav>
  )
}
