import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavbarProps {
  className?: string
}

const navLinks = ['Home', 'About', 'Causes', 'Events', 'Pages', 'Blog', 'Contact']

export function Navbar({ className }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className={cn('sticky top-0 z-50', className)}>
      {/* Top info bar */}
      <div className="bg-heading text-muted-light text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4 font-utility">
            <span>+1 (234) 567 890</span>
            <span>info@givecause.org</span>
          </div>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-brand transition-colors">
              f
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-brand transition-colors">
              t
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-brand transition-colors">
              ig
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
          <a href="/" className="font-heading text-2xl font-bold text-heading">
            GiveCause
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 font-heading text-sm font-medium text-heading">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-brand transition-colors">
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#donate"
                className="bg-brand text-white px-6 py-2 rounded-[5px] hover:bg-brand-hover transition-colors font-heading"
              >
                Donate
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-heading"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t">
            <ul className="flex flex-col p-4 gap-4 font-heading text-sm">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block py-2 text-heading hover:text-brand"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#donate"
                  className="block bg-brand text-white text-center px-6 py-2 rounded-[5px]"
                  onClick={() => setMobileOpen(false)}
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
