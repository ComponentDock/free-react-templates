import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV } from '../lib/site'
import { panelRowClass } from '../lib/styles'

/** The id the header's hamburger points at through `aria-controls`. */
export const MOBILE_MENU_ID = 'mobile-menu'

export interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

/**
 * The 300px white drawer that is the only navigation below 992px: it slides in
 * from the right edge over a 50% veil, carries the same six rows as the desktop
 * row (mounted a second time from the same source of truth, never hand-copied),
 * and stays in the document so the slide can play — while closed it is
 * `invisible`, so nothing inside it can take focus. The close glyph, the veil,
 * Escape and a viewport wide enough for the row all dismiss it.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    closeRef.current?.focus()

    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key !== 'Escape') return
      onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  return (
    <div
      id={MOBILE_MENU_ID}
      aria-hidden={!open}
      className={cn('fixed inset-0 z-[2000] lg:hidden', !open && 'pointer-events-none invisible')}
    >
      <button
        type="button"
        data-testid="menu-veil"
        aria-label="Close the menu"
        onClick={onClose}
        className={cn(
          'absolute inset-0 bg-black/50 transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        )}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          'absolute top-0 right-0 h-screen w-[300px] overflow-hidden bg-white pt-5 shadow-panel transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : 'translate-x-[110%]',
        )}
      >
        <div className="flex px-5">
          <button
            ref={closeRef}
            type="button"
            aria-label="Close the menu"
            onClick={onClose}
            className="ml-auto leading-none text-ink transition-colors duration-300 hover:text-close-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-band"
          >
            <X aria-hidden="true" className="h-[30px] w-[30px]" />
          </button>
        </div>

        <div className="h-[calc(100vh-52px)] overflow-y-auto px-5 pb-[150px]">
          <ul>
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={panelRowClass(item.current === true)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
