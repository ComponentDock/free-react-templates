import { MapPin, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Departments', href: '#departments' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <header data-testid="navbar">
      {/* Top info bar */}
      <div className="bg-paper py-2 text-sm text-mist">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              123 Medical Ave, Health City, HC 12345
            </span>
            <span className="hidden items-center gap-1 sm:flex">
              <Mail size={14} />
              info@healwise.com
            </span>
            <span className="hidden items-center gap-1 sm:flex">
              <Phone size={14} />
              +1 (234) 567-8900
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-ink py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <a href="#home" className="text-2xl font-bold text-white">
            Healwise
          </a>

          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="rounded bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Make Appointment
          </a>
        </div>
      </nav>
    </header>
  )
}
