import { useState } from 'react'
import { Dumbbell, Menu, X } from 'lucide-react'
import { BRAND, CLASSES_DROPDOWN, NAV_LINKS } from '../data'

/**
 * Navbar — transparent absolute navbar over the hero: uppercase white
 * wordmark with an orange dumbbell icon on the left, white links on the
 * right (Classes reveals a dropdown), collapsing to a burger menu on mobile.
 */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="flex items-center justify-between px-7 py-10">
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl font-bold uppercase tracking-wide text-white"
        >
          <Dumbbell className="h-6 w-6 text-brand" aria-hidden="true" />
          {BRAND}
        </a>

        <button
          type="button"
          className="text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 text-[15px] lg:flex">
          {NAV_LINKS.map((link) =>
            link.label === 'Classes' ? (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 text-white/90 transition-colors hover:text-white/50"
                  aria-expanded={dropdownOpen}
                  onClick={() => setDropdownOpen((open) => !open)}
                >
                  {link.label}
                  <span aria-hidden="true" className="text-xs">
                    ▾
                  </span>
                </button>
                {dropdownOpen && (
                  <ul className="absolute left-0 top-full mt-1 w-40 bg-white py-2 text-[13px] text-neutral-500 shadow-[0_14px_33px_-9px_rgba(0,0,0,0.75)]">
                    {CLASSES_DROPDOWN.map((item) => (
                      <li key={item}>
                        <a
                          href="#classes"
                          className="block px-4 py-2 hover:bg-neutral-100 hover:text-neutral-900"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-white/90 transition-colors hover:text-white/50"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>
      </div>

      {mobileOpen && (
        <nav aria-label="Mobile navigation" className="bg-ink/95 px-7 pb-6 pt-2 lg:hidden">
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-white/90 hover:text-white/50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
