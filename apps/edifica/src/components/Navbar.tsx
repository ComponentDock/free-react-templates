import { Search } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact']

export function Navbar() {
  return (
    <nav className="bg-navy text-white" role="navigation" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="/" className="text-2xl font-bold text-white">
          Edifica<span className="text-primary-400">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-white/80 transition-colors hover:text-primary-400"
            >
              {link}
            </a>
          ))}
          <button
            type="button"
            aria-label="Search"
            className="text-white/60 transition-colors hover:text-primary-400"
          >
            <Search size={18} />
          </button>
        </div>
      </div>
    </nav>
  )
}
