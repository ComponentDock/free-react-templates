import { Search } from 'lucide-react'

const NAV_LINKS = ['Home', 'Episodes', 'About', 'Contact']

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-ink text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="/" className="font-display text-2xl font-extrabold tracking-tight">
          Sonance
        </a>

        <nav aria-label="Main navigation">
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-primary-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Search"
          className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <Search size={20} />
        </button>
      </div>
    </header>
  )
}
