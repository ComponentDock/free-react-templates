import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Articles', href: '#articles' },
  { label: 'Contact', href: '#contact' },
] as const

interface NavbarProps {
  onBookAppointment: () => void
}

export function Navbar({ onBookAppointment }: NavbarProps) {
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? 'bg-black/85 text-white' : 'bg-transparent text-white'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="font-display text-3xl font-bold tracking-wide">
          Lustre <span className="text-gold-500">hair</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-gold-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBookAppointment}
            className="hidden bg-gold-500 px-5 py-3 text-sm font-bold uppercase tracking-wider text-ink-soft transition-colors hover:bg-gold-400 sm:inline-block"
          >
            Book an Appointment
          </button>

          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-black/95 px-4 py-6 lg:hidden"
        >
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-gold-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false)
                  onBookAppointment()
                }}
                className="w-full bg-gold-500 px-5 py-3 text-sm font-bold uppercase tracking-wider text-ink-soft"
              >
                Book an Appointment
              </button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
