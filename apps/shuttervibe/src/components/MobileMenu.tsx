import { X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  activePage: 'home' | 'photos'
  onNavigate: (page: 'home' | 'photos') => void
}

const navLinks = [
  { label: 'Home', page: 'home' as const },
  { label: 'Photos', page: 'photos' as const },
  { label: 'About Me', page: 'home' as const },
  { label: 'Contact', page: 'home' as const },
] as const

export function MobileMenu({ open, onClose, activePage, onNavigate }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-[1999] bg-black/60 transition-opacity duration-300',
          open ? 'opacity-100 visible' : 'opacity-0 invisible',
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <div
        className={cn(
          'fixed top-0 right-0 z-[2000] h-full w-[300px] bg-white shadow-xl transition-transform duration-300',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-end p-5">
          <button
            onClick={onClose}
            className="text-3xl text-gray-800 transition-colors hover:text-brand"
            aria-label="Close menu"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <nav className="px-5">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate(link.page)
                    onClose()
                  }}
                  className={cn(
                    'block py-2 text-xl font-medium transition-colors',
                    activePage === link.page && link.page === 'photos'
                      ? 'text-brand'
                      : 'text-gray-900 hover:text-brand',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
