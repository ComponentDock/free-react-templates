import { useState } from 'react'
import { Briefcase, ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-[5px] bg-brand text-white">
            <Briefcase aria-hidden="true" className="size-5" />
          </span>
          <span className="font-display text-2xl font-bold tracking-wide text-ink">
            Hiredly<span className="text-brand">.</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={blogOpen}
                    aria-haspopup="true"
                    onClick={() => setBlogOpen((v) => !v)}
                    className="flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-brand"
                  >
                    {link.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn('size-4 transition-transform', blogOpen && 'rotate-180')}
                    />
                  </button>
                  {blogOpen && (
                    <ul className="absolute left-0 top-full w-44 rounded-[5px] bg-sticky py-2 shadow-lg">
                      {link.dropdown.map((item) => (
                        <li key={item}>
                          <a
                            href="#blog"
                            onClick={() => setBlogOpen(false)}
                            className="block px-4 py-2 text-sm font-medium text-ink transition-colors hover:text-brand"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-brand',
                      link.label === 'Home' ? 'text-brand' : 'text-ink',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#cta"
            className="hidden rounded border border-brand bg-white px-7 py-2.5 text-sm font-medium uppercase tracking-wider text-brand transition-colors hover:bg-brand hover:text-white lg:inline-block"
          >
            Join Now
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded border border-hairline text-ink lg:hidden"
          >
            {mobileOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-hairline bg-sticky lg:hidden"
        >
          <ul className="space-y-1 px-4 py-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label}>
                  <button
                    type="button"
                    aria-expanded={mobileBlogOpen}
                    onClick={() => setMobileBlogOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-2 text-sm font-medium text-ink"
                  >
                    {link.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn('size-4 transition-transform', mobileBlogOpen && 'rotate-180')}
                    />
                  </button>
                  {mobileBlogOpen && (
                    <ul className="pl-4">
                      {link.dropdown.map((item) => (
                        <li key={item}>
                          <a
                            href="#blog"
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm text-ink transition-colors hover:text-brand"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-medium text-ink transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
          <div className="border-t border-hairline px-4 py-4">
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="block rounded border border-brand bg-white py-2.5 text-center text-sm font-medium uppercase tracking-wider text-brand"
            >
              Join Now
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
