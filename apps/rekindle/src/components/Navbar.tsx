import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { leftLinks, rightLinks, siteName } from '../data'
import { cn } from '@free-react-templates/ui'

const navLinkClass = (active: boolean) =>
  cn(
    'font-serif text-sm font-bold italic text-black transition-colors hover:text-ink',
    active && 'text-ink',
  )

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-3 px-4 py-4 sm:px-6 md:grid-cols-3"
      >
        <ul className="hidden items-center justify-start gap-8 md:flex">
          {leftLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                aria-current={link === 'Home' ? 'page' : undefined}
                className={navLinkClass(link === 'Home')}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="justify-self-center font-serif text-2xl font-bold tracking-wide text-ink"
        >
          {siteName}
        </a>
        <div className="hidden items-center justify-end gap-8 md:flex">
          {rightLinks.map((link) => (
            <a key={link} href="#" className={navLinkClass(false)}>
              {link}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="justify-self-end text-ink md:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-black/10 px-4 pb-4 md:hidden">
          {[...leftLinks, ...rightLinks].map((link) => (
            <li key={link}>
              <a
                href="#"
                aria-current={link === 'Home' ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className={cn('block py-2', navLinkClass(link === 'Home'))}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
