import { useEffect, useState } from 'react'
import { Bot, Menu, Moon, Sun, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

const links = [
  { label: 'Platform', href: '#platform' },
  { label: 'Pricing', href: '#faq' },
  { label: 'Integrations', href: '#platform' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white">
            <Bot className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Cortex
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href="#contact"
            className="hidden rounded-lg px-4 py-2 text-sm sm:inline-flex"
          >
            Start Building
          </ButtonLink>

          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
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
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 lg:hidden"
        >
          <ul className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-primary-400',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <ButtonLink
                href="#contact"
                className="w-full rounded-lg px-4 py-2.5 text-center text-sm"
                onClick={() => setOpen(false)}
              >
                Start Building
              </ButtonLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
