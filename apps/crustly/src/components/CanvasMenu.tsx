import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const menuLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Pages', href: '#pages' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function CanvasMenu() {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {/* Sticky canvas menu bar */}
      <div className="fixed top-16 z-40 flex w-full items-center justify-between bg-navy px-4 py-3 md:px-8">
        <button
          onClick={handleToggle}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="text-white transition-colors hover:text-brand"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <a
          href="#contact"
          className="rounded-[3px] bg-brand px-6 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
        >
          Contact Us
        </a>
      </div>

      {/* Side menu panel */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-[100] bg-black/50"
            onClick={handleClose}
            aria-hidden="true"
          />
          <aside
            className="fixed left-0 top-0 z-[101] h-full w-72 bg-navy shadow-xl"
            aria-label="Side navigation"
          >
            <div className="mt-32 flex flex-col items-center gap-6">
              {menuLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleClose}
                  className="text-lg font-medium text-white transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </aside>
        </>
      )}
    </>
  )
}
