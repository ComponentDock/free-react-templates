import { useState } from 'react'
import { ChevronDown, MapPin, Menu, Moon, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, CHROME, CITY, HERO, NAV_LINKS, PRODUCT_MENU } from '../content'
import { useTheme } from '../lib/theme'
import { ActionLink, Container, Logo, PhonePill } from './ui'

interface HeaderProps {
  /** The sticky bar gains its shadow past 50 px of scroll. */
  readonly lifted: boolean
}

/**
 * White sticky bar: droplet wordmark, four labels from 1280 px up (Products is
 * a hover dropdown of the catalogue), a phone pill from 768 px, a city pill
 * only from 1536 px, the theme toggle, the sage CTA from 1280 px and a burger
 * below that.
 */
export function Header({ lifted }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const { isDark, toggle } = useTheme()

  return (
    <header
      data-header
      className={cn(
        'sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur-[16px] transition-shadow dark:border-gray-800 dark:bg-gray-950/90',
        lifted && 'shadow-lg',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-3 xl:h-20">
        <a href="#top" aria-label={`${BRAND} home`} className="min-w-0 shrink-0">
          <Logo brand={BRAND} />
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 xl:flex"
          data-desktop-nav
        >
          <div className="group relative">
            <a
              href="#products"
              className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold leading-5 text-ink-600 transition-colors hover:text-primary-700 dark:text-gray-300 dark:hover:text-primary-300"
            >
              Products
              <ChevronDown
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:rotate-180"
              />
            </a>
            <div
              data-products-menu
              className="invisible absolute left-0 top-full z-10 w-56 rounded-xl border border-ink-100 bg-white p-2 opacity-0 shadow-md transition-all group-hover:visible group-hover:opacity-100 dark:border-gray-800 dark:bg-gray-900"
            >
              {PRODUCT_MENU.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-50 hover:text-primary-700 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-sm font-semibold leading-5 text-ink-600 transition-colors hover:text-primary-700 dark:text-gray-300 dark:hover:text-primary-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-800 transition-colors hover:border-primary-500 hover:text-primary-700 2xl:inline-flex dark:border-gray-700 dark:text-gray-200"
          >
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            {CITY}
          </a>

          <PhonePill className="hidden md:inline-flex" />

          <button
            type="button"
            onClick={toggle}
            aria-label={CHROME.darkToggle}
            aria-pressed={isDark}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-600 transition-colors hover:bg-ink-50 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {isDark ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <ActionLink href="#quiz" size="sm" className="hidden xl:inline-flex">
            {HERO.primaryCta}
          </ActionLink>

          <button
            type="button"
            aria-label={open ? CHROME.menuClose : CHROME.menuOpen}
            aria-expanded={open}
            data-mobile-toggle
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-600 transition-colors hover:bg-ink-50 xl:hidden dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {open && (
        <div
          data-mobile-menu
          className="border-t border-ink-100 bg-white px-4 py-4 xl:hidden dark:border-gray-800 dark:bg-gray-950"
        >
          <button
            type="button"
            aria-expanded={productsOpen}
            onClick={() => setProductsOpen(!productsOpen)}
            className="flex w-full items-center justify-between py-2 text-base font-semibold text-ink-800 dark:text-white"
          >
            Products
            <ChevronDown
              aria-hidden="true"
              className={cn(
                'h-4 w-4 transition-transform dark:text-gray-300',
                productsOpen && 'rotate-180',
              )}
            />
          </button>
          {productsOpen && (
            <div data-mobile-products className="pb-1 pl-4">
              {PRODUCT_MENU.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-ink-600 dark:text-gray-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-base font-semibold text-ink-800 dark:text-white"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-ink-100 pt-3 dark:border-gray-800">
            <PhonePill />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-800 dark:border-gray-700 dark:text-gray-200"
            >
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {CITY}
            </a>
            <ActionLink href="#quiz" size="sm" className="w-full">
              {HERO.primaryCta}
            </ActionLink>
          </div>
        </div>
      )}
    </header>
  )
}
