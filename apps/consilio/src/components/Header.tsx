import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const hours = 'MON - SAT: 6.00 AM - 10.00 PM'
const navItems = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about', children: ['About Us', 'Testimonials'] },
  { label: 'Services', href: '#services', children: ['All Services', 'Service Details'] },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog', children: ['Blog Details'] },
  { label: 'Contact', href: '#contact', children: ['Careers'] },
] as const

function SocialIcons() {
  return (
    <div className="flex items-center gap-4 text-white">
      <a href="#facebook" aria-label="Facebook" className="transition-opacity hover:opacity-70">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8v3h2.7v7h2.8Z" />
        </svg>
      </a>
      <a href="#twitter" aria-label="Twitter" className="transition-opacity hover:opacity-70">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M18.9 3h3.1l-6.8 7.8L23 21h-6.3l-4.9-6.4L6.2 21H3.1l7.3-8.3L2.5 3h6.4l4.4 5.9L18.9 3Zm-1.1 16.1h1.7L7.9 4.8H6.1l11.7 14.3Z" />
        </svg>
      </a>
      <a href="#linkedin" aria-label="LinkedIn" className="transition-opacity hover:opacity-70">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M6.9 8.5H3.7V20h3.2V8.5ZM5.3 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.4 13.9c0-3.1-1.7-4.6-4-4.6-1.8 0-2.6 1-3.1 1.7V8.5H10V20h3.3v-5.8c0-1.5.7-2.5 2-2.5 1.2 0 1.9.8 1.9 2.5V20h3.2v-6.1Z" />
        </svg>
      </a>
      <a
        href="#google-plus"
        aria-label="Google Plus"
        className="transition-opacity hover:opacity-70"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M8.2 10.9v2.6h4.3c-.2 1.1-1.4 3.2-4.3 3.2-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7c1.5 0 2.5.6 3 1.2l2-2C11.9 5.1 10.2 4.5 8.2 4.5 4.3 4.5 1.2 7.6 1.2 11.5S4.3 18.5 8.2 18.5c4.6 0 7.7-3.3 7.7-7.9 0-.5-.1-.9-.2-1.3H8.2v1.6Zm13.6-1.4h-2.2V7.3h-2.2v2.2h-2.2v2.2h2.2v2.2h2.2V11.7h2.2V9.5Z" />
        </svg>
      </a>
    </div>
  )
}

function Dropdown({ label, children }: { label: string; children: readonly string[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy transition-colors hover:text-brand dark:text-gray-200 dark:hover:text-white"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-20 w-44 bg-navy py-2 shadow-lg">
          {children.map((child) => (
            <a
              key={child}
              href="#"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-gray-200 transition-colors hover:bg-brand hover:text-white"
            >
              {child}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-950">
      <div className="hidden bg-brand lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs text-white sm:px-6">
          <p>{hours}</p>
          <SocialIcons />
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="font-display text-2xl font-bold tracking-tight text-brand-deep dark:text-white"
        >
          Consilio<span className="text-accent">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            'children' in item ? (
              <Dropdown key={item.label} label={item.label}>
                {item.children}
              </Dropdown>
            ) : (
              <a
                key={item.label}
                href={item.href}
                aria-current={'active' in item && item.active ? 'page' : undefined}
                className={cn(
                  'px-3 py-2 text-sm font-medium transition-colors',
                  'active' in item && item.active
                    ? 'text-brand dark:text-white'
                    : 'text-navy hover:text-brand dark:text-gray-200 dark:hover:text-white',
                )}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-9 w-9 items-center justify-center rounded-full text-navy transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <a
            href="#contact"
            className="hidden rounded bg-ink px-5 py-2.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-deep lg:inline-flex"
          >
            Get Free Consultation
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded text-navy transition-colors hover:bg-gray-100 lg:hidden dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-gray-100 px-4 pb-4 lg:hidden dark:border-gray-800"
        >
          {navItems.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-medium text-navy dark:text-gray-200"
              >
                {item.label}
              </a>
              {'children' in item &&
                item.children.map((child) => (
                  <a
                    key={child}
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="block py-1.5 pl-4 text-sm text-gray-500 dark:text-gray-400"
                  >
                    {child}
                  </a>
                ))}
            </div>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block rounded bg-ink px-5 py-2.5 text-center text-sm font-medium uppercase tracking-wide text-white"
          >
            Get Free Consultation
          </a>
        </nav>
      )}
    </header>
  )
}
