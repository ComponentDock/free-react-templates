import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Packages', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="bg-white/0 border-0">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <a href="#" className="text-2xl font-bold text-primary-500">
            Expedio
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-sans text-sm font-medium text-ink transition-colors hover:text-primary-500"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#"
              className="inline-block bg-primary-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="text-ink lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden">
            <ul className="flex flex-col gap-3 py-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block font-sans text-sm font-medium text-ink"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-block w-full bg-primary-500 px-6 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
