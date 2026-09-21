import { useState } from 'react'
import { Search, Lock, Menu, X, Gamepad2 } from 'lucide-react'

const navLinks = ['Home', 'Games', 'Articles', 'Reviews', 'Contact']

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Pinterest', href: '#' },
  { name: 'Dribbble', href: '#' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-ink font-bold text-xl">
            <Gamepad2 className="h-7 w-7 text-primary-400" />
            Joystick
          </a>
          <div className="flex items-center gap-4">
            <form className="hidden sm:flex items-center" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                placeholder="Search"
                className="border border-gray-300 rounded-l px-3 py-1.5 text-sm focus:outline-none focus:border-primary-400"
              />
              <button
                type="submit"
                className="bg-primary-400 text-white px-3 py-1.5 rounded-r hover:bg-dark transition-colors"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
            <a
              href="#"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-ink hover:text-primary-400 transition-colors"
            >
              <Lock className="h-4 w-4" />
              Login / Register
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-dark sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-14">
          {/* Mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-white text-sm font-semibold uppercase tracking-wide hover:text-primary-400 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="text-gray-400 hover:text-primary-400 transition-colors text-xs font-semibold"
                aria-label={s.name}
              >
                {s.name.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <ul className="md:hidden bg-dark border-t border-gray-700 px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block text-white text-sm font-semibold uppercase hover:text-primary-400 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
