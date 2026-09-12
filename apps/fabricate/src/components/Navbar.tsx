import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#service' },
  { label: 'Projects', href: '#project' },
  {
    label: 'Blog',
    href: '#blog',
    children: [
      { label: 'Blog Home', href: '#blog' },
      { label: 'Blog Single', href: '#blog' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-ink text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-brand transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-brand transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="tel:+8800123654896" className="hover:text-brand transition-colors">
              +880 012 3654 896
            </a>
            <a href="mailto:info@fabricate.com" className="hover:text-brand transition-colors">
              info@fabricate.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-ink">
            Fabricate
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                <a
                  href={link.href}
                  className={cn(
                    'text-sm font-medium text-ink hover:text-brand transition-colors flex items-center gap-1',
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3" />}
                </a>
                {link.children && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg rounded py-2 min-w-[160px] hidden group-hover:block">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-4 py-2 text-sm text-mist hover:text-brand hover:bg-paper transition-colors"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <ul className="md:hidden bg-white border-t px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-sm font-medium text-ink hover:text-brand"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
                {link.children && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block text-sm text-mist hover:text-brand"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
