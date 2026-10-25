import { useState } from 'react'
import { MapPin, Menu, Moon, Phone, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV, site } from '../content'
import { useScrollMetrics } from '../lib/scroll'
import { useTheme } from '../lib/theme'
import { containerClass } from './ui'

export function Wordmark({ light = false, large = false }: { light?: boolean; large?: boolean }) {
  return (
    <a href="#top" aria-label={`${site.name} home`} className="inline-flex items-center gap-2.5">
      <span
        className={cn(
          'grid place-items-center rounded-lg',
          large ? 'h-10 w-10' : 'h-8 w-8 lg:h-9 lg:w-9',
          light
            ? 'bg-primary-500 text-ink-900'
            : 'bg-ink-900 text-primary-400 dark:bg-primary-500 dark:text-ink-900',
        )}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path
            d="M6 18V6l12 12V6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            'block font-bold tracking-[-0.5px]',
            large ? 'text-xl' : 'text-lg',
            light ? 'text-white' : 'text-ink-900 dark:text-white',
          )}
        >
          {site.name}
        </span>
        <span
          className={cn(
            'block text-[11px] font-semibold tracking-[0.6px] uppercase',
            light ? 'text-gray-400' : 'text-ink-400',
          )}
        >
          {site.descriptor}
        </span>
      </span>
    </a>
  )
}

const LABEL_CLASS =
  'text-sm leading-5 font-semibold text-ink-600 transition-colors hover:text-primary-700 dark:text-gray-300'

export function Header() {
  const { theme, toggle } = useTheme()
  const { shadow } = useScrollMetrics()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      data-header
      className={cn(
        'sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur-lg transition-shadow dark:border-gray-800 dark:bg-gray-950/90',
        shadow ? 'shadow-lg' : '',
      )}
    >
      <div className={cn(containerClass, 'flex h-16 items-center justify-between gap-4 lg:h-20')}>
        <Wordmark />

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={LABEL_CLASS}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#areas"
            className="hidden items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-600 2xl:inline-flex dark:border-gray-700 dark:text-gray-300"
          >
            <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
            {site.city}
          </a>

          <a
            href={site.phoneHref}
            className="hidden items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-600 md:inline-flex dark:border-gray-700 dark:text-gray-300"
          >
            <Phone aria-hidden="true" className="h-3.5 w-3.5" />
            {site.phone}
          </a>

          <button
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink-600 transition-colors hover:bg-ink-50 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {theme === 'dark' ? (
              <Sun aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Moon aria-hidden="true" className="h-5 w-5" />
            )}
          </button>

          <a
            href="#proposal"
            className="hidden rounded-lg bg-primary-500 px-5 py-2.5 text-sm leading-5 font-bold text-ink-900 transition-colors hover:bg-primary-400 xl:inline-flex"
          >
            Request a proposal
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close the menu' : 'Open the menu'}
            className="grid h-10 w-10 place-items-center rounded-lg border border-ink-200 text-ink-700 xl:hidden dark:border-gray-700 dark:text-gray-200"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          data-testid="mobile-menu"
          className="border-t border-ink-100 bg-white xl:hidden dark:border-gray-800 dark:bg-gray-950"
        >
          <div className={cn(containerClass, 'flex flex-col gap-1 py-4')}>
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base font-semibold text-ink-800 dark:text-gray-100"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-600 dark:border-gray-700 dark:text-gray-300"
              >
                <Phone aria-hidden="true" className="h-3.5 w-3.5" />
                {site.phone}
              </a>
              <a
                href="#areas"
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-600 dark:border-gray-700 dark:text-gray-300"
              >
                <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
                {site.city}
              </a>
            </div>
            <a
              href="#proposal"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-primary-500 px-5 py-3 text-sm font-bold text-ink-900"
            >
              Request a proposal
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
