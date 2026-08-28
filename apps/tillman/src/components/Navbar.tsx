import { Leaf } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Blog', 'Contact']

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-2xl font-bold text-leaf-600">
          <Leaf className="h-7 w-7" />
          Tillman
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-medium text-gray-700 transition-colors hover:text-leaf-500"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:+1108922932678"
          className="hidden rounded-full bg-leaf-400 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-leaf-500 lg:inline-block"
        >
          (10) 892-293 2678
        </a>

        {/* Mobile menu button */}
        <button type="button" className="flex flex-col gap-1.5 lg:hidden" aria-label="Open menu">
          <span className="block h-0.5 w-6 bg-gray-700" />
          <span className="block h-0.5 w-6 bg-gray-700" />
          <span className="block h-0.5 w-6 bg-gray-700" />
        </button>
      </div>
    </header>
  )
}
