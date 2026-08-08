import { useEffect, useState } from 'react'
import { Heart, Menu, Moon, Sun, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Packages', href: '#packages' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#' },
  { label: 'Gallery', href: '#' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem('vows-theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('vows-theme', dark ? 'dark' : 'light')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <nav
      aria-label="Main navigation"
      className="border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all dark:border-gray-800 dark:bg-gray-950/80"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 font-serif text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white">
            <Heart className="h-4 w-4" aria-hidden="true" />
          </span>
          Vows
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-primary-400"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <ButtonLink
            href="#contact"
            className="hidden rounded-full bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 sm:inline-flex"
          >
            Start Planning
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary-600 lg:hidden dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-primary-400',
            )}
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
          'border-t border-gray-200 bg-white px-4 pb-4 lg:hidden dark:border-gray-800 dark:bg-gray-950',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col gap-1 pt-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:text-white dark:hover:bg-gray-800 dark:hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-3">
          <ButtonLink
            href="#contact"
            onClick={() => setOpen(false)}
            className="block w-full rounded-full bg-primary-600 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            Start Planning
          </ButtonLink>
        </div>
      </div>
    </nav>
  )
}
