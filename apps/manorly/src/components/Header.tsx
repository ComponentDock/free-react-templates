import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

type Disclosure = {
  label: string
  items: { label: string; href: string }[]
}

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
]

const disclosures: Disclosure[] = [
  {
    label: 'Blog',
    items: [
      { label: 'Blog', href: '#blog' },
      { label: 'Single Blog', href: '#blog' },
    ],
  },
  {
    label: 'Pages',
    items: [
      { label: 'Project', href: '#projects' },
      { label: 'Apartment', href: '#gallery' },
      { label: 'Elements', href: '#services' },
    ],
  },
]

const mobileLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Single Blog', href: '#blog' },
  { label: 'Project', href: '#projects' },
  { label: 'Apartment', href: '#gallery' },
  { label: 'Elements', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
]

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 text-brand"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M16 1 30 8.5v15L16 31 2 23.5v-15L16 1Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path d="M16 9 23 14.5V21h-4.4v-4.6h-5.2V21H9v-6.5L16 9Z" fill="currentColor" />
      </svg>
      <span className="text-xl font-semibold tracking-wide text-ink">Manorly</span>
    </span>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDisclosure, setOpenDisclosure] = useState<string | null>(null)

  const toggleDisclosure = (label: string) => {
    setOpenDisclosure((current) => (current === label ? null : label))
  }

  return (
    <header className="absolute left-0 top-0 z-40 w-full">
      <div className="bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" aria-label="Manorly home">
            <Logo />
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8 text-sm font-medium text-ink">
              {links.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
              {disclosures.map((disclosure) => (
                <li key={disclosure.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={openDisclosure === disclosure.label}
                    onClick={() => toggleDisclosure(disclosure.label)}
                    className="flex items-center gap-1 transition-colors hover:text-brand"
                  >
                    {disclosure.label}
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                  {openDisclosure === disclosure.label && (
                    <ul className="absolute left-0 top-full mt-3 w-44 rounded-md border border-gray-100 bg-white py-2 shadow-lg">
                      {disclosure.items.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            onClick={() => setOpenDisclosure(null)}
                            className="block px-4 py-2 text-sm text-muted transition-colors hover:text-brand"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <a href="#contact" className="transition-colors hover:text-brand">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-ink" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-ink" aria-hidden="true" />
            )}
          </button>
        </div>

        {menuOpen && (
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-4 pb-6 lg:hidden sm:px-6">
            <ul className="flex flex-col gap-3 text-sm font-medium text-ink">
              {mobileLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={() => setMenuOpen(false)} className="hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
