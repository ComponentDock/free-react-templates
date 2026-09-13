import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Feature', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonial', href: '#testimonials' },
  { label: 'Contact', href: '#footer' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full" data-testid="navbar">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:py-5">
        {/* Logo */}
        <a href="#home" className="font-display text-2xl font-bold text-white">
          Indigo
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-bold text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#pricing"
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Sign up
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-hero-bg px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm font-bold text-white/80 transition-colors hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#pricing"
            className="mt-3 block rounded-full bg-white px-6 py-2 text-center text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            onClick={() => setOpen(false)}
          >
            Sign up
          </a>
        </div>
      )}
    </header>
  )
}
