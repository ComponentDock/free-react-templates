import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-50">
      <div className="max-w-[68.75%] mx-auto flex items-center justify-between py-4 px-4">
        <div className="text-white text-2xl font-semibold tracking-wide">Zephyrine</div>
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Generic', 'Elements'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white text-sm font-medium hover:opacity-80 transition-opacity"
            >
              {item}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-black/30 px-4 pb-4">
          {['Home', 'Generic', 'Elements'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-white text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
