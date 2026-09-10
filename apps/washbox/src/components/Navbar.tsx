import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Services', 'Blog', 'Contact'] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold font-[Work_Sans]"
            style={{ color: scrolled ? '#010A44' : '#ffffff' }}
          >
            WashBox
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium transition-colors hover:text-brand"
                style={{ color: scrolled ? '#072366' : '#ffffff' }}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:10872562903"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-[30px] text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{
              background: 'linear-gradient(to left, #0BC6FF, #0d80f3, #0BC6FF)',
            }}
          >
            <Phone size={16} />
            10 (87) 256-2903
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={24} style={{ color: scrolled ? '#010A44' : '#ffffff' }} />
            ) : (
              <Menu size={24} style={{ color: scrolled ? '#010A44' : '#ffffff' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-[#072366] hover:text-brand py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="tel:10872562903"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[30px] text-sm font-semibold text-white mt-2"
              style={{
                background: 'linear-gradient(to left, #0BC6FF, #0d80f3, #0BC6FF)',
              }}
            >
              <Phone size={16} />
              10 (87) 256-2903
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
