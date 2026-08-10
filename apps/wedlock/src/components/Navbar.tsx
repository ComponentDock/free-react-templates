import { useEffect, useState } from 'react'
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const anchors = [
  { label: 'Our story', href: '#story' },
  { label: 'Photos', href: '#photos' },
  { label: 'When & Where', href: '#when-where' },
  { label: 'Events', href: '#events' },
] as const

const pageLinks = [
  'About Us',
  'Our Story',
  'RSVP Page',
  'Location',
  'Services',
  'Our Team',
  'FAQ',
  'Pricing',
  'Contacts',
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open && !pagesOpen) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setPagesOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, pagesOpen])

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur-lg dark:border-stone-800 dark:bg-stone-950/95'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      {/* Top contact/social row */}
      <div
        className={cn(
          'hidden items-center justify-end gap-6 border-b border-white/10 px-6 py-2 text-xs transition-colors sm:flex',
          scrolled ? 'border-stone-200 text-stone-500 dark:border-stone-800' : 'text-stone-300',
        )}
      >
        <a
          href="tel:+18408412569"
          className="flex items-center gap-1.5 transition-colors hover:text-accent-500"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          +1 840 841 25 69
        </a>
        <a
          href="mailto:hello@wedlock.example"
          className="flex items-center gap-1.5 transition-colors hover:text-accent-500"
        >
          <Mail className="h-3.5 w-3.5" aria-hidden="true" />
          hello@wedlock.example
        </a>
      </div>

      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-3" aria-label="Wedlock home">
          <span
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full border-2 font-serif text-lg font-bold transition-colors',
              scrolled
                ? 'border-stone-900 text-stone-900 dark:border-white dark:text-white'
                : 'border-white text-white',
            )}
          >
            W
          </span>
          <span
            className={cn(
              'font-serif text-xl font-bold tracking-tight transition-colors',
              scrolled ? 'text-stone-900 dark:text-white' : 'text-white',
            )}
          >
            Wedlock
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {anchors.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
                scrolled
                  ? 'text-stone-600 hover:text-accent-500 dark:text-stone-400 dark:hover:text-white'
                  : 'text-white/90 hover:text-white',
              )}
            >
              {link.label}
            </a>
          ))}

          {/* Pages dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setPagesOpen((value) => !value)}
              aria-expanded={pagesOpen}
              aria-haspopup="true"
              className={cn(
                'flex items-center gap-1 text-sm font-medium transition-colors',
                scrolled
                  ? 'text-stone-600 hover:text-accent-500 dark:text-stone-400 dark:hover:text-white'
                  : 'text-white/90 hover:text-white',
              )}
            >
              Pages
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            {pagesOpen ? (
              <div className="absolute top-full right-0 mt-2 w-52 rounded-lg border border-stone-200 bg-white py-2 shadow-xl dark:border-stone-700 dark:bg-stone-900">
                {pageLinks.map((link) => (
                  <a
                    key={link}
                    href="#home"
                    className="block px-4 py-2 text-sm text-stone-600 transition-colors hover:bg-stone-50 hover:text-accent-500 dark:text-stone-300 dark:hover:bg-stone-800"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
          className={cn(
            'rounded-lg p-2 transition-colors lg:hidden',
            scrolled
              ? 'text-stone-600 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-800'
              : 'text-white hover:bg-white/10',
          )}
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-stone-200 bg-white px-4 py-4 dark:border-stone-800 dark:bg-stone-950 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {anchors.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-900"
              >
                {link.label}
              </a>
            ))}
            {pageLinks.map((link) => (
              <a
                key={link}
                href="#home"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-stone-500 transition-colors hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-900"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
