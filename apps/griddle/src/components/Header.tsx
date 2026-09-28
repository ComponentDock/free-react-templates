import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { BLOG_MENU, NAV_LINKS, PAGES_MENU } from '../data'

/**
 * Header — sticky nav bar: centered logo, left nav links (with Blog/Pages
 * dropdowns), right social icons + phone. Mobile toggle below lg.
 */
export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Desktop nav — left side */}
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) =>
            link.label === BLOG_MENU.label ? (
              <div key={link.label} className="group relative">
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-heading transition-colors hover:text-brand"
                >
                  {link.label}
                  <ChevronDown className="h-3 w-3" aria-hidden="true" />
                </a>
                <div className="invisible absolute left-0 top-full z-20 min-w-40 rounded-md border border-gray-100 bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {BLOG_MENU.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-body transition-colors hover:text-brand"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : link.label === PAGES_MENU.label ? (
              <div key={link.label} className="group relative">
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-heading transition-colors hover:text-brand"
                >
                  {link.label}
                  <ChevronDown className="h-3 w-3" aria-hidden="true" />
                </a>
                <div className="invisible absolute left-0 top-full z-20 min-w-40 rounded-md border border-gray-100 bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {PAGES_MENU.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-body transition-colors hover:text-brand"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-heading transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        {/* Center logo */}
        <a
          href="#home"
          className="font-display text-2xl font-bold uppercase tracking-widest text-heading"
        >
          Griddle
        </a>

        {/* Desktop right: social icons + phone */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#instagram"
            aria-label="Instagram"
            className="text-body transition-colors hover:text-brand"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
          </a>
          <a
            href="#twitter"
            aria-label="Twitter"
            className="text-body transition-colors hover:text-brand"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>
          <a
            href="#facebook"
            aria-label="Facebook"
            className="text-body transition-colors hover:text-brand"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="#phone"
            aria-label="Call us"
            className="ml-2 text-sm font-semibold text-heading transition-colors hover:text-brand"
          >
            +10 367 453 7382
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-heading transition-colors hover:bg-light lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-gray-100 bg-white px-4 pb-6 pt-3 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium uppercase tracking-wider text-heading transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#phone"
            onClick={() => setOpen(false)}
            className="mt-3 block text-sm font-semibold text-heading"
          >
            +10 367 453 7382
          </a>
        </div>
      )}
    </header>
  )
}
