import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'Rooms', 'About', 'Blog', 'Pages', 'Contact']

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-white hover:text-brand' : 'text-white/80 hover:text-white'
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <a href="#" className="text-white text-2xl font-bold tracking-wide">
          Highland
        </a>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#reservation"
            className="bg-brand text-white px-6 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-brand-hover transition-colors"
          >
            Book A Room
          </a>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-black/95 px-4 pb-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-white/80 hover:text-white text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#reservation"
            className="block mt-3 bg-brand text-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-center"
            onClick={() => setMobileOpen(false)}
          >
            Book A Room
          </a>
        </div>
      )}
    </header>
  )
}
