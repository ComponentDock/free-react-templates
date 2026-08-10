import { useEffect, useState } from 'react'
import { Menu, Moon, Search, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Program', href: '#program' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

const DARK_KEY = 'pump-dark'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem(DARK_KEY) === '1')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem(DARK_KEY, dark ? '1' : '0')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 bg-ink shadow-md">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Pump">
          <span className="flex h-10 w-10 items-center justify-center rounded bg-gradient-to-br from-brand to-brand-orange font-display text-xl font-black text-white">
            P
          </span>
          <span className="font-display text-2xl font-extrabold tracking-tight text-white">
            Pump
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm font-semibold uppercase tracking-wide text-gray-300 transition-colors hover:text-brand',
                index === 0 && 'text-brand',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Search"
            className="flex h-11 w-11 items-center justify-center text-gray-300 transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle dark mode"
            className="flex h-11 w-11 items-center justify-center text-gray-300 transition-colors hover:text-brand"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center text-gray-300 transition-colors hover:text-brand lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'border-t border-gray-800 bg-ink px-4 py-4 lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg py-3 text-base font-semibold uppercase tracking-wide text-gray-200 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
