import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-navbar absolute top-0 left-0 z-[9] w-full px-4 py-4">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between"
      >
        <a href="#" className="text-[1.7rem] text-white">
          <strong className="font-black">Ment</strong>ory
        </a>
        <ul className="hidden items-center lg:flex">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  'mx-[15px] block py-5 text-white',
                  i === 0 && 'border-b-2 border-white font-bold',
                )}
                aria-current={i === 0 ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="p-2 text-white lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            role="presentation"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            aria-label="Mobile navigation"
            className="fixed top-0 right-0 z-50 h-full w-[300px] bg-white shadow-[0_0_40px_rgba(0,0,0,0.2)] lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-[1.7rem] text-black">
                <strong className="font-black">Ment</strong>ory
              </span>
              <button
                type="button"
                className="p-2 text-black"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="px-6">
              {navLinks.map((link, i) => (
                <li key={link.label} className="border-b border-gray-100">
                  <a
                    href={link.href}
                    className={cn('block py-3 text-black', i === 0 && 'text-brand')}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  )
}
