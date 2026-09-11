import { useEffect, useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-transparent'
      }`}
    >
      {/* Top bar — desktop only */}
      <div
        className={`hidden border-b border-white/20 md:block ${
          scrolled ? 'bg-gray-50 text-gray-600' : 'bg-navy/80 text-white/80'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs">
          <p>Welcome to Stratagem consulting service</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3" aria-hidden="true" />
              info@stratagem.com
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" aria-hidden="true" />
              +1 601-609 6780
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-xl font-bold text-navy dark:text-white">
          Stratagem<span className="text-brand">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium transition-colors hover:text-brand ${
                scrolled ? 'text-gray-700' : 'text-navy'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="#contact"
            className="hidden rounded-full border border-brand px-6 py-2 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white lg:inline-flex"
          >
            Get a Quote
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((c) => !c)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden ${
              scrolled ? 'border-gray-300 text-gray-700' : 'border-white/30 text-navy'
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav aria-label="Mobile" className="border-t border-gray-100 bg-white px-4 py-3 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
