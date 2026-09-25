import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  {
    label: 'Blog',
    href: '#blog',
    children: [
      { label: 'Blog', href: '#blog' },
      { label: 'Single Post', href: '#blog-single' },
    ],
  },
  {
    label: 'Pages',
    href: '#pages',
    children: [
      { label: 'About', href: '#about' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Elements', href: '#services' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50" id="home">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="text-xl font-bold text-white">
          Workfolio
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              <a
                href={link.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-coral"
              >
                {link.label}
                {link.children && <span className="ml-1 text-xs">&#9662;</span>}
              </a>
              {link.children && (
                <ul className="invisible absolute left-0 top-full mt-2 min-w-[160px] rounded bg-white py-2 shadow-lg opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="block px-4 py-2 text-sm text-heading transition-colors hover:bg-cream hover:text-coral"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Social icons (desktop) */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#"
            aria-label="Facebook"
            className="text-white/70 transition-colors hover:text-coral"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-white/70 transition-colors hover:text-coral"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Behance"
            className="text-white/70 transition-colors hover:text-coral"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.62.16-1.26.25-1.92.25H0v-14.1h6.938zm-.36 5.91c.64 0 1.16-.15 1.57-.45.4-.3.6-.72.6-1.26 0-.31-.06-.57-.18-.78a1.4 1.4 0 00-.49-.52 1.96 1.96 0 00-.72-.28 4.15 4.15 0 00-.86-.09H3.57v3.38h2.99zm.17 6.08c.33 0 .64-.04.93-.11.29-.07.55-.19.77-.35.22-.16.4-.38.53-.65.13-.27.2-.6.2-1.01 0-.79-.23-1.37-.69-1.72-.46-.35-1.07-.53-1.83-.53H3.57v4.37h3.18zM15.04 4.853h6.39v1.45h-6.39v-1.45zm3.16 2.87c.78 0 1.44.19 1.98.58.54.39.81.99.81 1.82v5.49h-2.06v-5.05c0-.44-.09-.77-.28-1.01-.19-.24-.45-.36-.78-.36-.33 0-.61.12-.83.36-.22.24-.34.56-.36.97v5.09h-2.06v-7.72h2.06v1.02c.27-.4.62-.72 1.05-.95.44-.23.92-.34 1.47-.34zM12.28 14.87c.57-.32 1.04-.8 1.4-1.42.36-.63.54-1.34.54-2.13 0-.82-.18-1.51-.53-2.07-.35-.56-.84-.97-1.46-1.23-.62-.26-1.3-.39-2.02-.39H7.64v9.61h2.06v-2.37h1.66c.69 0 1.3-.14 1.84-.42l.08.2z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Website"
            className="text-white/70 transition-colors hover:text-coral"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="bg-navy-deep px-6 pb-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/90 transition-colors hover:text-coral"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
                {link.children && (
                  <ul className="ml-4 mt-2 flex flex-col gap-2">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="text-sm text-white/70 transition-colors hover:text-coral"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-4">
            <a href="#" aria-label="Facebook" className="text-white/70 hover:text-coral">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-coral">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" aria-label="Behance" className="text-white/70 hover:text-coral">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.62.16-1.26.25-1.92.25H0v-14.1h6.938zm-.36 5.91c.64 0 1.16-.15 1.57-.45.4-.3.6-.72.6-1.26 0-.31-.06-.57-.18-.78a1.4 1.4 0 00-.49-.52 1.96 1.96 0 00-.72-.28 4.15 4.15 0 00-.86-.09H3.57v3.38h2.99zm.17 6.08c.33 0 .64-.04.93-.11.29-.07.55-.19.77-.35.22-.16.4-.38.53-.65.13-.27.2-.6.2-1.01 0-.79-.23-1.37-.69-1.72-.46-.35-1.07-.53-1.83-.53H3.57v4.37h3.18z" />
              </svg>
            </a>
            <a href="#" aria-label="Website" className="text-white/70 hover:text-coral">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
