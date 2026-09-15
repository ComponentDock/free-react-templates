import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
        {/* Logo */}
        <a href="/" className="text-xl font-bold tracking-tight text-nav-text">
          CLASSY<span className="text-brand">ADS</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="font-medium text-brand">
            Home
          </a>
          <a href="#" className="font-medium text-nav-text hover:text-brand">
            Ads
          </a>
          <button className="flex items-center gap-1 font-medium text-nav-text hover:text-brand">
            About <ChevronDown className="h-4 w-4" />
          </button>
          <a href="#" className="font-medium text-nav-text hover:text-brand">
            Blog
          </a>
          <a href="#" className="font-medium text-nav-text hover:text-brand">
            Contact
          </a>
        </div>

        {/* Auth + CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a href="#" className="text-sm font-medium text-nav-text hover:text-brand">
            Log In
          </a>
          <a href="#" className="text-sm font-medium text-nav-text hover:text-brand">
            Register
          </a>
          <Button className="rounded bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark">
            + Post an Ad
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-nav-text md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white px-8 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#" className="font-medium text-brand">
              Home
            </a>
            <a href="#" className="font-medium text-nav-text">
              Ads
            </a>
            <a href="#" className="font-medium text-nav-text">
              About
            </a>
            <a href="#" className="font-medium text-nav-text">
              Blog
            </a>
            <a href="#" className="font-medium text-nav-text">
              Contact
            </a>
            <hr className="border-border" />
            <a href="#" className="text-sm font-medium text-nav-text">
              Log In
            </a>
            <a href="#" className="text-sm font-medium text-nav-text">
              Register
            </a>
            <Button className="rounded bg-brand px-4 py-2 text-sm font-semibold text-white">
              + Post an Ad
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
