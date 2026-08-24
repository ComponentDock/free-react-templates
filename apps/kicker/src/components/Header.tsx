import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  'Home',
  'Page',
  'Science',
  'Technology',
  'Beauty',
  'Health',
  'Arts & Culture',
  'Opinion',
  'Videos',
  'Gallery',
]

const PAGE_DROPDOWN = ['Blog', 'Blog Details', 'Post Details', 'Category', 'Element', 'Contact']

/* Inline SVG brand icons — lucide-react removed brand icons. */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function VimeoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
    </svg>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (label: string) => {
    setOpenDropdown((current) => (current === label ? null : label))
  }

  const linkClass = () =>
    `px-[42px] py-[15px] text-ink font-chivo font-bold text-[18px] hover:text-brand-red transition-colors`

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top utility row */}
      <div className="border-b border-divider px-4 py-2 lg:px-[88px]">
        <div className="flex items-center justify-between">
          <a href="/" className="font-chivo text-2xl font-bold text-brand-red">
            KICKER
          </a>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="border-r border-divider pr-6 font-chivo text-[14px] font-bold text-ink hover:text-brand-red transition-colors"
            >
              Sign in
            </a>
            <div className="flex items-center gap-3 text-ink">
              <a href="#" aria-label="Facebook">
                <FacebookIcon className="h-4 w-4 hover:text-brand-red transition-colors" />
              </a>
              <a href="#" aria-label="Instagram">
                <InstagramIcon className="h-4 w-4 hover:text-brand-red transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <TwitterIcon className="h-4 w-4 hover:text-brand-red transition-colors" />
              </a>
              <a href="#" aria-label="YouTube">
                <YoutubeIcon className="h-4 w-4 hover:text-brand-red transition-colors" />
              </a>
              <a href="#" aria-label="Vimeo">
                <VimeoIcon className="h-4 w-4 hover:text-brand-red transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky nav row */}
      <div className="hidden bg-white px-4 lg:block lg:px-[88px]">
        <div className="flex items-center justify-between">
          <a href="/" className="font-chivo text-xl font-bold text-brand-red">
            KICKER
          </a>
          <nav className="flex items-center">
            {NAV_LINKS.map((link) => (
              <div key={link} className="relative">
                {link === 'Page' ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link)}
                      className={linkClass()}
                      aria-expanded={openDropdown === link}
                    >
                      {link} ▾
                    </button>
                    {openDropdown === link && (
                      <div className="absolute left-0 top-full z-50 min-w-[200px] border border-gray-200 bg-white shadow-lg">
                        {PAGE_DROPDOWN.map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="block px-4 py-2 font-chivo text-[14px] text-ink hover:bg-gray-50 hover:text-brand-red"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a href="#" className={linkClass()}>
                    {link}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile hamburger */}
      <div className="flex items-center justify-between border-t border-gray-100 bg-white px-4 py-3 lg:hidden">
        <a href="/" className="font-chivo text-xl font-bold text-brand-red">
          KICKER
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="text-ink"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile collapse panel */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-2 font-chivo text-[16px] font-bold text-ink hover:text-brand-red"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
