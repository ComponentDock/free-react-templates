import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Industries', 'Works', 'Blog', 'Pages', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="hidden bg-navy text-sm text-white/80 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <ul className="flex gap-6">
            <li>+880166 253 232</li>
            <li>info@forgepoint.com</li>
          </ul>
          <span>Mon - Fri: 9:00 - 19:00 / Closed on Weekends</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white shadow-sm dark:bg-navy-deep">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#" className="font-display text-2xl font-bold text-ink dark:text-white">
            ForgePoint
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-display text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded bg-brand px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark lg:inline-block"
          >
            Get A Quote
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="text-ink dark:text-white lg:hidden"
            aria-label="toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav
            aria-label="mobile"
            className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden dark:bg-navy-deep dark:border-navy"
          >
            <ul className="flex flex-col gap-3 pt-3">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block font-display text-sm font-medium uppercase tracking-wide text-ink dark:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="mt-2 inline-block rounded bg-brand px-6 py-3 font-display text-sm font-semibold uppercase text-white"
                >
                  Get A Quote
                </a>
              </li>
            </ul>
          </nav>
        )}
      </nav>
    </header>
  )
}
