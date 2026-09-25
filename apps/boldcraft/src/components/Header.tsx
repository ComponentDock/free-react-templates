import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Service', href: '#service' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-5">
        <a href="#" className="font-heading text-2xl font-bold text-white">
          BoldCraft
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-[30px] border-2 border-white px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-text-primary"
          >
            Let&apos;s Talk
          </a>
        </nav>
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <nav className="flex flex-col gap-4 bg-black/90 px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-brand"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="w-fit rounded-[30px] border-2 border-white px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-text-primary"
          >
            Let&apos;s Talk
          </a>
        </nav>
      )}
    </header>
  )
}
