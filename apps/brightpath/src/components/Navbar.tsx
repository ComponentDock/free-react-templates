import { useState } from 'react'
import { Menu, X, Phone, Mail, Search } from 'lucide-react'

const navLinks = ['Home', 'About', 'Pages', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center py-2 px-4 text-sm text-body">
          <div className="flex gap-6">
            <a
              href="tel:+9530123654896"
              className="flex items-center gap-2 hover:text-brand transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+953 0123 654 896</span>
            </a>
            <a
              href="mailto:info@brightpath.edu"
              className="flex items-center gap-2 hover:text-brand transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@brightpath.edu</span>
            </a>
          </div>
          <a
            href="#"
            className="uppercase text-xs font-semibold text-heading hover:text-brand transition-colors"
          >
            Login
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <a href="#" className="text-xl font-bold text-heading">
            BrightPath
          </a>
          <ul className="hidden md:flex gap-6 text-sm font-medium text-heading">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-brand transition-colors">
                  {link}
                </a>
              </li>
            ))}
            <li>
              <button aria-label="Search" className="hover:text-brand transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </li>
          </ul>
          <button
            className="md:hidden text-heading"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <ul className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
            {navLinks.map((link) => (
              <li key={link} className="py-2 border-b border-gray-50">
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-heading hover:text-brand transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
