import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About Us', 'Category', 'Price', 'Blog', 'Contact']

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="text-2xl font-bold text-brand">
          HireFlow
        </a>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="rounded-full border-2 border-brand px-5 py-2 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Signup
          </a>
          <a
            href="#"
            className="rounded-full border-2 border-brand px-5 py-2 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Login
          </a>
        </nav>
        {isOpen && (
          <nav
            className="absolute left-0 top-full w-full bg-white shadow-md md:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="block text-sm font-medium text-gray-700 hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
              <li className="flex gap-2">
                <a
                  href="#"
                  className="rounded-full border-2 border-brand px-4 py-1 text-sm font-medium text-brand"
                >
                  Signup
                </a>
                <a
                  href="#"
                  className="rounded-full border-2 border-brand px-4 py-1 text-sm font-medium text-brand"
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
