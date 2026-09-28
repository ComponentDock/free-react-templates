import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brand, navItems } from '../data'

/** Fixed header that floats transparently over the hero, darkens on
 *  scroll, and shows the brand logo + centered nav. Mobile: hamburger
 *  → slide-in dark panel. */
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
      className={`fixed inset-x-0 top-0 z-[1999] transition-colors duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-2 text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
              <path d="M7 2v20" />
              <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>
            <span className="text-xl font-semibold">{brand.name}</span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-medium tracking-wide text-white uppercase transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="flavor-mobile-menu"
            onClick={() => setOpen(true)}
            className="text-white lg:hidden"
          >
            <Menu className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[2000] lg:hidden" role="presentation">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <nav
            id="flavor-mobile-menu"
            aria-label="Mobile"
            className="absolute top-0 right-0 h-full w-[300px] overflow-y-auto bg-black/80 p-6 backdrop-blur-sm"
          >
            <div className="mb-8 flex justify-end">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-white"
              >
                <X className="h-7 w-7" aria-hidden="true" />
              </button>
            </div>
            <ul className="space-y-5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium tracking-wide text-white uppercase transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
