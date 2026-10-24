import { Phone } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Blog', 'Contact']

export function Navbar() {
  return (
    <header role="banner" className="sticky top-0 z-50 bg-transparent">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="text-2xl font-bold text-white font-heading">
          Expo
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-white transition-colors hover:text-primary"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="tel:+1234567890"
          className="inline-flex items-center gap-2 rounded bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          <Phone size={16} />
          +1 234 567 890
        </a>
      </nav>
    </header>
  )
}
