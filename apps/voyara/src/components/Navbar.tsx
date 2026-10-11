import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Service', href: '#service' },
  { label: 'Book', href: '#book' },
] as const

/* White header bar: bold wordmark on the left, hamburger toggle on the
   right. The stuck variant gains a soft offset drop shadow once the page
   scrolls. Desktop shows no link row — the four anchors live in the
   toggled panel. */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-white transition-shadow duration-300',
        scrolled && 'shadow-[0_10px_30px_0_rgba(158,158,158,0.3)]',
      )}
    >
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-4 py-5">
        <a
          href="#home"
          className="text-[24px] font-bold uppercase tracking-[2px] text-ink"
          onClick={() => setOpen(false)}
        >
          voyara
        </a>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="voyara-menu"
          onClick={() => setOpen((previous) => !previous)}
          className="text-ink transition-colors hover:text-pink focus-visible:ring-2 focus-visible:ring-pink"
        >
          {open ? (
            <Menu className="h-6 w-6" aria-hidden="true" />
          ) : (
            <X className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? (
        <nav id="voyara-menu" aria-label="Sections" className="border-t border-black/5 bg-white">
          <ul className="mx-auto max-w-[1140px] px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-ink transition-colors hover:text-pink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
