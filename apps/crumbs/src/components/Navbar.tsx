import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Product', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-quicksand text-2xl font-bold text-orange-600">
          Crumbs
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-quicksand text-sm font-medium text-gray-600 transition-colors hover:text-orange-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+10567453095"
            className="flex items-center gap-1 font-quicksand text-sm text-orange-600"
          >
            <Phone className="h-4 w-4" />
            +10 (56) 745 3095
          </a>
          <Button className="rounded-full bg-orange-600 px-6 py-2 font-quicksand text-sm font-semibold text-white shadow-md hover:bg-orange-700">
            Order Online
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-gray-700 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block font-quicksand text-sm font-medium text-gray-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
