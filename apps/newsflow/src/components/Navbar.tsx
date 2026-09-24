import { Search } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Top 10', active: true },
  { label: 'Pages' },
  { label: 'Funny' },
  { label: 'Videos' },
  { label: "Don't Miss" },
  { label: 'Mega Menu' },
]

export function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="/" className="flex items-baseline gap-1" aria-label="Newsflow home">
          <span className="text-3xl font-black text-brand">Viral</span>
          <span className="text-lg font-bold uppercase tracking-wider text-text-primary">
            Story
          </span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`text-sm font-bold uppercase tracking-wide transition-colors hover:text-brand ${
                link.active ? 'text-brand' : 'text-text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-text-secondary hover:text-brand">
            <Search size={20} />
          </button>
          <a
            href="#"
            className="rounded bg-gradient-to-r from-cta-start to-cta-end px-5 py-2 text-sm font-bold uppercase text-white shadow-md hover:shadow-lg transition-shadow"
          >
            Add Post
          </a>
        </div>
      </div>
    </nav>
  )
}
