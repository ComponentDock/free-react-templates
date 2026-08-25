import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = ['Home', 'About Us', 'Services', 'Pricing', 'Work', 'Blog', 'Contact Us']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-brand/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-[88px]">
        <a href="#" className="text-2xl font-bold text-white">
          Pulsewave.
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-brand px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-sm font-medium text-white/80 transition-colors hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
