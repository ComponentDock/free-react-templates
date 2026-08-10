import { useEffect, useState } from 'react'
import { Menu, Moon, Search, Sun, X } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'
import {
  brandName,
  menuCloseLabel,
  menuOpenLabel,
  navLinks,
  searchLabel,
  toggleDarkLabel,
} from '../data'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'Pinterest', name: 'pinterest' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem('ochre-theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('ochre-theme', dark ? 'dark' : 'light')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a
          href="#top"
          aria-label={brandName}
          className="font-display text-2xl font-bold text-ink transition-colors hover:text-brand dark:text-white dark:hover:text-brand"
        >
          {brandName}
        </a>

        <nav aria-label="Main" className="hidden items-center md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#top"
              aria-current={link === 'Home' ? 'page' : undefined}
              className="inline-flex h-16 items-center px-5 font-display text-sm font-medium text-ink transition-colors hover:bg-soft hover:text-brand dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-brand"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label={searchLabel}
            className="rounded-full p-2 text-body transition-colors hover:bg-soft hover:text-brand dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-brand"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={toggleDarkLabel}
            className="rounded-full p-2 text-body transition-colors hover:bg-soft hover:text-brand dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-brand"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <ul className="hidden items-center gap-3 border-l border-line pl-3 lg:flex">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#top"
                  aria-label={social.label}
                  className="text-body transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-brand"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? menuCloseLabel : menuOpenLabel}
            className="rounded p-2 text-body transition-colors hover:bg-soft hover:text-brand dark:text-gray-400 dark:hover:bg-gray-800 md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          aria-label="Mobile"
          className="border-t border-line bg-white px-4 pb-4 pt-2 dark:border-gray-800 dark:bg-gray-900 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href="#top"
              onClick={() => setMenuOpen(false)}
              className="block rounded px-3 py-2 font-display text-sm font-medium text-ink transition-colors hover:bg-soft hover:text-brand dark:text-gray-200 dark:hover:bg-gray-800"
            >
              {link}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}
