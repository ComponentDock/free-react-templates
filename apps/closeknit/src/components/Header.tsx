import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV_LINKS, SPY_IDS } from '../content'
import { useScrollSpy } from '../lib/useScrollSpy'
import { Wordmark } from './Wordmark'

/**
 * Sticky translucent header: eight links and one solid CTA above `lg`, a
 * disclosure below it. A shadow is added past 50 px of scroll, and the nav
 * item for the band in view carries `aria-current="page"` plus the reference's
 * ink/600 weight treatment.
 */
export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(SPY_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all',
        scrolled && 'shadow-lg',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8">
        <a href="#top" aria-label="Closeknit home">
          <Wordmark />
        </a>

        <nav aria-label="Main navigation" className="hidden lg:flex lg:items-center lg:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={active === link.id ? 'page' : undefined}
              className={cn(
                'text-sm font-medium transition-colors hover:text-gray-900',
                active === link.id ? 'font-semibold text-gray-900' : 'text-gray-600',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#pricing"
            className="hidden rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 sm:inline-flex"
          >
            Create your circle
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
            className="rounded-lg p-2 text-gray-600 lg:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-200 bg-white px-4 py-4 lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              Create your circle
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
