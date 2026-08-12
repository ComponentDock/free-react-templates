import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'FETURES', href: '#feature' },
  { label: 'About', href: '#about' },
  { label: 'SCREENSHOT', href: '#screenshot' },
  { label: 'Price', href: '#price' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="absolute inset-x-0 top-0 z-50 flex items-center justify-between bg-transparent px-[15px] py-0 text-ink">
      {/* Logo wordmark (source: a.navbar-brand > img → text wordmark). */}
      <a
        href="#home"
        className="flex h-[84px] items-center font-display text-[26px] font-bold tracking-tight"
      >
        Ripply
      </a>

      {/* Desktop menu (source: ul.nav.navbar-nav.navbar-right). */}
      <ul className="hidden items-center md:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="group relative block px-[18px] py-2 text-[14px] uppercase tracking-[0.28px]"
            >
              {/* Gradient pill revealed on hover (source: a:before). */}
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-[13px] bg-[linear-gradient(to_right,#d6c3fc,#acc4fc,#98c5fc)] opacity-0 transition-opacity group-hover:opacity-100"
              />
              {/* White rounded fill over the pill (source: a:after, radius 13px). */}
              <span
                aria-hidden="true"
                className="absolute inset-[1.5%] rounded-[13px] bg-white opacity-0 transition-opacity group-hover:opacity-100"
              />
              <span className="relative">{link.label}</span>
            </a>
          </li>
        ))}
        <li aria-hidden="true" className="pl-[18px]">
          <Search className="h-[18px] w-[18px] text-body" />
        </li>
      </ul>

      {/* Mobile burger toggle. */}
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="rounded-md p-2 md:hidden"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu panel (duplicates the desktop links). */}
      {open && (
        <div className="absolute inset-x-0 top-[84px] border-y border-gray-100 bg-white px-[15px] py-4 shadow-lg md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-[13px] px-4 py-2 text-[14px] uppercase tracking-[0.28px] hover:bg-[linear-gradient(to_right,#d6c3fc,#acc4fc,#98c5fc)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
