import { useState } from 'react'
import { Search, Menu, X, Phone } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './BrandIcons'

const navLinks = ['Home', 'Courses', 'Instructors', 'Events', 'Blog', 'Contact']

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-dark-bg text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-1 hover:text-brand-accent transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>+1 234 567 890</span>
            </a>
            <select
              className="bg-transparent text-white text-xs border border-white/20 rounded px-2 py-1"
              aria-label="Language"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-brand-accent transition-colors">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-brand-accent transition-colors">
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-brand-accent transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-dark-bg border-t border-white/10" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="/" className="text-white text-2xl font-bold font-montserrat">
            Lingo
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-white/80 hover:text-brand-accent transition-colors text-sm uppercase tracking-wide"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Search"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-dark-bg">
            <ul className="flex flex-col px-4 py-3 gap-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/80 hover:text-brand-accent transition-colors text-sm uppercase tracking-wide block py-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
