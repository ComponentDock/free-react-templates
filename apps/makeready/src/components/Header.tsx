import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV, SPY_IDS } from '../content'
import { useScrollSpy } from '../lib/motion'
import { useScrollMetrics } from '../lib/scroll'
import { useTheme } from '../lib/theme'
import { Wordmark } from './Logo'
import { ActionLink, containerClass } from './ui'

const NAV_CLASS =
  'text-sm leading-5 font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'

/** Sticky, 65 px below `lg` and 81 px at it, opaque enough to read over the hero. */
export function Header() {
  const { shadow } = useScrollMetrics()
  const { theme, toggle } = useTheme()
  const active = useScrollSpy(SPY_IDS)
  const [menuOpen, setMenuOpen] = useState(false)
  const dark = theme === 'dark'

  return (
    <header
      data-header
      className={cn(
        'sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-shadow dark:border-gray-800 dark:bg-gray-950/80',
        shadow ? 'shadow-lg' : '',
      )}
    >
      <div className={cn(containerClass, 'flex h-16 items-center justify-between gap-6 lg:h-20')}>
        <Wordmark />

        <nav aria-label="Sections" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.spy && active === item.href.slice(1) ? 'true' : undefined}
              className={cn(
                NAV_CLASS,
                item.spy && active === item.href.slice(1)
                  ? 'text-gray-900 dark:text-white'
                  : undefined,
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            data-testid="theme-toggle"
            aria-label={dark ? 'Switch to the light theme' : 'Switch to the dark theme'}
            className="grid h-9 w-9 place-items-center rounded-lg text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            {dark ? (
              <Sun aria-hidden="true" className="h-4 w-4" />
            ) : (
              <Moon aria-hidden="true" className="h-4 w-4" />
            )}
          </button>

          <ActionLink href="#contact" variant="header" className="hidden sm:inline-flex">
            Start a project
          </ActionLink>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close the menu' : 'Open the menu'}
            className="grid h-9 w-9 place-items-center rounded-lg text-gray-700 lg:hidden dark:text-gray-200"
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
          className="border-t border-gray-200 bg-white lg:hidden dark:border-gray-800 dark:bg-gray-950"
        >
          <nav aria-label="Sections, mobile" className={cn(containerClass, 'flex flex-col py-2')}>
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base leading-6 text-gray-700 dark:text-gray-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 mb-3 inline-flex w-full items-center justify-center rounded-lg bg-primary-600 px-5 py-3 text-sm font-medium text-white"
            >
              Start a project
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
