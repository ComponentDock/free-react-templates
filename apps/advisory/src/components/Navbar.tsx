import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = ['Home', 'Pages', 'Services', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="text-xl font-bold text-navy">
          Advisory<span className="text-brand">.</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex gap-1">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className={cn(
                    'px-4 py-2 text-sm font-bold transition-colors',
                    l === 'Home' ? 'text-brand' : 'text-navy hover:text-brand',
                  )}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark lg:inline-block"
        >
          Make an Appointment
        </a>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="text-navy lg:hidden"
          type="button"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-bold text-navy hover:text-brand"
                >
                  {l}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white"
              >
                Make an Appointment
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
