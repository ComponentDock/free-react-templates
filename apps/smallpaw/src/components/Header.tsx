import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV_LINKS } from '../data'
import { Wordmark } from './Wordmark'

const SPY_IDS = ['out-of-hours', 'species', 'health-plans', 'fees'] as const

/**
 * Sticky translucent header: the wordmark, eight labels from `lg`, the solid
 * CTA from `lg`, the shadow past 50 px, and a scroll-spy over the four bands
 * that exist on this page. `About` and `Blog` have no page to point at, so they
 * render as `aria-disabled` text rather than dead links.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )

    SPY_IDS.forEach((id) => {
      const element = document.getElementById(id)
      if (element !== null) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header
      data-testid="site-header"
      className={cn(
        'sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-shadow',
        scrolled ? 'shadow-lg' : 'shadow-none',
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 lg:h-20 lg:px-8">
        <a href="#top" aria-label="Smallpaw home" className="flex shrink-0 items-center">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) =>
            link.target === null ? (
              <span
                key={link.label}
                aria-disabled="true"
                className="cursor-default text-sm font-medium text-gray-400"
              >
                {link.label}
              </span>
            ) : (
              <a
                key={link.label}
                href={link.target}
                aria-current={active === link.spy ? 'true' : undefined}
                className={cn(
                  'text-sm font-medium whitespace-nowrap text-gray-600 transition-colors hover:text-primary-600',
                  active === link.spy ? 'nav-active' : '',
                )}
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 lg:inline-flex"
          >
            Register your pet
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
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
        <div id="mobile-menu" className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="px-4 py-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) =>
              link.target === null ? (
                <span
                  key={link.label}
                  aria-disabled="true"
                  className="block py-3 text-base font-medium text-gray-400"
                >
                  {link.label}
                </span>
              ) : (
                <a
                  key={link.label}
                  href={link.target}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-gray-800"
                >
                  {link.label}
                </a>
              ),
            )}
            <div className="mt-4 border-t border-gray-200 pt-4">
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Register your pet
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
