import { Phone } from 'lucide-react'

const NAV_LINKS = ['Home', 'Property', 'About', 'Blog', 'Contact']

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="/" className="text-2xl font-bold text-heading">
          Key<span className="text-primary">nest</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-heading transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="tel:+10656722674"
          className="hidden items-center gap-2 rounded border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white lg:flex"
        >
          <Phone size={16} />
          +10 (65) 672 2674
        </a>

        {/* Mobile menu button */}
        <button type="button" className="flex flex-col gap-1.5 lg:hidden" aria-label="Toggle menu">
          <span className="block h-0.5 w-6 bg-heading" />
          <span className="block h-0.5 w-6 bg-heading" />
          <span className="block h-0.5 w-6 bg-heading" />
        </button>
      </div>
    </header>
  )
}
