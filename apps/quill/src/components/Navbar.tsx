import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Chapters', href: '#chapters' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Author', href: '#author' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled ? 'bg-navy shadow-lg' : 'bg-navy/90'
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="font-display text-2xl font-bold text-white">
          Quill<span className="text-accent-400">.</span>
        </a>
        <button
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
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
        <ul className="hidden gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-display text-sm font-medium text-white/80 transition-colors hover:text-accent-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="border-t border-white/10 bg-navy px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block py-2 font-display text-sm font-medium text-white/80 transition-colors hover:text-accent-400"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
