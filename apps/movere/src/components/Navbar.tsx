import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, Truck, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Areas', href: '#areas' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Quote', href: '#quote' },
  { label: 'Contact', href: '#contact' },
] as const

export const DARK_KEY = 'movere-dark'

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

  useEffect(() => {
    if (!open) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/95">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Movere home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-white">
            <Truck className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Movere
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle dark mode"
            className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <a
            href="#quote"
            className="hidden rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600 sm:inline-block"
          >
            Free Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
            className="rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
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
          'border-t border-gray-100 bg-white px-4 py-6 dark:border-gray-800 dark:bg-gray-950 lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-gray-900 transition-colors hover:text-primary-600 dark:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="rounded-full bg-accent-500 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-600"
          >
            Free Quote
          </a>
        </div>
      </div>
    </header>
  )
}
