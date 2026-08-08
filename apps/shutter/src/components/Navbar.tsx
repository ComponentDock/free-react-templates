import { useEffect, useState } from 'react'
import { Camera, Menu, Moon, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Gallery', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
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
    <header className="fixed left-0 right-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm dark:bg-gray-950/95">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Shutter home">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-900 text-white">
            <Camera className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Shutter
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-gray-700 transition-colors hover:text-accent-600 dark:text-gray-300"
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
            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full border border-primary-900 px-5 py-2.5 text-sm font-medium uppercase tracking-wider text-primary-900 transition-colors hover:bg-primary-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-900 lg:inline-flex"
          >
            Book a Session
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
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
          'border-t border-gray-200 bg-white px-4 py-6 dark:border-gray-800 dark:bg-gray-950 lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-accent-600 dark:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-primary-900 px-5 py-2.5 text-center text-sm font-medium uppercase tracking-wider text-primary-900 transition-colors hover:bg-primary-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-900"
          >
            Book a Session
          </a>
        </div>
      </div>
    </header>
  )
}
