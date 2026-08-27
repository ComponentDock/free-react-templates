import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Classes', 'Schedule', 'Trainer', 'Services', 'Contact']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-[7rem] flex items-center justify-between h-16">
        <a
          href="#"
          className={`text-xl font-black tracking-tight ${
            scrolled ? 'text-gray-900' : 'text-white'
          }`}
        >
          Stride<span className="text-brand">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActiveLink(link)}
                className={`px-5 py-2 text-sm font-semibold transition-colors ${
                  scrolled
                    ? activeLink === link
                      ? 'text-brand border-b-2 border-white'
                      : 'text-gray-900 hover:text-brand'
                    : activeLink === link
                      ? 'text-white border-b-2 border-white'
                      : 'text-white hover:text-brand-light'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={scrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => {
                setActiveLink(link)
                setMobileOpen(false)
              }}
              className="block px-6 py-3 text-gray-900 hover:bg-gray-50 text-sm font-semibold"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
