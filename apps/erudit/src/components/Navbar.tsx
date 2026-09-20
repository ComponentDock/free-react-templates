import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Courses', 'Teachers', 'About', 'Events', 'News', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-sky-500 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="hidden md:block">The ideal platform for your online learning center</p>
          <div className="flex gap-3 ml-auto">
            <a href="#about" className="hover:underline">
              Our Vision
            </a>
            <a href="#about" className="hover:underline">
              Our Missions
            </a>
            <a href="#courses" className="hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-sky-500">
          Erudit
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-sky-500 transition-colors">
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#courses"
              className="bg-sky-500 text-white px-5 py-2 rounded-md hover:bg-sky-600 transition-colors"
            >
              Get started
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-3 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block hover:text-sky-500"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#courses"
              className="inline-block bg-sky-500 text-white px-5 py-2 rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              Get started
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}
