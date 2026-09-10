import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-2xl font-bold tracking-tight text-gray-900">
            Focal
          </a>
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-sm bg-black/5 p-3 transition-colors hover:bg-black/10"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Side navigation overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[1002] bg-black/40"
          onClick={() => setMenuOpen(false)}
          role="presentation"
        />
      )}

      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 right-0 z-[1003] h-full w-[300px] bg-white p-10 transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-10 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-b border-gray-200 bg-transparent py-2 pr-8 text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
          <Search size={16} className="absolute right-10 text-gray-400" />
        </div>

        <ul className="space-y-3">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-sm uppercase tracking-wide transition-colors ${
                  i === 0 ? 'text-brand font-bold' : 'text-gray-900 hover:text-brand'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <ButtonLink
            href="#gallery"
            onClick={() => setMenuOpen(false)}
            className="text-xs uppercase tracking-[7px] text-gray-900 hover:text-brand"
          >
            View Galleries
          </ButtonLink>
        </div>
      </nav>
    </>
  )
}
