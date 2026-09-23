import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  { label: 'Price', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#home" className="text-xl font-bold tracking-wider text-white">
          <span className="border-l-4 border-primary-400 pl-2">Nimbus</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 text-xs font-normal uppercase text-white transition-colors hover:text-primary-400"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#pricing"
              className="ml-2 bg-accent-400 px-5 py-2 text-xs font-semibold uppercase text-white transition-colors hover:bg-accent-500"
            >
              Get Started
            </a>
          </li>
        </ul>

        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy/95 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={closeMobile}
              className="block w-full py-2 text-left text-sm font-normal uppercase text-white hover:text-primary-400"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={closeMobile}
            className="mt-2 inline-block bg-accent-400 px-5 py-2 text-xs font-semibold uppercase text-white"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  )
}
