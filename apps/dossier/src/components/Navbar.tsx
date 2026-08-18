import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const desktopLinks = ['Home', 'About', 'Portfolio', 'Blog', 'Contact'] as const
const blogDropdown = ['Blog Details', 'Elements'] as const

/**
 * Transparent sticky header (reference: .header-area). Ink brand, underline
 * nav, a Blog dropdown, and the underlined serif "Fire me an Email" CTA.
 * A hamburger opens a client-side mobile menu with the same links.
 */
export function Navbar() {
  const [blogOpen, setBlogOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass =
    'text-sm font-normal uppercase tracking-wide text-ink transition-colors hover:text-link-blue'

  return (
    <header data-header className="sticky top-0 z-40 border-b border-ink/20 bg-transparent">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 lg:px-8">
        <a
          href="#home"
          className="font-heading text-2xl font-bold uppercase tracking-wide text-ink"
        >
          Dossier
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {desktopLinks.map((label) =>
            label === 'Blog' ? (
              <div key={label} className="relative">
                <button
                  type="button"
                  aria-expanded={blogOpen}
                  aria-haspopup="true"
                  onClick={() => setBlogOpen((open) => !open)}
                  className={cn(linkClass, 'flex items-center gap-1')}
                >
                  Blog
                  <ChevronDown
                    className={cn('h-4 w-4 transition-transform', blogOpen && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>
                {blogOpen && (
                  <ul
                    data-blog-dropdown
                    className="absolute left-0 top-full mt-2 w-44 bg-white p-2 shadow-lg"
                  >
                    {blogDropdown.map((item) => (
                      <li key={item}>
                        <a href="#blog" className="block px-3 py-2 text-sm text-ink hover:bg-light">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a
                key={label}
                href={label === 'Home' ? '#home' : `#${label.toLowerCase()}`}
                className={cn(
                  linkClass,
                  label === 'Home' && 'font-bold text-ink',
                  label === 'Home' && 'underline decoration-2 underline-offset-4',
                )}
              >
                {label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="#contact"
            className="font-heading text-[20px] text-ink underline decoration-1 underline-offset-4 transition-colors hover:text-link-blue"
          >
            Fire me an Email
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 lg:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile"
          data-mobile-menu
          className="border-t border-ink/10 bg-white px-4 pb-6 pt-2 lg:hidden"
        >
          <div className="flex justify-end">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <ul className="flex flex-col">
            {desktopLinks.map((label) =>
              label === 'Blog' ? (
                <li key={label}>
                  <button
                    type="button"
                    aria-expanded={blogOpen}
                    onClick={() => setBlogOpen((open) => !open)}
                    className="flex w-full items-center justify-between py-2 text-sm font-medium uppercase tracking-wide text-ink"
                  >
                    Blog
                    <ChevronDown
                      className={cn('h-4 w-4 transition-transform', blogOpen && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                  {blogOpen && (
                    <ul className="pl-4">
                      {blogDropdown.map((item) => (
                        <li key={item}>
                          <a
                            href="#blog"
                            className="block py-2 text-sm text-ink hover:text-link-blue"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={label}>
                  <a
                    href={label === 'Home' ? '#home' : `#${label.toLowerCase()}`}
                    className="block py-2 text-sm font-medium uppercase tracking-wide text-ink hover:text-link-blue"
                  >
                    {label}
                  </a>
                </li>
              ),
            )}
            <li>
              <a
                href="#contact"
                className="block py-2 font-heading text-lg text-ink underline underline-offset-4"
              >
                Fire me an Email
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
