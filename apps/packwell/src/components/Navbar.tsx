import { useEffect, useState } from 'react'
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      id="navbar"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur transition-colors dark:bg-ink-dark/95"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="text-xl font-bold uppercase tracking-wider text-ink dark:text-white"
        >
          Pack<span className="text-brand">Well</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="hidden text-ink transition-colors hover:text-brand sm:block dark:text-white"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="User account"
            className="hidden text-ink transition-colors hover:text-brand sm:block dark:text-white"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            aria-label="Shopping bag"
            className="hidden text-ink transition-colors hover:text-brand sm:block dark:text-white"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>

          {/* Mobile toggle */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="text-ink transition-colors hover:text-brand md:hidden dark:text-white"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden dark:border-gray-700 dark:bg-ink-dark"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
