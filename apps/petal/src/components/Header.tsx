import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Moon, Search, Sun, X } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'
import {
  brandName,
  contactEmail,
  homeDropdown,
  menuCloseLabel,
  menuOpenLabel,
  navLinks,
  searchLabel,
  tagline,
  welcomeMessage,
} from '../data'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'Pinterest', name: 'pinterest' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [homeOpen, setHomeOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem('petal-theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('petal-theme', dark ? 'dark' : 'light')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="border-b border-line bg-white dark:border-gray-800 dark:bg-gray-900">
      {/* Thin italic top strip: welcome + email + socials + search */}
      <div className="border-b border-line bg-white text-[13px] italic text-muted dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
        <div className="mx-auto flex h-11 max-w-6xl items-center justify-between gap-4 px-4">
          <ul className="hidden items-center gap-3 md:flex">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#home"
                  aria-label={social.label}
                  className="text-faint transition-colors hover:text-brand dark:text-gray-500 dark:hover:text-brand"
                >
                  <BrandIcon name={social.name} className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
          <p className="truncate">
            {welcomeMessage}
            <span aria-hidden="true" className="mx-1">
              ·
            </span>
            <a href={`mailto:${contactEmail}`} className="transition-colors hover:text-brand">
              {contactEmail}
            </a>
          </p>
          <button
            type="button"
            aria-label={searchLabel}
            className="text-faint transition-colors hover:text-brand dark:text-gray-500 dark:hover:text-brand"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Centered logo row with tagline */}
      <div className="border-b border-line bg-white text-center dark:border-gray-800 dark:bg-gray-900">
        <a href="#home" aria-label={`${brandName} home`} className="inline-block px-4 py-5">
          <span className="block font-display text-4xl font-semibold tracking-wide text-ink dark:text-white">
            {brandName}
          </span>
          <span className="mt-1 block text-[11px] font-medium tracking-[0.35em] text-muted dark:text-gray-400">
            {tagline}
          </span>
        </a>
      </div>

      {/* Main nav */}
      <nav aria-label="Main" className="bg-white dark:bg-gray-900">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <div className="hidden items-center md:flex">
            <div className="relative">
              <a
                href="#home"
                className="inline-flex h-14 items-center gap-1 px-5 font-display text-sm font-medium text-ink transition-colors hover:bg-section dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Home
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <button
                type="button"
                aria-expanded={homeOpen}
                aria-haspopup="true"
                aria-label="Home dropdown"
                onClick={() => setHomeOpen((value) => !value)}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
              {homeOpen ? (
                <ul className="absolute left-0 top-full z-40 w-44 border border-line bg-white py-2 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                  {homeDropdown.map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setHomeOpen(false)}
                        className="block px-5 py-2 text-sm text-body transition-colors hover:bg-section hover:text-brand dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            {navLinks.slice(1).map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="inline-flex h-14 items-center px-5 font-display text-sm font-medium text-ink transition-colors hover:bg-section dark:text-gray-200 dark:hover:bg-gray-800"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:ml-auto">
            <button
              type="button"
              onClick={() => setDark((value) => !value)}
              aria-label="Toggle dark mode"
              className="rounded-full p-2 text-muted transition-colors hover:bg-section hover:text-ink dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              {dark ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? menuCloseLabel : menuOpenLabel}
              className="rounded p-2 text-muted transition-colors hover:bg-section hover:text-ink dark:text-gray-400 dark:hover:bg-gray-800 md:hidden"
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {menuOpen ? (
          <div className="border-t border-line bg-white px-4 pb-4 pt-2 dark:border-gray-800 dark:bg-gray-900 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded px-3 py-2 font-display text-sm font-medium text-ink transition-colors hover:bg-section dark:text-gray-200 dark:hover:bg-gray-800"
              >
                {link}
              </a>
            ))}
            {homeDropdown.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded px-6 py-2 text-sm text-body transition-colors hover:bg-section hover:text-brand dark:text-gray-300 dark:hover:bg-gray-800"
              >
                {item}
              </a>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  )
}
