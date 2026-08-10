import { useEffect, useState } from 'react'
import { Menu, Moon, Search, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BrandIcon } from './BrandIcon'
import {
  brandName,
  darkModeLabel,
  loginLabel,
  menuToggleLabel,
  navLinks,
  registerLabel,
  searchLabel,
  socialLabels,
  socialLinks,
  tagline,
} from '../data'

const sectionHref = (label: string): string => `#${label.toLowerCase()}`

export function Header() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem('feast-theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('feast-theme', dark ? 'dark' : 'light')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="bg-white dark:bg-gray-950">
      {/* Hot-pink utility bar: social icons left, Register/Login right */}
      <div className="bg-primary text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-5">
            {socialLinks.map((name) => (
              <a
                key={name}
                href="#home"
                aria-label={socialLabels[name]}
                className="transition-opacity hover:opacity-75"
              >
                <BrandIcon name={name} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <a href="#home" className="transition-opacity hover:opacity-75">
              {registerLabel}
            </a>
            <span aria-hidden="true">/</span>
            <a href="#home" className="transition-opacity hover:opacity-75">
              {loginLabel}
            </a>
          </div>
        </div>
      </div>

      {/* White bar: logo + tagline, nav, search, dark toggle */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 lg:py-9">
        <a href="#home" className="flex flex-col leading-none">
          <span className="text-3xl font-bold text-primary">{brandName}</span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[3px] text-meta">
            {tagline}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((label) => (
            <a
              key={label}
              href={sectionHref(label)}
              className="px-5 py-1 text-[15px] font-medium text-ink transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label={searchLabel}
            className="flex h-[37px] w-[34px] items-center justify-center rounded-[4px] bg-primary text-white transition-colors hover:bg-primary/90"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={darkModeLabel}
            className="rounded-full p-2 text-ink transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
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
            aria-expanded={open}
            aria-label={menuToggleLabel}
            className="rounded p-2 text-ink dark:text-gray-300 lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav aria-label="Mobile" className={cn('lg:hidden', open ? 'block' : 'hidden')}>
        <ul className="space-y-1 border-t border-gray-100 px-4 pb-6 pt-2 dark:border-gray-800">
          {navLinks.map((label) => (
            <li key={label}>
              <a
                href={sectionHref(label)}
                onClick={() => setOpen(false)}
                className="block rounded px-3 py-2 text-sm font-medium text-ink hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-900"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
