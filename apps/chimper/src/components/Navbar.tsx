import { useEffect, useState } from 'react'
import { ChevronDown, Moon, Sun } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

const serviceLinks = [
  'Web Applications',
  'WordPress Dev',
  'Mobile Applications',
  'eCommerce',
] as const

export function Navbar() {
  const [dark, setDark] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="font-display text-2xl font-bold tracking-wide text-black dark:text-white"
        >
          Chimper
        </a>

        <div className="flex items-center gap-4">
          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-black transition-colors hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400"
              >
                {link.label}
              </a>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen((open) => !open)}
                aria-expanded={servicesOpen}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-black transition-colors hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400"
              >
                Services
                <ChevronDown
                  className={cn('h-4 w-4 transition-transform', servicesOpen && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>
              {servicesOpen && (
                <ul className="absolute left-0 top-full mt-2 w-52 rounded-md border border-gray-100 bg-white py-2 shadow-lg dark:border-gray-700 dark:bg-gray-900">
                  {serviceLinks.map((service) => (
                    <li key={service}>
                      <a
                        href="#services"
                        className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-primary-400"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>

          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
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
