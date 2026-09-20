import { cn } from '@free-react-templates/ui'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Courses', href: '#courses' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a
          href="#home"
          className="font-heading text-xl font-semibold tracking-wide text-brand-heading"
        >
          Laurel
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  'text-sm font-medium text-brand-body transition-colors hover:text-primary',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="flex items-center justify-center md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu className="h-6 w-6 text-brand-heading" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-sm font-medium text-brand-body hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
