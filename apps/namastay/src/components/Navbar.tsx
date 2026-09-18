import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const classOptions = ['Health Mind Meditation', 'Mind Balance Yoga', 'Body Strength Pilates']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav
      className="bg-ink text-white sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#" className="font-display text-xl font-bold tracking-tight">
          Namastay
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}

          {/* Classes dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-sm font-medium text-white/80 transition hover:text-white"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Classes
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 top-full z-10 mt-1 w-56 rounded bg-white py-2 shadow-lg">
                {classOptions.map((opt) => (
                  <a
                    key={opt}
                    href="#classes"
                    className="block px-4 py-2 text-sm text-ink hover:bg-paper-alt"
                  >
                    {opt}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-mist" />
            <input
              type="text"
              placeholder="Search..."
              className="rounded border border-white/20 bg-transparent py-1 pl-8 pr-3 text-sm text-white placeholder-white/50 focus:border-white/50 focus:outline-none"
              aria-label="Search"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm text-white/80 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <button
            className="block py-2 text-left text-sm text-white/80 hover:text-white"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Classes
          </button>
          {dropdownOpen && (
            <div className="pl-4">
              {classOptions.map((opt) => (
                <a
                  key={opt}
                  href="#classes"
                  className="block py-1 text-sm text-white/60 hover:text-white"
                >
                  {opt}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  )
}
