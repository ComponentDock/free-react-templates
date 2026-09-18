import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className={cn('absolute top-0 left-0 right-0 z-10', className)}>
      <div className="w-full bg-dark-bg/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[70px]">
            {/* Brand */}
            <a href="#" className="text-white text-[31px] font-light no-underline">
              ListNest
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              <Dropdown label="Explore" />
              <Dropdown label="Listing" />
              <Dropdown label="Pages" />
              <a
                href="#"
                className="text-white text-[16px] font-light hover:text-white/80 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-white text-[16px] font-light hover:text-white/80 transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="border border-white/30 text-white px-4 py-2 text-[16px] font-light hover:text-primary hover:border-primary transition-colors"
              >
                + Add Listing
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-white border border-white/30 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-bg border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <MobileDropdown label="Explore" />
            <MobileDropdown label="Listing" />
            <MobileDropdown label="Pages" />
            <a href="#" className="text-white text-[16px] font-light py-2">
              About
            </a>
            <a href="#" className="text-white text-[16px] font-light py-2">
              Blog
            </a>
            <a href="#" className="border border-white/30 text-white px-4 py-2 text-center">
              + Add Listing
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

function Dropdown({ label }: { label: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-white text-[16px] font-light bg-transparent border-none cursor-pointer hover:text-white/80 transition-colors">
        {label}
        <ChevronDown size={10} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-dropdown-bg min-w-[160px] shadow-lg">
          <a
            href="#"
            className="block px-4 py-2 text-dropdown-text text-sm hover:text-white transition-colors no-underline"
          >
            Action
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-dropdown-text text-sm hover:text-white transition-colors no-underline"
          >
            Another action
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-dropdown-text text-sm hover:text-white transition-colors no-underline"
          >
            Something else here
          </a>
        </div>
      )}
    </div>
  )
}

function MobileDropdown({ label }: { label: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        className="flex items-center justify-between w-full text-white text-[16px] font-light bg-transparent border-none cursor-pointer py-2"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown size={10} className={cn('transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="pl-4">
          <a href="#" className="block py-2 text-dropdown-text text-sm">
            Action
          </a>
          <a href="#" className="block py-2 text-dropdown-text text-sm">
            Another action
          </a>
          <a href="#" className="block py-2 text-dropdown-text text-sm">
            Something else here
          </a>
        </div>
      )}
    </div>
  )
}
