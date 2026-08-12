import { useEffect, useState } from 'react'
import { BookOpen, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

/* Header recreated from the source's transparent header: an absolute bar
   over the hero with the open-book logo + wordmark, centered links, and
   Join / Log in actions; on scroll it sticks with the violet→indigo
   gradient. Mobile: hamburger toggle opening a slide-in menu. */

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all',
        scrolled ? 'bg-gradient-to-r from-grad-a to-grad-b shadow-lg' : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8"
      >
        <a href="#home" aria-label="Edify home" className="flex items-center gap-2 text-white">
          <BookOpen className="h-7 w-7" aria-hidden="true" />
          <span className="font-display text-2xl font-bold tracking-tight">Edify</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={i === 0 ? 'page' : undefined}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#join"
            className="rounded bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
          >
            Join Now
          </a>
          <a
            href="#login"
            className="rounded border border-white/70 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-indigo"
          >
            Log in
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle mobile menu"
          className="rounded p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Slide-in mobile menu */}
      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Dismiss mobile menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full bg-black/40"
          />
          <nav
            aria-label="Mobile"
            className="absolute inset-y-0 right-0 flex w-72 flex-col bg-white p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 font-display text-xl font-bold text-indigo">
                <BookOpen className="h-6 w-6" aria-hidden="true" />
                Edify
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close mobile menu"
                className="rounded p-1 text-gray-500 transition-colors hover:bg-gray-100"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-indigo"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4">
                <a
                  href="#join"
                  onClick={() => setOpen(false)}
                  className="rounded bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
                >
                  Join Now
                </a>
                <a
                  href="#login"
                  onClick={() => setOpen(false)}
                  className="rounded border border-indigo/30 px-5 py-2.5 text-center text-sm font-semibold text-indigo transition-colors hover:bg-indigo hover:text-white"
                >
                  Log in
                </a>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
