import { useState } from 'react'
import { Search, X, Menu } from 'lucide-react'

const navLinks = ['Home', 'Pages', 'Project', 'Models', 'Casting', 'Blog', 'Contact']

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#" className="text-xl font-bold text-brand">
            CanvasGallery
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm font-medium text-text-dark transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="rounded-full p-2 text-text-dark transition-colors hover:bg-bg-gray"
            >
              <Search size={18} />
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
              className="rounded-full p-2 text-text-dark transition-colors hover:bg-bg-gray md:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Search modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50">
          <div className="mx-4 w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold">Search</span>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setSearchOpen(false)}
                className="rounded-full p-1 hover:bg-bg-gray"
              >
                <X size={20} />
              </button>
            </div>
            <input
              type="search"
              placeholder="Search and hit enter..."
              className="w-full rounded-full border border-border px-4 py-2 text-sm outline-none focus:border-brand"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-white">
          <div className="flex items-center justify-between p-4">
            <span className="text-xl font-bold text-brand">CanvasGallery</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="rounded-full p-2 hover:bg-bg-gray"
            >
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col gap-4 px-6 pt-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-lg font-medium text-text-dark transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Spacer for fixed nav */}
      <div className="h-16" />
    </>
  )
}
