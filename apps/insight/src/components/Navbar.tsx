import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Cases', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="text-xl font-bold text-navy">
          Insight
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-navy-dark transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-block rounded-[5px] bg-brand px-5 py-2 text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Contact Now
          </a>
        </div>
        <button
          className="text-navy md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-sm font-medium text-navy-dark hover:text-brand"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-block rounded-[5px] bg-brand px-5 py-2 text-xs font-medium uppercase tracking-wide text-white"
            onClick={() => setMobileOpen(false)}
          >
            Contact Now
          </a>
        </div>
      )}
    </nav>
  )
}
