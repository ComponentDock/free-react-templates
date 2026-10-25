import { useState } from 'react'
import { MapPin, Menu, Moon, Phone, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { header, nav, site } from '../content'
import { useScrollMetrics } from '../lib/scroll'
import { useTheme } from '../lib/theme'
import { Logo } from './Logo'
import { ActionLink, containerClass } from './ui'

const pillClass =
  'hidden items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm leading-5 text-ink-600 transition-colors hover:border-primary-600 hover:text-primary-700 dark:border-gray-700 dark:text-gray-300'

/**
 * 81 px at `lg`, 65 px below. The seven-link nav appears only from 1280 px —
 * this design's one unusual breakpoint, so a tablet gets the panel too.
 */
export function Header() {
  const { shadow } = useScrollMetrics()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <header
      data-header=""
      className={cn(
        'sticky top-0 z-50 w-full border-b border-ink-100 bg-white/90 backdrop-blur-lg transition-shadow dark:border-gray-800 dark:bg-gray-950/90',
        shadow && 'shadow-lg',
      )}
    >
      <div className={cn(containerClass, 'flex h-16 items-center justify-between gap-4 lg:h-20')}>
        <a href="#main-content" className="shrink-0" aria-label={`${site.name} home`}>
          <Logo className="hidden dark:block" variant="light" />
          <Logo className="dark:hidden" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm leading-5 font-semibold text-ink-600 transition-colors hover:text-primary-700 dark:text-gray-300 dark:hover:text-primary-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={header.location.href} className={cn(pillClass, '2xl:inline-flex')}>
            <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
            {header.location.label}
          </a>
          <a href={site.phoneHref} className={cn(pillClass, 'md:inline-flex')} data-phone="">
            <Phone aria-hidden="true" className="h-3.5 w-3.5" />
            {site.phone}
          </a>
          <button
            type="button"
            aria-label={header.themeToggle}
            onClick={toggle}
            className="rounded-lg p-2 text-ink-600 transition-colors hover:bg-ink-50 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {theme === 'dark' ? (
              <Sun aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Moon aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
          <ActionLink href="#contact" className="hidden px-5 py-2.5 xl:inline-flex">
            {header.cta}
          </ActionLink>
          <button
            type="button"
            aria-label={open ? header.closeMenu : header.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="rounded-lg p-2 text-ink-600 transition-colors hover:bg-ink-50 xl:hidden dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {open ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" data-mobile-menu="" className="border-t border-ink-100 xl:hidden dark:border-gray-800">
          <nav aria-label="Mobile" className={cn(containerClass, 'flex flex-col py-2')}>
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold text-ink-700 dark:text-gray-200"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-ink-100 pt-4 pb-4 dark:border-gray-800">
              <a
                href={site.phoneHref}
                data-phone=""
                className="flex items-center gap-2 text-sm font-semibold text-ink-600 dark:text-gray-300"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                {site.phone}
              </a>
              <a
                href={header.location.href}
                className="flex items-center gap-2 text-sm font-semibold text-ink-600 dark:text-gray-300"
              >
                <MapPin aria-hidden="true" className="h-4 w-4" />
                {header.location.label}
              </a>
              <ActionLink href="#contact" className="mt-1 w-full py-3">
                {header.cta}
              </ActionLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
