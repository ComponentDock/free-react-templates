import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Chef', href: '#chef' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector<HTMLElement>('.crave-header')
      if (header) {
        header.classList.toggle('shadow-md', window.scrollY > 50)
        header.classList.toggle('bg-white', window.scrollY > 50)
        header.classList.toggle('bg-transparent', window.scrollY <= 50)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="crave-header fixed top-0 z-50 w-full transition-colors"
      data-testid="crave-header"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="font-heading text-2xl font-bold text-heading">
          Crave
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-sm font-semibold text-heading transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-6 bg-brand transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-brand transition-opacity ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-brand transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block border-b border-gray-100 py-3 font-sans text-sm font-semibold text-heading hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
