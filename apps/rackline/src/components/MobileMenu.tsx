import { useEffect, useRef, useState, type KeyboardEvent, type RefObject } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { HOSTING_LINKS, HOSTING_SUB_LINKS, NAV_LINKS } from '../lib/nav'
import { trapTab } from '../lib/focus-trap'

export interface MobileMenuProps {
  open: boolean
  onClose: () => void
  active: string
  onNavigate: (label: string) => void
  /** The hamburger, so closing the panel hands focus back to it. */
  triggerRef?: RefObject<HTMLButtonElement | null>
}

const TOP_CLASS =
  'block px-5 py-[10px] text-[20px] text-ink-soft transition-colors hover:text-lime focus-visible:text-lime focus-visible:outline-none'
const SUB_CLASS =
  'block py-1 pl-10 text-[16px] text-ink-soft transition-colors hover:text-lime focus-visible:text-lime focus-visible:outline-none'
const SUB_SUB_CLASS =
  'block py-1 pl-[60px] text-[16px] text-ink-soft transition-colors hover:text-lime focus-visible:text-lime focus-visible:outline-none'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

/** Keeps Tab cycling inside the open panel. */
function handlePanelKeyDown(event: KeyboardEvent<HTMLDivElement>) {
  const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(FOCUSABLE))
  trapTab(event.nativeEvent, focusable)
}

/**
 * The off-canvas panel that replaces the navigation below the desktop
 * breakpoint: a 300px white drawer sliding in from the right over a translucent
 * veil, with a 30px close control, the same destinations at 20px (16px for the
 * nested levels) and a round collapse control whose glyph rotates while the
 * hosting list is hidden. Focus moves into the panel, is trapped there, and
 * returns to the hamburger on close.
 */
export function MobileMenu({ open, onClose, active, onNavigate, triggerRef }: MobileMenuProps) {
  const [hostingOpen, setHostingOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        triggerRef?.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose, triggerRef])

  function dismiss() {
    onClose()
    triggerRef?.current?.focus()
  }

  if (!open) return null

  return (
    <div id="mobile-menu" className="fixed inset-0 z-[2000] min-[992px]:hidden">
      <div
        data-testid="menu-veil"
        role="presentation"
        onClick={dismiss}
        className="absolute inset-0 bg-black/60"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        onKeyDown={handlePanelKeyDown}
        className="absolute top-0 right-0 h-full w-[300px] bg-surface pt-5 shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out"
      >
        <div className="flex px-5">
          <button
            ref={closeRef}
            type="button"
            aria-label="Close the menu"
            onClick={dismiss}
            className="ml-auto leading-none text-muted transition-colors hover:text-ink-strong focus-visible:text-ink-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
          >
            <X aria-hidden="true" className="h-[30px] w-[30px]" />
          </button>
        </div>

        <div className="h-[calc(100vh-52px)] overflow-y-auto px-5 pb-[150px]">
          <ul className="pt-2">
            {NAV_LINKS.map((link) =>
              link.label === 'Hosting' ? (
                <li key={link.label}>
                  <div className="relative">
                    <a
                      href={link.href}
                      aria-current={active === link.label ? 'page' : undefined}
                      onClick={() => onNavigate(link.label)}
                      className={cn(TOP_CLASS, active === link.label && 'text-lime')}
                    >
                      {link.label}
                    </a>
                    <button
                      type="button"
                      aria-expanded={hostingOpen}
                      aria-label="Show hosting links"
                      onClick={() => setHostingOpen((value) => !value)}
                      className={cn(
                        'absolute top-[10px] right-0 grid h-9 w-9 place-items-center rounded-full text-copy transition-transform duration-300 hover:bg-soft focus-visible:outline-2 focus-visible:outline-lime',
                        hostingOpen && 'rotate-180',
                      )}
                    >
                      <ChevronDown aria-hidden="true" className="h-4 w-4" />
                    </button>
                  </div>

                  {hostingOpen && (
                    <ul className="pb-2">
                      {HOSTING_LINKS.map((hosting) => (
                        <li key={hosting.label}>
                          <a
                            href={hosting.href}
                            onClick={() => onNavigate('Hosting')}
                            className={SUB_CLASS}
                          >
                            {hosting.label}
                          </a>
                        </li>
                      ))}
                      <li>
                        <span className={cn(SUB_CLASS, 'text-muted-alt')}>Sub menu</span>
                        <ul>
                          {HOSTING_SUB_LINKS.map((sub) => (
                            <li key={sub.label}>
                              <a
                                href={sub.href}
                                onClick={() => onNavigate('Hosting')}
                                className={SUB_SUB_CLASS}
                              >
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={active === link.label ? 'page' : undefined}
                    onClick={() => onNavigate(link.label)}
                    className={cn(TOP_CLASS, active === link.label && 'text-lime')}
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
