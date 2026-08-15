import { X } from 'lucide-react'
import { navLinks } from '../data'

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate text-white">
      <div className="flex items-center justify-between px-6 py-5">
        <p className="text-sm font-light tracking-wide text-white/90">Slate</p>
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="inline-flex h-12 w-12 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <X className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="flex flex-1 flex-col items-center justify-center gap-8 px-6 pb-16"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="text-2xl font-light text-white transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
