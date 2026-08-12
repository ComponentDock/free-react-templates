import { useEffect, useState } from 'react'
import { Gamepad2, Menu, Moon, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { btnBrand } from '../brand'
import { navLinks } from '../data'

/* The original Beko design is dark-only; the repo-standard toggle flips a
   `.dark` class on <html> and persists under the `theme` key. The page
   defaults to the dark theme (missing key = dark). */
const DARK_KEY = 'theme'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem(DARK_KEY) !== 'light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem(DARK_KEY, dark ? 'dark' : 'light')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Arena home">
          <Gamepad2 className="h-8 w-8 text-magenta-500" aria-hidden="true" />
          <span className="font-display text-2xl uppercase tracking-wider text-white">Arena</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <a href="#pricing" className={cn(btnBrand, 'px-6 py-3 text-xs')}>
            Install Now
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded text-white/80 transition-colors hover:bg-white/10 hover:text-white"
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
            aria-label={open ? 'Close mobile menu' : 'Open mobile menu'}
            className="flex h-10 w-10 items-center justify-center rounded text-white/80 transition-colors hover:bg-white/10 hover:text-white"
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
          'border-t border-white/10 bg-navy-950 px-6 py-6 lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-base font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#pricing"
          onClick={() => setOpen(false)}
          className={cn(btnBrand, 'mt-4 block px-6 py-3 text-center text-xs')}
        >
          Install Now
        </a>
      </div>
    </header>
  )
}
