import { useState } from 'react'
const links = ['Home', 'Properties', 'Blog', 'About', 'Contact']
export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-heading">
          Domicile<span className="text-brand">.</span>
        </a>
        <button
          className="lg:hidden text-heading text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="fa fa-bars" />
        </button>
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-semibold text-heading hover:text-brand transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
      {open && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-semibold text-heading hover:text-brand"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
