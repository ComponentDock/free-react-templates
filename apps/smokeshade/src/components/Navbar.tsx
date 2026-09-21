import { useState } from 'react'

const navLinks = ['Home', 'About Us', 'Blog', 'Gallery', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-[#191919]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#" className="text-xl font-bold text-white">
          Smokeshade
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-white transition-colors hover:text-[#e32879]"
            >
              {link}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>
      {mobileOpen && (
        <nav className="flex flex-col gap-4 bg-[#191919] px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-white transition-colors hover:text-[#e32879]"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
