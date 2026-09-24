import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="text-2xl font-bold font-[family-name:var(--font-heading)] text-brand-primary"
          >
            Clinipoint
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-body hover:text-brand-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              aria-label="Search"
              className="text-brand-body hover:text-brand-primary transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search size={20} />
            </button>
            <Button
              className="bg-brand-primary text-white px-6 py-2.5 rounded font-medium text-sm hover:opacity-90 transition-opacity"
              onClick={() => {
                document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Book Appointment
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <button
              aria-label="Search"
              className="text-brand-body hover:text-brand-primary transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search size={20} />
            </button>
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(!open)}
              className="text-brand-body"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="lg:hidden pb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
            />
          </div>
        )}

        {open && (
          <nav className="lg:hidden pb-4 border-t border-gray-100" aria-label="Mobile navigation">
            <div className="flex flex-col gap-2 pt-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-brand-body hover:text-brand-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="bg-brand-primary text-white px-6 py-2.5 rounded font-medium text-sm mt-2 w-full"
                onClick={() => {
                  document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
                  setOpen(false)
                }}
              >
                Book Appointment
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
