import { Search } from 'lucide-react'

export function Navbar() {
  const links = ['Home', 'About', 'Portfolio', 'Blog', 'Contact']

  return (
    <nav className="flex items-center justify-between py-5">
      <a href="#" className="font-display text-2xl font-bold text-ink">
        Solaris
      </a>
      <div className="flex items-center gap-8">
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-brand ${
                  link === 'Home' ? 'text-brand' : 'text-ink'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label="Search"
          className="text-mist transition-colors hover:text-ink"
        >
          <Search size={18} />
        </button>
      </div>
    </nav>
  )
}
