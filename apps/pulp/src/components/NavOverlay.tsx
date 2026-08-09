import { useEffect } from 'react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#editorial' },
  { label: 'Blog', href: '#editorial' },
  { label: 'Contact', href: '#contact' },
] as const

interface NavOverlayProps {
  open: boolean
  onClose: () => void
}

export function NavOverlay({ open, onClose }: NavOverlayProps) {
  useEffect(() => {
    if (!open) {
      return
    }
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div
      data-state={open ? 'open' : 'closed'}
      aria-hidden={!open}
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.99)] transition-all duration-700 ease-out',
        open ? 'scale-100 opacity-100' : 'pointer-events-none scale-90 opacity-0',
      )}
    >
      <img
        src="https://picsum.photos/seed/pulp-menu/1600/1000"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-black/30" />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="absolute right-6 top-6 flex h-10 w-10 flex-col items-center justify-center sm:right-10 sm:top-8"
      >
        <span className="absolute h-0.5 w-8 -rotate-45 bg-white transition-colors hover:bg-gold" />
        <span className="absolute h-0.5 w-8 rotate-45 bg-white transition-colors hover:bg-gold" />
      </button>

      <div className="relative px-6 text-center">
        <h2 className="font-display text-6xl uppercase tracking-wide text-white sm:text-7xl">
          Pulp
        </h2>
        <p className="mt-3 text-sm font-light uppercase tracking-[0.5em] text-white/80">Magazine</p>
        <nav aria-label="Overlay" className="mt-12 flex flex-col items-center gap-2">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className={cn(
                'relative px-2 py-1.5 text-xs font-medium uppercase tracking-[0.35em] transition-colors hover:text-gold',
                'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100',
                index === 0 ? 'text-gold' : 'text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
