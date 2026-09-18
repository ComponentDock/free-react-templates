import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
        {/* Logo */}
        <a href="/" className="text-xl font-bold tracking-tight text-heading">
          DWELL<span className="text-brand">IX</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="font-medium text-brand">
            Home
          </a>
          <button className="flex items-center gap-1 font-medium text-heading hover:text-brand">
            Pages <ChevronDown className="h-4 w-4" />
          </button>
          <a href="#" className="font-medium text-heading hover:text-brand">
            Rent
          </a>
          <a href="#" className="font-medium text-heading hover:text-brand">
            Agents
          </a>
          <a href="#" className="font-medium text-heading hover:text-brand">
            About
          </a>
          <a href="#" className="font-medium text-heading hover:text-brand">
            Blog
          </a>
        </div>

        {/* Contact CTA */}
        <div className="hidden md:block">
          <Button className="rounded border-2 border-brand bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-dark">
            Contact Us
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-heading md:hidden"
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
            <a href="#" className="font-medium text-heading">
              Pages
            </a>
            <a href="#" className="font-medium text-heading">
              Rent
            </a>
            <a href="#" className="font-medium text-heading">
              Agents
            </a>
            <a href="#" className="font-medium text-heading">
              About
            </a>
            <a href="#" className="font-medium text-heading">
              Blog
            </a>
            <hr className="border-border" />
            <Button className="rounded border-2 border-brand bg-brand px-5 py-2 text-sm font-semibold text-white">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
