import { useEffect, useState } from 'react'
import { Cross, Menu, Moon, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Events', href: '#events' },
  { label: 'Ministries', href: '#ministries' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem('sanctuary-dark') === '1')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('sanctuary-dark', dark ? '1' : '0')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header
      data-variant={scrolled ? 'solid' : 'transparent'}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm dark:bg-gray-950/95' : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-3" aria-label="Sanctuary home">
          <span
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full transition-colors',
              scrolled
                ? 'bg-primary-600 text-white'
                : 'border border-white/30 bg-white/10 text-white',
            )}
          >
            <Cross className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                'block text-xl font-bold tracking-tight',
                scrolled ? 'text-gray-900 dark:text-white' : 'text-white',
              )}
            >
              Sanctuary
            </span>
            <span
              className={cn(
                'block text-xs font-medium',
                scrolled ? 'text-gray-500 dark:text-gray-400' : 'text-primary-100',
              )}
            >
              Love God. Love People.
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
                scrolled
                  ? 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                  : 'text-primary-100 hover:text-white',
              )}
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
            className={cn(
              'rounded-lg p-2 transition-colors',
              scrolled
                ? 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                : 'text-white hover:bg-white/10',
            )}
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <a
            href="#contact"
            className={cn(
              'hidden rounded-full border px-5 py-2.5 text-sm font-medium transition-colors lg:inline-flex',
              scrolled
                ? 'border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800'
                : 'border-white/30 text-white hover:bg-white/10',
            )}
          >
            Give
          </a>

          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-100 lg:inline-flex"
          >
            Plan Your Visit
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
            className={cn(
              'rounded-lg p-2 transition-colors lg:hidden',
              scrolled
                ? 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                : 'text-white hover:bg-white/10',
            )}
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
          'border-t border-primary-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-950 lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-gray-900 transition-colors hover:text-primary-600 dark:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-primary-600 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            Plan Your Visit
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full border-2 border-primary-600 px-5 py-3 text-center text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400"
          >
            Give
          </a>
        </div>
      </div>
    </header>
  )
}
