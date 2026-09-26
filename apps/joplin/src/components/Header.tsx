import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      data-testid="header"
      className={`fixed top-0 z-50 w-full transition-colors ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-2xl font-bold text-maroon">
          Joplin.
        </a>

        <nav className="hidden items-center gap-8 md:flex" data-testid="nav-desktop">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-secondary transition-colors hover:text-maroon"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-none bg-maroon px-6 py-2 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-maroon-dark md:inline-block"
        >
          Let&apos;s Talk
        </a>

        <button
          className="text-maroon md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          data-testid="mobile-menu-btn"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-gray-200 bg-white px-4 py-4 md:hidden"
          data-testid="nav-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm font-medium text-secondary transition-colors hover:text-maroon"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-block rounded-none bg-maroon px-6 py-2 text-sm font-semibold uppercase tracking-widest text-white"
            onClick={() => setMobileOpen(false)}
          >
            Let&apos;s Talk
          </a>
        </nav>
      )}
    </header>
  )
}
