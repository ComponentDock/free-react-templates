import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

const socials = [
  { label: 'Facebook', name: 'facebook' as const },
  { label: 'Twitter', name: 'twitter' as const },
  { label: 'LinkedIn', name: 'linkedin' as const },
] as const

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
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur transition-colors dark:border-gray-800 dark:bg-gray-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="text-xl font-bold text-ink dark:text-white">
          Finflow<span className="text-brand">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-mist transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded text-mist transition-colors hover:text-brand dark:text-gray-400"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setDark((c) => !c)}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-mist transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-300"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setOpen((c) => !c)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-mist lg:hidden dark:border-gray-700 dark:text-gray-300"
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
          aria-label="Mobile"
          className="border-t border-gray-100 bg-white/95 px-4 py-3 dark:border-gray-800 dark:bg-gray-950/95 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-mist transition-colors hover:text-brand dark:text-gray-300"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded text-mist hover:text-brand"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
