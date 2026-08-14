import { useEffect, useState } from 'react'
import { Flame, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-dark">
            <Flame className="h-5 w-5" aria-hidden="true" />
          </span>
          <span
            className={cn(
              'font-display text-xl font-bold uppercase tracking-wider transition-colors',
              scrolled ? 'text-dark' : 'text-white',
            )}
          >
            Slugger
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  'font-display text-sm font-medium uppercase tracking-wider transition-colors hover:text-brand',
                  scrolled ? 'text-dark' : 'text-white',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <a
            href="#games"
            className="rounded bg-dark px-5 py-2.5 font-display text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-brand"
          >
            Buy Ticket
          </a>
        </div>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={cn(
            'rounded p-2 transition-colors md:hidden',
            scrolled ? 'text-dark' : 'text-white',
          )}
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>
      {open ? (
        <div className="bg-white px-4 pb-6 pt-2 shadow-md md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-display text-sm font-medium uppercase tracking-wider text-dark transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#games"
            className="mt-4 inline-block rounded bg-dark px-5 py-2.5 font-display text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-brand"
          >
            Buy Ticket
          </a>
        </div>
      ) : null}
    </header>
  )
}
