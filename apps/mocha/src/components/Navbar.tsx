import { useEffect, useState } from 'react'
import { Coffee, Moon, Sun } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const links = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Process', href: '#process' },
  { label: 'Shop', href: '#shop' },
] as const

export function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100 bg-primary-50/80 backdrop-blur-lg transition-all dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#menu"
          className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white">
            <Coffee className="h-4 w-4" aria-hidden="true" />
          </span>
          Mocha
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary-700 dark:text-gray-300 dark:hover:text-primary-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="#join" size="sm" className="rounded-full px-5">
            Order Online
          </ButtonLink>

          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-primary-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
