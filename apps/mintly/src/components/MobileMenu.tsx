import { X } from 'lucide-react'
import { navLinks } from '../data'

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white text-charcoal">
      <div className="flex items-center justify-between px-4 py-5 lg:px-8">
        <p className="text-lg font-bold">Mintly</p>
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-charcoal transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
        >
          <X className="h-6 w-6" aria-hidden="true" />
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
            className="text-2xl font-semibold text-charcoal transition-colors hover:text-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
