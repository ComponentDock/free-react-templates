import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 z-20 w-full py-12 md:py-16">
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="font-serif text-3xl font-bold text-white">
            Proxy
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
            >
              Home
            </a>
            <a
              href="#properties"
              className="text-sm uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
            >
              About
            </a>
            <a
              href="#blog"
              className="text-sm uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
            >
              Blog
            </a>
            <a
              href="#footer"
              className="text-sm uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
            >
              Contact
            </a>
          </nav>

          <button
            type="button"
            className="text-white md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <nav className="mt-4 flex flex-col gap-4 md:hidden">
            <a
              href="#home"
              className="text-sm uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
            <a
              href="#properties"
              className="text-sm uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              href="#blog"
              className="text-sm uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
              onClick={() => setOpen(false)}
            >
              Blog
            </a>
            <a
              href="#footer"
              className="text-sm uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
