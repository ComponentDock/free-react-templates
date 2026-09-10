import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const navLinks = ['Home', 'Job Listings', 'About', 'Services', 'Blog']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="text-xl font-extrabold text-brand">
            JobQuest
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-semibold text-text-secondary transition-colors hover:text-brand"
              >
                {link}
              </a>
            ))}
            <Button className="bg-brand text-white hover:bg-brand-hover">Contact Us</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="block rounded px-3 py-2 text-sm font-semibold text-text-secondary hover:bg-bg-light"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="pt-2">
              <Button className="w-full bg-brand text-white hover:bg-brand-hover">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
