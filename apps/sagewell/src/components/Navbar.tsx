import { useState } from 'react'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Courses', href: '#programs' },
  {
    label: 'Blog',
    href: '#news',
    children: [
      { label: 'Blog', href: '#news' },
      { label: 'Single Post', href: '#' },
    ],
  },
  {
    label: 'Pages',
    href: '#events',
    children: [
      { label: 'Events', href: '#events' },
      { label: 'Admissions', href: '#admission' },
    ],
  },
  { label: 'Contact', href: '#footer' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-navy-800 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-10">
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> +880 166 253 232
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" /> info@sagewell.edu
            </span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-300 transition-colors">
              Login
            </a>
            <a href="#" className="hover:text-brand-300 transition-colors">
              Register
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold text-navy-800">
            Sagewell
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-navy-700 hover:text-brand-400 transition-colors"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                </a>
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 min-w-[160px] z-50">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-navy-700 hover:bg-brand-50 hover:text-brand-500"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#admission"
              className="bg-brand-400 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-500 transition-colors"
            >
              Apply Now
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-navy-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t px-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-navy-700 hover:text-brand-400 border-b border-gray-100 text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#admission"
              className="mt-3 block text-center bg-brand-400 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-500 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Apply Now
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
