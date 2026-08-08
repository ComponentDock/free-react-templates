import { useEffect, useState } from 'react'
import { Menu, Moon, Presentation, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Tickets', href: '#tickets' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Venue', href: '#venue' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent transition-all duration-300">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Podium home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white">
            <Presentation className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-xl font-bold tracking-tight text-white">Podium</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={dark ? 'Switch to light mode' : 'Toggle dark mode'}
            className="rounded-lg p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <a
            href="#tickets"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-shadow hover:shadow-xl lg:inline-flex"
          >
            Get Tickets
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'border-t border-white/10 bg-gray-950/95 px-4 py-6 backdrop-blur-xl lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-white/80 transition-colors hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#tickets"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-5 py-3 text-sm font-semibold text-white"
          >
            Get Tickets
          </a>
        </div>
      </div>
    </header>
  )
}
