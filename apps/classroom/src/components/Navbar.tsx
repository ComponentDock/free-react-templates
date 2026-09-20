import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Courses', 'Programs', 'Teachers']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-black text-white bg-indigo-500 px-4 py-1 rounded">
          Classroom
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-indigo-500 transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-indigo-500 text-white px-6 py-2 rounded-full text-xs font-black uppercase hover:bg-indigo-600 transition-colors"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-3 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block hover:text-indigo-500"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-block bg-indigo-500 text-white px-6 py-2 rounded-full text-xs font-black uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}
