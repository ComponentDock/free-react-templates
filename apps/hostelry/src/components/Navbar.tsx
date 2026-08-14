import { useState, type MouseEvent } from 'react'
import { ChevronDown, Hotel } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BLOG_DROPDOWN, NAV_LINKS } from '../data'

/* Header (source: header.header_area — absolute bar over the hero with a
   logo left, right-aligned 12px uppercase dark links with light-blue hover,
   a Blog submenu dropdown, and a mobile hamburger with three yellow bars). */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  function closeDropdown(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      setDropdownOpen(false)
    }
  }

  return (
    <header className="absolute inset-x-0 top-0 z-30 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2 py-5 text-ink">
          <Hotel className="h-6 w-6 text-brand" aria-hidden="true" />
          <span className="text-[22px] font-semibold tracking-wide">Hostelry</span>
        </a>

        {/* Desktop menu (source: ul.nav.navbar-nav — 12px uppercase links). */}
        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="ml-[30px] block py-5 text-[12px] font-medium uppercase tracking-wide text-ink transition-colors hover:text-sky"
            >
              {link.label}
            </a>
          ))}

          {/* Blog submenu dropdown (source: li.nav-item.submenu). */}
          <div className="relative ml-[30px]" onMouseLeave={() => setDropdownOpen(false)}>
            <button
              type="button"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={() => setDropdownOpen((value) => !value)}
              className="flex items-center gap-1 py-5 text-[12px] font-medium uppercase tracking-wide text-ink transition-colors hover:text-sky"
            >
              Blog
              <ChevronDown
                className={cn('h-3.5 w-3.5 transition-transform', dropdownOpen && 'rotate-180')}
                aria-hidden="true"
              />
            </button>
            {dropdownOpen && (
              <div
                onClick={closeDropdown}
                className="absolute left-0 top-full min-w-[220px] border border-[#ededed] bg-white py-2 shadow-lg"
              >
                {BLOG_DROPDOWN.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-5 py-2 text-[13px] text-ink transition-colors hover:bg-[#f0f0f0] hover:text-sky"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile hamburger (source: navbar-toggler — three yellow bars). */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
          className="flex flex-col gap-[5px] p-3 lg:hidden"
        >
          <span
            className={cn(
              'block h-[3px] w-[25px] bg-brand transition-transform',
              menuOpen && 'translate-y-[8px] rotate-45',
            )}
          />
          <span
            className={cn(
              'block h-[3px] w-[25px] bg-brand transition-opacity',
              menuOpen && 'opacity-0',
            )}
          />
          <span
            className={cn(
              'block h-[3px] w-[25px] bg-brand transition-transform',
              menuOpen && '-translate-y-[8px] -rotate-45',
            )}
          />
        </button>
      </div>

      {/* Mobile menu panel (source: collapsed navbar list). */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[#ededed] bg-white px-4 py-4 shadow-lg lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-2 py-2 text-[12px] font-medium uppercase tracking-wide text-ink hover:text-sky"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {BLOG_DROPDOWN.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-2 py-2 text-[12px] font-medium uppercase tracking-wide text-ink hover:text-sky"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
