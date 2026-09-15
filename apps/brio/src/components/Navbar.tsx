import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="text-2xl font-bold text-white">
            Brio
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              About
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              Features
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              Process
            </a>
          </nav>
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="border-t border-white/10 bg-black/20 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-3">
            <a
              href="#about"
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              About
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              Features
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              Process
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
