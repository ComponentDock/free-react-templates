import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About Us', 'Blog', 'Contact']

const dropdownLinks = ['Team', 'Pricing', 'FAQ', 'Gallery', 'Services', 'Testimonials']

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="absolute top-0 z-50 w-full border-b border-white/70 bg-transparent">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white">
          Banknote<span className="text-brand">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link} className="relative">
              {link === 'About Us' ? (
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className="text-sm font-semibold text-white/90 transition hover:text-brand"
                  >
                    {link} ▾
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute left-0 top-full z-50 mt-2 w-48 rounded-b-lg border-t-2 border-brand bg-white py-2 shadow-lg">
                      {dropdownLinks.map((item) => (
                        <li key={item}>
                          <a
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="block px-4 py-2 text-sm text-gray-700 transition hover:bg-mist hover:text-brand"
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
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-semibold text-white/90 transition hover:text-brand"
                >
                  {link}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-white/20 bg-ink px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="block py-2 text-sm font-semibold text-white/90 transition hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
