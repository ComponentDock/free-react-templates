import { Search } from 'lucide-react'

const navLinks = ['Home', 'Rooms', 'About', 'Pages', 'News', 'Contact']

export function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <a href="/" className="text-2xl font-bold text-navy">
          Retreat
        </a>
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-body hover:text-brand font-medium transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-muted hover:text-brand transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <a
            href="#booking"
            className="bg-brand text-white px-5 py-2.5 rounded-sm font-medium hover:bg-white hover:text-brand border-2 border-brand transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  )
}
