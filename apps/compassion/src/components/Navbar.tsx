import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Messages', 'Events', 'Contact'] as const
const messageLinks = [
  'Audio Sermons',
  'Past Messages',
  'Bible Reading',
  'End Time Prophecy',
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="relative z-50">
      <nav className="absolute inset-x-0 top-0 bg-black/70 md:bg-transparent">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" className="text-xl font-bold uppercase tracking-widest text-white">
            Compassion
          </a>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link} className="relative">
                {link === 'Messages' ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className="text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-brand"
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                    >
                      {link}
                    </button>
                    {dropdownOpen && (
                      <ul className="absolute left-0 top-full z-10 mt-1 w-56 bg-white py-2 shadow-lg">
                        {messageLinks.map((item) => (
                          <li key={item}>
                            <a
                              href="#messages"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand"
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
                    href={`#${link.toLowerCase()}`}
                    className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                      link === 'Home' ? 'text-brand' : 'text-white hover:text-brand'
                    }`}
                  >
                    {link}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-gray-700 bg-black/90 px-4 pb-4 md:hidden">
            <ul className="flex flex-col gap-3 py-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block py-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-brand"
                    onClick={() => setOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
