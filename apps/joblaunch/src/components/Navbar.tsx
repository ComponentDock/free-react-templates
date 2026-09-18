import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Category', 'Blog', 'About', 'Contact']
const categories = ['Full Time', 'Part Time', 'Freelance', 'Internship', 'Temporary']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <a href="/" className="text-2xl font-bold text-ink">
            Job<strong className="text-primary">Launch</strong>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link === 'Category' ? (
                <div
                  key={link}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-ink hover:text-primary transition-colors"
                    aria-expanded={dropdownOpen}
                  >
                    {link}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[160px] z-50">
                      {categories.map((cat) => (
                        <li key={cat}>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-ink-muted hover:bg-bg-light hover:text-primary transition-colors"
                          >
                            {cat}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a key={link} href="#" className="text-ink hover:text-primary transition-colors">
                  {link}
                </a>
              ),
            )}
            <a
              href="#"
              className="bg-primary text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              + Post a Job
            </a>
          </nav>

          <button
            className="lg:hidden text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden pb-4 border-t border-border-light">
            <ul className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="block text-ink hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="inline-block bg-primary text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-primary-dark transition-colors"
                >
                  + Post a Job
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
