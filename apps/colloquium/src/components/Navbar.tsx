import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? 'bg-[#1a1a2e] shadow-md' : 'bg-transparent'
      } ${className ?? ''}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-2xl font-bold text-white"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Colloquium<span className="text-[#ff2d9b]">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-[#ff2d9b]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#pricing"
              className="rounded bg-[#ff2d9b] px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-[#e6288c]"
            >
              Buy Ticket
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#1a1a2e] px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm font-medium text-white/80 transition-colors hover:text-[#ff2d9b]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="mt-2 inline-block rounded bg-[#ff2d9b] px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-[#e6288c]"
            onClick={() => setMobileOpen(false)}
          >
            Buy Ticket
          </a>
        </div>
      )}
    </nav>
  )
}
