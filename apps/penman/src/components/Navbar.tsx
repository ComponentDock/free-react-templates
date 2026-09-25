import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Chapter', href: '#chapter' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'My Books', href: '#books' },
  { label: 'Author', href: '#author' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="text-xl font-bold tracking-tight">
          Penman<span className="text-primary-400">.</span>
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          className={cn(
            'absolute left-0 right-0 top-full flex flex-col gap-1 bg-gray-900 px-4 py-2 md:static md:flex-row md:gap-6 md:bg-transparent md:px-0 md:py-0',
            open ? 'block' : 'hidden md:flex',
          )}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-sm text-gray-300 transition-colors hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
