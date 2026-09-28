import { useState, useEffect } from 'react'

const navLinks = ['Home', 'About', 'Menu', 'Pages', 'Blog', 'Contact'] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Brand */}
        <a href="#home" className="font-display text-2xl font-bold text-white">
          Crustly
        </a>

        {/* Nav links — hidden on mobile */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-wider text-white transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
