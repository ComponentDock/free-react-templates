import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="text-2xl font-bold text-teal-500">
          Odonto
        </a>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-teal-500 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#appointment"
            className="bg-teal-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-teal-600 transition-colors"
          >
            Make an Appointment
          </a>
        </div>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn('block py-2 text-gray-700 hover:text-teal-500')}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#appointment"
            className="block mt-2 bg-teal-500 text-white text-center px-5 py-2 rounded-full font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            Make an Appointment
          </a>
        </div>
      )}
    </nav>
  )
}
