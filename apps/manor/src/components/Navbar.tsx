import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-coral-400">
              <span className="font-heading text-lg font-bold text-white">M</span>
            </div>
            <span className="font-heading text-xl font-semibold text-white">the manor</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {['home', 'about us', 'listings', 'news', 'contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-heading text-sm font-medium capitalize text-white transition-colors hover:text-coral-400"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Phone className="h-4 w-4 text-coral-400" />
            <span className="font-heading text-sm text-white">+0080 234 567 84441</span>
          </div>

          <button
            className="text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-navy-800 md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {['home', 'about us', 'listings', 'news', 'contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="py-3 font-heading text-sm font-medium capitalize text-white transition-colors hover:text-coral-400"
              >
                {item}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2 border-t border-white/10 pt-3">
              <Phone className="h-4 w-4 text-coral-400" />
              <span className="font-heading text-sm text-white">+0080 234 567 84441</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
