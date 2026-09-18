import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Works', 'Blog', 'Contact']

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="bg-transparent">
        <div className="flex items-center justify-between px-6 py-4 lg:px-20">
          <a
            href="/"
            className="text-2xl font-bold text-white"
            style={{ fontFamily: 'Josefin Sans, sans-serif' }}
          >
            Venture
          </a>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white text-sm font-medium hover:text-[#04dbec] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-[#04dbec] text-white px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-[#03c5df] transition-colors"
            >
              Contact Now
            </a>
          </div>
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-[#010E21] px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-2 text-white text-sm font-medium hover:text-[#04dbec] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 block bg-[#04dbec] text-white px-6 py-3 text-sm font-medium uppercase tracking-wider text-center"
            >
              Contact Now
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
