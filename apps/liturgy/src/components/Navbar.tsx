import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const ministries = ['Children', 'Students', 'Care Ministry', 'Missions', 'Request Prayer']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a
            href="/"
            className="font-body text-sm font-normal uppercase tracking-[0.2em] text-white"
          >
            Liturgy
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {['Home', 'Who We Are', 'Events', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block px-4 py-7 text-[12px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
            <li
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-7 text-[12px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                Ministries <ChevronDown className="h-3 w-3" />
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 top-full min-w-[13em] rounded border border-charcoal-700 bg-white shadow-lg">
                  {ministries.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-800 transition-colors hover:bg-golden-400 hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <ul className="border-t border-charcoal-700 bg-black px-4 pb-4 md:hidden">
            {['Home', 'Who We Are', 'Ministries', 'Events', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block py-2 text-[12px] uppercase tracking-[0.2em] text-white/70"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
