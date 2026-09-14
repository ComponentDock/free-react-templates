import { useState } from 'react'
import { Phone, Mail, Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-500 text-white text-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-10">
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-1 hover:text-accent-400">
              <Phone size={14} /> +00 1234 567
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-accent-400">
              <Mail size={14} /> youremail@email.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-accent-400" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="hover:text-accent-400" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" className="hover:text-accent-400" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-extrabold tracking-tight">
            Power<span className="text-brand-500">Wash</span>
          </a>

          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                    i === 0 ? 'text-brand-500' : 'text-dark-700'
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-dark-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <ul className="md:hidden bg-white border-t px-4 pb-4">
            {navLinks.map((link, i) => (
              <li key={link} className="border-b border-dark-100">
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`block py-3 text-sm font-medium ${
                    i === 0 ? 'text-brand-500' : 'text-dark-700'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  )
}
