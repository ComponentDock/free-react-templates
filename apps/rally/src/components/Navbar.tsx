import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks, pagesLinks } from '../data'

const gradientBar = 'bg-[linear-gradient(0deg,#141da2_0%,#9b5cf6_100%)]'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-colors duration-300',
        scrolled ? cn(gradientBar, 'shadow-md') : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#home"
          className="font-display text-2xl font-bold uppercase tracking-widest text-white"
        >
          Rally
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] font-medium uppercase tracking-wide text-white/90 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown((value) => !value)}
              aria-expanded={openDropdown}
              aria-haspopup="menu"
              className="inline-flex items-center gap-1 text-[13px] font-medium uppercase tracking-wide text-white/90 transition-colors hover:text-white"
            >
              Pages
              <ChevronDown className="h-4 w-4" />
            </button>
            {openDropdown ? (
              <div
                role="menu"
                aria-label="Pages"
                className="absolute left-0 top-full mt-3 w-48 rounded-md bg-white p-2 shadow-lg"
              >
                {pagesLinks.map((page) => (
                  <a
                    key={page}
                    href="#"
                    className="block rounded px-3 py-2 text-sm text-muted transition-colors hover:bg-team hover:text-heading"
                  >
                    {page}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-white/70"
          >
            <Search className="h-5 w-5" />
          </button>
          <a
            href="#pricing"
            className="hidden rounded bg-[linear-gradient(to_right,#2c28b1_0%,#9b5cf6_51%,#2c28b1_100%)] bg-[length:200%_auto] px-6 py-2.5 text-[13px] font-medium text-white transition-[background-position] duration-300 hover:bg-[position:right_center] lg:inline-flex"
          >
            Get Tickets
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={cn(gradientBar, 'lg:hidden', mobileOpen ? 'block' : 'hidden')}
      >
        <ul className="space-y-1 px-4 py-6">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium uppercase tracking-wide text-white"
              >
                {link}
              </a>
            </li>
          ))}
          {pagesLinks.map((page) => (
            <li key={page}>
              <a
                href="#"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-white/80"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
