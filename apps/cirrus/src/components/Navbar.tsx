import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#' },
  { label: 'Company', href: '#company' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className={cn('fixed top-0 left-0 z-50 w-full', open ? 'bg-black' : 'bg-transparent')}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:px-8">
        <a href="#" className="text-2xl font-bold text-white">
          Cirrus
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-green',
                l.href === '#' ? 'text-white' : 'text-white/80',
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-[5px] bg-brand-green px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand"
          >
            Get started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-4 px-6 pb-6 lg:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-brand-green"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="w-fit rounded-[5px] bg-brand-green px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand"
            onClick={() => setOpen(false)}
          >
            Get started
          </a>
        </div>
      )}
    </nav>
  )
}
