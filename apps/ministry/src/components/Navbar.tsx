import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Ministries', href: '#services' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Events', href: '#events' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#footer' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="absolute top-[40px] left-0 right-0 z-20 bg-transparent"
      aria-label="Main navigation"
    >
      <div className="max-w-[1300px] mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="text-white font-extrabold text-xl tracking-tight">
          Ministry
        </a>

        <button
          className="lg:hidden text-white/70 hover:text-brand transition-colors uppercase text-sm tracking-widest"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          <span className="ml-1">Menu</span>
        </button>

        <div id="nav-menu" className={`${open ? 'block' : 'hidden'} lg:flex items-center gap-0`}>
          <ul className="flex flex-col lg:flex-row lg:items-center list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-5 py-3.5 text-white text-[13px] font-normal uppercase tracking-[1px] hover:text-brand transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#donate"
                className="inline-block mx-5 mt-1 lg:mt-0 px-5 py-2 text-white text-[13px] font-normal uppercase tracking-[1px] border border-brand bg-brand rounded-full hover:bg-white hover:text-brand hover:border-brand transition-colors"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
