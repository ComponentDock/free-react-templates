import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Agent', href: '#agents' },
  { label: 'Listing', href: '#listing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

/**
 * Navbar — transparent header floating over the hero (source
 * `nav.ftco-navbar`): black wordmark left, weight-600 nav links right with
 * gold hover/active, and a hamburger "Menu" toggle that opens a black
 * full-width panel on mobile.
 */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute left-0 right-0 top-5 z-30">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8"
      >
        <a href="#home" aria-label="Keyhold home" className="text-xl font-bold text-ink">
          Keyhold
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((link, index) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  'text-[15px] font-semibold text-ink transition-colors hover:text-brand',
                  index === 0 && 'text-brand',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex items-center gap-1 rounded-[3px] px-2 py-1 font-semibold text-ink lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
          Menu
        </button>
      </nav>

      {/* Mobile panel — black background, white links */}
      {open && (
        <div className="bg-black lg:hidden">
          <div className="flex items-center justify-between px-4 py-4">
            <span className="text-xl font-bold text-white">Keyhold</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-[3px] p-1 text-white"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <ul className="px-4 pb-6">
            {links.map((link) => (
              <li key={link.label} className="border-b border-white/10">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-semibold text-white transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
