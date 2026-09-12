import { Search, Menu, X, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

const cryptoPrices = [
  { symbol: 'BTC', price: '$10,200' },
  { symbol: 'ETH', price: '$979' },
  { symbol: 'LTC', price: '$230' },
] as const

const navLinks = ['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact'] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-dark">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="text-lg font-bold">
            <span className="text-brand">in</span>
            <span className="text-white">vest</span>
            <div className="text-[10px] font-normal uppercase tracking-widest text-white">
              Blockchain
            </div>
          </div>

          {/* Crypto prices */}
          <div className="hidden items-center gap-4 text-xs font-semibold text-brand md:flex">
            {cryptoPrices.map(({ symbol, price }) => (
              <span key={symbol}>
                {symbol} {price}
              </span>
            ))}
          </div>

          {/* Register / Login */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="bg-brand px-4 py-1.5 text-xs font-semibold uppercase text-dark transition-colors hover:bg-brand-hover"
            >
              register
            </a>
            <a href="#" className="text-xs font-semibold uppercase text-white hover:text-brand">
              login
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="ml-2 text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Main menu */}
      <nav className="hidden bg-dark/95 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`text-xs font-semibold uppercase tracking-wide transition-colors ${
                    link === 'Home' ? 'text-brand' : 'text-white hover:text-brand'
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 text-xs text-white">
            <div className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              <span>+825 25 800 800</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" />
              <span>office@vestly.com</span>
            </div>
            <button className="text-white hover:text-brand" aria-label="Search">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="bg-dark px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-xs font-semibold uppercase tracking-wide text-white hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
