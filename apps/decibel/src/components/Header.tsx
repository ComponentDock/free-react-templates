import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks: ReadonlyArray<{
  label: string
  href: string
  active?: boolean
  dropdown?: boolean
}> = [
  { label: 'Home', href: '#home', active: true },
  { label: 'DJs', href: '#djs' },
  { label: 'Shows', href: '#shows', dropdown: true },
  { label: 'Events', href: '#events' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const showsDropdown: ReadonlyArray<{ label: string; href: string; nested?: boolean }> = [
  { label: 'Top 20 of The Week', href: '#shows' },
  { label: 'Featured Artist', href: '#shows' },
  { label: 'Interviews', href: '#shows' },
  { label: 'Sub Menu', href: '#shows', nested: true },
]

const subMenuLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Menu One', href: '#shows' },
  { label: 'Menu Two', href: '#shows' },
  { label: 'Menu Three', href: '#shows' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute left-0 right-0 top-0 z-[99] px-4 pt-5 sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#home" className="font-script text-2xl text-white md:text-3xl">
          Decibel.
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label} className="group relative">
                <a
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1 py-2 text-white/60 transition-colors hover:text-white',
                    link.active && 'text-white',
                  )}
                >
                  {link.label}
                  {link.dropdown ? (
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : null}
                </a>
                {link.dropdown ? (
                  <ul className="invisible absolute left-0 top-full z-50 w-52 bg-night py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {showsDropdown.map((item) => (
                      <li key={item.label} className="group/sub relative">
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-white/60 transition-colors hover:text-primary"
                        >
                          {item.label}
                        </a>
                        {item.nested ? (
                          <ul className="invisible absolute left-full top-0 z-50 w-44 bg-night py-2 opacity-0 shadow-xl transition-all duration-200 group-hover/sub:visible group-hover/sub:opacity-100">
                            {subMenuLinks.map((sub) => (
                              <li key={sub.label}>
                                <a
                                  href={sub.href}
                                  className="block px-4 py-2 text-white/60 transition-colors hover:text-primary"
                                >
                                  {sub.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? (
        <nav
          aria-label="Mobile"
          className="mt-4 rounded-xl border border-white/10 bg-night p-4 lg:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-white/60 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {showsDropdown.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 pl-4 text-white/60 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {subMenuLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 pl-8 text-white/60 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
