import { useState, useEffect } from 'react'

const NAV_LINKS = ['Home', 'Convert', 'Feature', 'Price', 'Blog', 'Pages']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors ${
        scrolled ? 'bg-[#222222]/90' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1170px] items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-xl font-bold text-white">
          CoinWave
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-[13px] font-normal uppercase tracking-wide text-white/80 transition-colors hover:text-orange-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile slide-in menu */}
      {menuOpen && (
        <nav className="bg-[#222222] px-6 pb-6 md:hidden" aria-label="Mobile navigation">
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm uppercase text-white/80 hover:text-orange-brand"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
