import { useEffect, useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Pages', href: '#resources' },
  { label: 'Contact', href: '#contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    /* v8 ignore start -- jsdom innerWidth not mockable */
    function onResize() {
      if (window.innerWidth >= 992) setOpen(false)
    }
    /* v8 ignore stop */
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="w-full">
      {/* Top contact bar */}
      <div className="hidden bg-white py-2 lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-6 px-4 text-sm text-mist">
          <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-brand">
            <Phone size={14} />
            <span>(123) 456-7890</span>
          </a>
          <a href="mailto:info@coincast.com" className="flex items-center gap-1 hover:text-brand">
            <Mail size={14} />
            <span>info@coincast.com</span>
          </a>
        </div>
      </div>

      {/* Bottom navigation bar */}
      <div className="bg-ink">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:py-4">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold lg:text-2xl">
            <span className="text-white">Coin</span>
            <span className="text-brand">Cast</span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-bold uppercase tracking-wide text-white/80 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button variant="primary" size="sm">
              Get a Quote
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav aria-label="Mobile" className="border-t border-white/10 px-4 pb-4 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-sm font-bold uppercase text-white/80 hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="sm" className="mt-3 w-full">
              Get a Quote
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
