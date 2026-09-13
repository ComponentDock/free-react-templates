import { useState } from 'react'
import { Menu, X, Search, Clock, Mail, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'Facebook', icon: 'f' },
  { label: 'Twitter', icon: 't' },
  { label: 'LinkedIn', icon: 'in' },
  { label: 'Instagram', icon: 'ig' },
  { label: 'YouTube', icon: 'yt' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header data-testid="navbar">
      {/* Top bar */}
      <div className="bg-brand text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>We are a landscaping company, offering various landscape services</p>
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="hover:opacity-80 transition-opacity text-xs font-bold"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Middle bar */}
      <div className="bg-brand text-white">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold tracking-wide">
            <a href="#home">Landcraft</a>
          </h1>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <div>
                <p className="font-semibold">MON - SAT (9AM - 5PM)</p>
                <span className="text-white/80">Sunday closed</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <div>
                <p className="font-semibold">MAIL US</p>
                <span className="text-white/80">info@landcraft.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <div>
                <p className="font-semibold">PHONE US</p>
                <span className="text-white/80">(+1) 1144-1254</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <nav className="hidden md:flex gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-heading font-medium hover:text-brand transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button className="text-heading hover:text-brand transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <button
            className="md:hidden text-heading"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="md:hidden border-t bg-white px-4 pb-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-heading hover:text-brand transition-colors text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
