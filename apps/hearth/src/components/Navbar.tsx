import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV_LINKS } from '../data'

const SCROLL_THRESHOLD = 80

/**
 * Navbar — transparent, absolutely positioned over the hero at the top of
 * the page (source `.ftco_navbar`); after scrolling past the hero it becomes
 * a fixed white bar with a soft shadow (`.scrolled` state). The brand sits
 * left, the six links right with the current section in brand red, and a
 * "Menu" toggle expands the links on narrow viewports.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'absolute inset-x-0 top-5 z-30 transition-all duration-300',
        scrolled && 'fixed top-0 bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
      >
        <a href="#home" className="text-2xl font-bold tracking-wide text-ink">
          Hearth
        </a>
        <ul
          className={cn(
            'absolute left-0 right-0 top-full hidden flex-col gap-1 bg-white px-4 py-4 shadow-lg lg:static lg:flex lg:flex-row lg:items-center lg:bg-transparent lg:p-0 lg:shadow-none',
            open && 'flex',
          )}
        >
          {NAV_LINKS.map((link, index) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-current={index === 0 ? 'page' : undefined}
                className={cn(
                  'block px-4 py-2 text-sm font-normal text-ink transition-colors hover:text-brand lg:py-1',
                  index === 0 && 'text-brand',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="rounded-md p-2 text-ink transition-colors hover:text-brand lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>
    </header>
  )
}
