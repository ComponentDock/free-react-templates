import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { X } from 'lucide-react'
import { navLinks } from '../data'

/** Mobile off-canvas menu: a burger toggle (fixed top-right, white
 *  variant over the hero), a right-slide white panel with the wordmark
 *  and stacked nav links, and a close button. Escape closes the panel. */
export function MobileMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="fixed right-5 top-5 z-50 flex h-8 w-7 flex-col items-center justify-center gap-[5px] text-white"
      >
        <span className="h-0.5 w-7 bg-white" aria-hidden="true" />
        <span className="h-0.5 w-7 bg-white" aria-hidden="true" />
        <span className="h-0.5 w-7 bg-white" aria-hidden="true" />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            data-testid="menu-backdrop"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <div
            className={cn('offcanvas-panel', open && 'block')}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl font-bold uppercase tracking-wide text-primary">
                Epicure
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded p-1 text-body transition-colors hover:text-primary"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile navigation links" className="mt-10">
              <ul className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-xl font-bold uppercase tracking-wide text-body transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  )
}
