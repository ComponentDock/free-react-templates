import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Coach', 'Pricing', 'Services', 'Stories', 'Blog', 'Contact']

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="text-xl font-bold text-white">
          Vita<span className="text-accent-400">flow</span>
        </a>
        <button
          className="flex items-center gap-1 text-sm text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
          Menu
        </button>
        <ul className={`m-0 flex list-none gap-6 pl-0 ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-white/80 no-underline hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
