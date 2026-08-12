import { useEffect, useRef, useState } from 'react'
import { Dumbbell, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'

/**
 * Header — absolute top bar: dumbbell logomark + "Ironvault" wordmark left,
 * a 3-bar hamburger trigger right. The trigger opens a full-screen off-canvas
 * overlay menu (light #f0f0f0) with huge uppercase section links, a close
 * control, focus moved to the close button, and Escape-to-close.
 */
export function Header() {
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    // The close button is rendered with the overlay before effects run, so
    // the ref is always attached here.
    closeRef.current!.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="absolute left-0 right-0 top-0 z-40 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#home" aria-label={`${BRAND} home`} className="flex items-center gap-3">
          <Dumbbell className="h-8 w-8 text-brand" aria-hidden="true" />
          <span className="text-2xl font-bold uppercase tracking-wide text-ink">{BRAND}</span>
        </a>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-line bg-white"
        >
          <span className="h-0.5 w-7 bg-ink" />
          <span className="h-0.5 w-7 bg-ink" />
          <span className="h-0.5 w-7 bg-ink" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-menu px-10 py-8 transition-opacity duration-500">
          <div className="flex justify-end">
            <button
              ref={closeRef}
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2"
            >
              <X className="h-8 w-8 text-ink" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Overlay" className="flex flex-1 items-center justify-center">
            <ul className="space-y-2 text-center">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-3xl font-bold uppercase leading-[1.8] text-ink transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
