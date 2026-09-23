import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
] as const

const dropdownPages = [
  { label: 'About', href: '#about' },
  { label: 'Project Details', href: '#projects' },
  { label: 'Elements', href: '#services' },
] as const

const dropdownBlog = [
  { label: 'Blog', href: '#blog' },
  { label: 'Single Blog', href: '#blog' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-2xl font-bold text-primary">
          Plano<span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-primary transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setPagesOpen(!pagesOpen)
                setBlogOpen(false)
              }}
              className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent"
              aria-expanded={pagesOpen}
            >
              Pages
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {pagesOpen && (
              <ul className="absolute left-0 top-full mt-2 w-48 rounded border border-gray-100 bg-white py-2 shadow-lg">
                {dropdownPages.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setBlogOpen(!blogOpen)
                setPagesOpen(false)
              }}
              className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent"
              aria-expanded={blogOpen}
            >
              Blog
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {blogOpen && (
              <ul className="absolute left-0 top-full mt-2 w-48 rounded border border-gray-100 bg-white py-2 shadow-lg">
                {dropdownBlog.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a
            href="#contact"
            className="text-sm font-medium text-primary transition-colors hover:text-accent"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden text-sm font-medium text-white underline-offset-4 hover:underline lg:inline-block"
          >
            Say Hello
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-gray-100 bg-white px-4 py-3 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block py-2 text-sm font-medium text-primary"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}
