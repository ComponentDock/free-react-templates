import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'bg-charcoal/95 text-white shadow-lg' : 'bg-transparent text-white'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="border-2 border-white px-3 py-1 font-heading text-2xl font-bold tracking-wider"
        >
          EDDY
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded px-3 py-2 text-sm font-medium transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#rooms"
          className="hidden rounded bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-400 sm:inline-flex"
        >
          Book Now
        </a>
      </div>
    </header>
  )
}
