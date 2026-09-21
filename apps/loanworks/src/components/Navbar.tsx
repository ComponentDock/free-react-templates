import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Loan', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#footer' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        <a href="#" className="text-xl font-bold text-navy">
          Loanworks
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-body-text transition hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <span className="flex items-center gap-1 text-sm text-body-text">
            <Phone size={14} />
            +10 673 567 367
          </span>
          <a
            href="#hero"
            className="rounded border border-brand px-5 py-2 text-sm font-medium text-brand transition hover:bg-brand hover:text-white"
          >
            Apply for a Loan
          </a>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-white px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm text-body-text"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#hero"
            className="mt-2 block rounded border border-brand px-4 py-2 text-center text-sm font-medium text-brand"
          >
            Apply for a Loan
          </a>
        </div>
      )}
    </header>
  )
}
