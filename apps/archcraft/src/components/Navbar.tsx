import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
] as const

const dropdownItems = [
  { label: 'Team', href: '#team' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="text-2xl font-bold tracking-tight text-ink dark:text-white">
          Archcraft<span className="text-brand">.</span>
        </a>

        <div className="flex items-center gap-3">
          <nav aria-label="Primary" className="hidden items-center lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-ink transition-colors hover:text-brand dark:text-white dark:hover:text-brand"
              >
                {link.label}
              </a>
            ))}

            <div className="relative">
              <button
                type="button"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((m) => !m)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-ink transition-colors hover:text-brand dark:text-white dark:hover:text-brand"
              >
                More
                <ChevronDown aria-hidden="true" className="h-4 w-4" />
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-full mt-1 w-44 rounded-md border border-line bg-white py-2 shadow-lg dark:border-gray-700 dark:bg-gray-900">
                  {dropdownItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-ink hover:bg-paper hover:text-brand dark:text-white dark:hover:bg-gray-800"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <a
            href="#contact"
            className="hidden rounded bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark lg:inline-block"
          >
            Get a Quote
          </a>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="rounded p-2 text-ink hover:bg-paper lg:hidden dark:text-white dark:hover:bg-gray-800"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden dark:bg-gray-950">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <span className="text-2xl font-bold tracking-tight text-ink dark:text-white">
              Archcraft<span className="text-brand">.</span>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded p-2 text-ink hover:bg-paper dark:text-white dark:hover:bg-gray-800"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile menu" className="flex flex-col gap-2 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-semibold text-ink hover:bg-paper dark:text-white dark:hover:bg-gray-800"
              >
                {link.label}
              </a>
            ))}
            {dropdownItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 pl-8 text-base font-semibold text-ink hover:bg-paper dark:text-white dark:hover:bg-gray-800"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
