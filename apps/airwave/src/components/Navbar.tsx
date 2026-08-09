import { useEffect, useState } from 'react'
import { Menu, Moon, Radio, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Episodes', href: '#episodes' },
  { label: 'About', href: '#about' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Newsletter', href: '#newsletter' },
  { label: 'Sponsorships', href: '#sponsors' },
  { label: 'Blog', href: '#episodes' },
  { label: 'Release Notes', href: '#newsletter' },
  { label: 'Contact', href: '#contact' },
] as const

export const DARK_KEY = 'airwave-dark'

export function Navbar() {
  const [open, setOpen] = useState(false)
  // Dark is the DEFAULT experience (the demo ships dark-first); the stored
  // value '0' opts into light mode.
  const [dark, setDark] = useState(() => window.localStorage.getItem(DARK_KEY) !== '0')

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
    <header className="sticky top-0 z-40 border-b border-gray-800 bg-gray-950/80 backdrop-blur-lg">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Airwave home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white">
            <Radio className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-xl font-extrabold tracking-tight text-white">Airwave</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-gray-300 transition-colors hover:text-primary-400"
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
            className="rounded-full p-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <a
            href="#episodes"
            className="hidden rounded-full bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-500 sm:inline-block"
          >
            Listen Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
            className="rounded-full p-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white lg:hidden"
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
          'border-t border-gray-800 bg-gray-950 px-4 py-6 lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-white transition-colors hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#episodes"
            onClick={() => setOpen(false)}
            className="rounded-full bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-primary-500"
          >
            Listen Now
          </a>
        </div>
      </div>
    </header>
  )
}
