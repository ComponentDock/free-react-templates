import { useState } from 'react'
import { Menu, X } from 'lucide-react'

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
          <a href="#" className="text-2xl font-bold tracking-tight text-gray-900">
            Grain
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
        <ul className="mt-16 space-y-4">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-sm uppercase tracking-wide transition-colors ${
                  i === 0 ? 'font-bold text-brand' : 'text-gray-900 hover:text-brand'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
