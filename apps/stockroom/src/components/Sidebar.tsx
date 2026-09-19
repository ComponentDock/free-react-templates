import { useState } from 'react'
import { ShoppingCart, Heart, Search, X } from 'lucide-react'

interface SidebarProps {
  onSearchOpen: () => void
}

const NAV_LINKS = ['Home', 'Shop', 'Product', 'Cart', 'Checkout']

export function Sidebar({ onSearchOpen }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile nav */}
      <div className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between bg-white px-8 py-4 shadow-md md:hidden">
        <a href="/" className="text-xl font-bold text-dark">
          Stockroom
        </a>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1"
        >
          <span className="block h-[3px] w-7 bg-brand" />
          <span className="block h-[3px] w-7 bg-brand" />
          <span className="block h-[3px] w-7 bg-brand" />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-dark/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[300px] bg-white transition-transform duration-300 md:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:z-auto`}
      >
        <div className="flex h-full flex-col p-10">
          {/* Close button (mobile) */}
          <button
            type="button"
            aria-label="Close navigation"
            className="mb-6 self-end text-2xl text-dark md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <X size={20} />
          </button>

          {/* Logo */}
          <a href="/" className="mb-10 text-2xl font-bold text-dark">
            Stockroom
          </a>

          {/* Navigation */}
          <nav className="mb-8">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link, i) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`text-sm transition-colors duration-300 ${i === 0 ? 'font-semibold text-dark' : 'text-body hover:text-dark'}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="mb-8 flex flex-col gap-4">
            <a
              href="#shop"
              className="flex h-[55px] min-w-[160px] items-center justify-center bg-brand px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              %Discount%
            </a>
            <a
              href="#shop"
              className="flex h-[55px] min-w-[160px] items-center justify-center bg-brand px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              New this week
            </a>
          </div>

          {/* Cart / Fav / Search */}
          <div className="mb-8 flex flex-col gap-4">
            <button
              type="button"
              className="flex items-center gap-2 text-sm text-body transition-colors hover:text-dark"
            >
              <ShoppingCart size={16} />
              Cart <span className="text-xs">(0)</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 text-sm text-body transition-colors hover:text-dark"
            >
              <Heart size={16} />
              Favourite
            </button>
            <button
              type="button"
              className="flex items-center gap-2 text-sm text-body transition-colors hover:text-dark"
              onClick={onSearchOpen}
            >
              <Search size={16} />
              Search
            </button>
          </div>

          {/* Social icons */}
          <div className="mt-auto flex justify-between">
            <a href="#pinterest" aria-label="Pinterest" className="text-body hover:text-dark">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
            </a>
            <a href="#instagram" aria-label="Instagram" className="text-body hover:text-dark">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a href="#facebook" aria-label="Facebook" className="text-body hover:text-dark">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#twitter" aria-label="Twitter" className="text-body hover:text-dark">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
