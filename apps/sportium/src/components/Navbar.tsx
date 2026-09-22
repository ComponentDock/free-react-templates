import { Dumbbell, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Classes & Services', href: '#courses' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#footer' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-heading">
          <Dumbbell className="h-6 w-6 text-brand-400" aria-hidden="true" />
          <span>
            Sport<span className="text-brand-400">ium</span>
          </span>
        </a>

        <nav aria-label="Main navigation">
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-brand-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 text-sm text-muted md:flex">
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span>652-345 3222 11</span>
        </div>
      </div>
    </header>
  )
}
