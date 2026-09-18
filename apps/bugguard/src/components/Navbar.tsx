import { useEffect, useState } from 'react'
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Pages', href: '#choose-us' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-ink-dark text-gray-300">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              450 Strand, Charing Cross
            </span>
            <span className="hidden items-center gap-1 sm:flex">
              <Clock className="h-3 w-3" aria-hidden="true" />
              08:00 - 19:00
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+800123456781" className="flex items-center gap-1 hover:text-white">
              <Phone className="h-3 w-3" aria-hidden="true" />
              (+800) 1234 56781
            </a>
            <div className="flex items-center gap-2">
              <a href="#home" aria-label="Facebook" className="hover:text-white">
                f
              </a>
              <a href="#home" aria-label="Twitter" className="hover:text-white">
                t
              </a>
              <a href="#home" aria-label="Instagram" className="hover:text-white">
                ig
              </a>
              <a href="#home" aria-label="LinkedIn" className="hover:text-white">
                in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-gray-100 bg-white/90 backdrop-blur transition-colors dark:border-gray-800 dark:bg-gray-950/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#home" className="text-xl font-bold text-ink dark:text-white">
            BugGuard<span className="text-brand">.</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-mist transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink
              href="#contact"
              size="sm"
              className="hidden rounded-full bg-brand px-6 py-2 text-sm font-bold text-white hover:bg-brand-dark lg:inline-flex"
            >
              Appointment
            </ButtonLink>

            <button
              type="button"
              onClick={() => setDark((c) => !c)}
              aria-label="Toggle dark mode"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-mist transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-300"
            >
              {dark ? '☀' : '☾'}
            </button>

            <button
              type="button"
              onClick={() => setOpen((c) => !c)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-mist lg:hidden dark:border-gray-700 dark:text-gray-300"
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <nav
            aria-label="Mobile"
            className="border-t border-gray-100 bg-white/95 px-4 py-3 dark:border-gray-800 dark:bg-gray-950/95 lg:hidden"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-mist transition-colors hover:text-brand dark:text-gray-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
