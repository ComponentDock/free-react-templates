import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brand, navLinks, topBar } from '../data'
import { socialIcons } from './social-icons'

/** Top info bar (contact left, social right, white translucent, hidden
 *  below md) + fixed main nav (dark logo with #244cfd left border and
 *  blue cross, #222 uppercase links with Pages/Blog hover dropdowns).
 *  On scroll the nav gets a #f9f9fd background and slides to the very
 *  top. Below lg a hamburger opens a dark slide-in panel with the same
 *  links. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="relative z-[1999]">
      <div className="absolute inset-x-0 top-0 hidden bg-white/80 py-2.5 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <div className="flex flex-wrap items-center gap-x-6 text-[13px] font-medium text-body">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              call us now! {topBar.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
              {topBar.email}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
              {topBar.location}
            </span>
          </div>
          <ul className="flex items-center gap-4">
            {socialIcons.map(({ label, Icon }) => (
              <li key={label}>
                <a
                  href="#"
                  aria-label={label}
                  className="text-body transition-colors hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        data-testid="main-nav"
        className={cn(
          'fixed inset-x-0 top-12 z-[1998] transition-all md:top-14',
          scrolled ? 'top-0 bg-surface shadow-sm' : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
          <a
            href="#home"
            className="inline-flex items-center gap-2 border-l-4 border-brand pl-2.5 font-heading text-[34px] font-bold uppercase tracking-[3px] text-ink"
          >
            <span className="text-brand">
              <PlusGlyph />
            </span>
            {brand}
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1 py-2 text-[12px] font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand"
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <ul className="invisible absolute left-0 top-full z-50 w-44 bg-white py-2.5 opacity-0 shadow-[0_0_30px_rgba(127,137,161,0.25)] transition-all group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-4 py-2 text-[12px] capitalize text-[#333] transition-colors hover:text-brand"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-2 text-[12px] font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="curale-mobile-menu"
            onClick={() => setOpen(true)}
            className="text-ink lg:hidden"
          >
            <Menu className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="curale-mobile-menu"
          data-testid="mobile-menu"
          className="fixed inset-y-0 left-0 z-[2000] w-[260px] overflow-y-auto bg-black/80 p-6 pt-4 transition-all"
        >
          <div className="mb-6 flex items-center justify-between">
            <a
              href="#home"
              className="font-heading text-2xl font-bold uppercase tracking-[3px] text-white"
            >
              {brand}
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label} className="mb-1">
                  <span className="block py-2 text-[13px] uppercase tracking-wide text-white">
                    {item.label}
                  </span>
                  <ul className="mb-1 border-l border-white/20 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-1.5 text-[13px] capitalize text-white/80 transition-colors hover:text-brand"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-[13px] uppercase tracking-wide text-white transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

function Phone({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function Mail({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapPin({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PlusGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}
