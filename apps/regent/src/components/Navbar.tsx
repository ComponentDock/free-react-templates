import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'

/** Navbar — transparent over hero, white bg when scrolled. Logo 'Regent'
    in Playfair Display, nav links with Rooms dropdown. */
export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-40 w-full transition-colors ${
        scrolled ? 'bg-white text-ink shadow-md' : 'bg-transparent text-white'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#home" className="font-heading text-2xl font-bold tracking-wide">
          {BRAND}
        </a>
        <ul className="flex items-center gap-6 text-sm font-semibold uppercase tracking-wider">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="relative">
              {'children' in link && link.children ? (
                <div ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 transition-colors hover:text-brand"
                    aria-expanded={dropdownOpen}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute left-0 top-full mt-2 w-48 rounded-sm border border-gray-200 bg-white py-2 text-sm normal-case text-ink shadow-lg">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={link.href}
                            className="block px-4 py-2 transition-colors hover:bg-offwhite hover:text-brand"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a href={link.href} className="transition-colors hover:text-brand">
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
