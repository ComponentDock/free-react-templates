import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const toggleDark = () => setDark((d) => !d)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark-bg/90 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white tracking-tight"
        >
          Unfurl
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-[family-name:var(--font-body)] text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            className="hidden lg:flex text-gray-300 hover:text-white transition-colors"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="lg:hidden bg-dark-section px-4 pb-4 space-y-3 border-t border-white/10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block font-[family-name:var(--font-body)] text-sm text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleDark}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors py-2"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
              <span className="text-sm">{dark ? 'Light mode' : 'Dark mode'}</span>
            </button>
          </li>
        </ul>
      )}
    </header>
  )
}
