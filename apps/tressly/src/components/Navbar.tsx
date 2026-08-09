import { useEffect, useState } from 'react'
import { Menu, Moon, Scissors, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem('tressly-dark') === '1')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('tressly-dark', dark ? '1' : '0')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/95">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Tressly">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-leaf-500 text-white">
            <Scissors className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-bold text-gray-900 dark:text-white">
            Tressly
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-gray-700 transition-colors hover:text-leaf-600 dark:text-gray-300 dark:hover:text-leaf-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle dark mode"
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
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
            aria-label="Toggle mobile menu"
            className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
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
          'border-t border-gray-100 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-950 md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <ul className="flex flex-col gap-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium uppercase tracking-wide text-gray-700 transition-colors hover:text-leaf-600 dark:text-gray-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
