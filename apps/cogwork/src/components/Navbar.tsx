import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Architectural Design', href: '#services' },
      { label: 'Interior', href: '#services' },
      { label: 'Building', href: '#services' },
    ],
  },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="bg-[#343a40] text-white" role="navigation" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="text-xl font-bold">
          Cogwork
        </a>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          className={cn(
            'absolute left-0 top-full z-50 w-full bg-[#343a40] md:static md:flex md:w-auto md:items-center',
            open ? 'block' : 'hidden',
          )}
        >
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label} className="relative">
                <button
                  className="block w-full px-4 py-2 text-left text-sm hover:text-[#fd5f00] md:inline-block"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                >
                  {link.label} ▾
                </button>
                {dropdownOpen && (
                  <ul className="absolute left-0 top-full z-50 bg-[#343a40]">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block whitespace-nowrap px-4 py-2 text-sm hover:text-[#fd5f00]"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-4 py-2 text-sm hover:text-[#fd5f00] md:inline-block"
                >
                  {link.label}
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </nav>
  )
}
