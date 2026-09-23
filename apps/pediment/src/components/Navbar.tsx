import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors ${
        scrolled ? 'bg-ink shadow-lg' : 'bg-ink/80 backdrop-blur'
      }`}
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="font-display text-xl font-bold text-white">
          Pediment
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 text-white lg:flex">
          <Phone className="h-4 w-4" aria-hidden="true" />
          <div>
            <span className="text-xs text-white/60">Call us for any questions</span>
            <p className="text-sm font-semibold">+01 123 456 789</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((c) => !c)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-white/10 bg-ink px-4 py-3 lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-white/80 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 border-t border-white/10 pt-3">
            <span className="text-xs text-white/60">Call us for any questions</span>
            <p className="text-sm font-semibold text-white">+01 123 456 789</p>
          </div>
        </nav>
      )}
    </header>
  )
}
