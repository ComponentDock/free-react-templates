import { useEffect, useRef, useState, type KeyboardEvent, type RefObject } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { CONTACT, NAV_LINKS } from '../lib/site'
import { trapTab } from '../lib/focus-trap'

export interface MobileMenuProps {
  open: boolean
  onClose: () => void
  active: string
  onNavigate: (label: string) => void
  /** The header's toggle, so closing hands focus back to it. */
  triggerRef?: RefObject<HTMLButtonElement | null>
}

const TOP_CLASS =
  'block px-5 py-[10px] font-heading text-[20px] text-white transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-none'
const SUB_CLASS =
  'block py-1 pl-10 text-[16px] text-white/80 transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-none'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

/** Keeps Tab cycling inside the open panel. */
function handlePanelKeyDown(event: KeyboardEvent<HTMLDivElement>) {
  const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(FOCUSABLE))
  trapTab(event.nativeEvent, focusable)
}

/**
 * The panel that replaces the desktop navigation below `lg`: a 300px
 * `header-sticky` drawer over a dark veil, holding the same six destinations,
 * a collapse control for the item that owns children, and the phone action.
 * Focus moves in on open, is trapped, and returns to the toggle on close.
 */
export function MobileMenu({ open, onClose, active, onNavigate, triggerRef }: MobileMenuProps) {
  const [expanded, setExpanded] = useState('')
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== 'Escape') return

      onClose()
      triggerRef?.current?.focus()
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
    <div id="mobile-menu" className="fixed inset-0 z-[2000] lg:hidden">
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
        className="absolute top-0 right-0 h-full w-[300px] overflow-y-auto bg-header-sticky pt-5 shadow-header"
      >
        <div className="flex px-5">
          <button
            ref={closeRef}
            type="button"
            aria-label="Close the menu"
            onClick={dismiss}
            className="ml-auto leading-none text-white transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <X aria-hidden="true" className="h-[30px] w-[30px]" />
          </button>
        </div>

        <div className="px-5 pb-[150px]">
          <ul className="pt-2">
            {NAV_LINKS.map((link) => {
              const children = link.children
              const isExpanded = expanded === link.label

              return (
                <li key={link.label}>
                  <div className="relative">
                    <a
                      href={link.href}
                      aria-current={active === link.label ? 'page' : undefined}
                      onClick={() => onNavigate(link.label)}
                      className={cn(TOP_CLASS, active === link.label && 'text-brand')}
                    >
                      {link.label}
                    </a>
                    {children ? (
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-label={`Show the ${link.label} links`}
                        onClick={() => setExpanded(isExpanded ? '' : link.label)}
                        className={cn(
                          'absolute top-[10px] right-0 grid h-9 w-9 place-items-center rounded-full text-white transition-transform duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-brand',
                          isExpanded && 'rotate-180',
                        )}
                      >
                        <ChevronDown aria-hidden="true" className="h-4 w-4" />
                      </button>
                    ) : null}
                  </div>

                  {children && isExpanded ? (
                    <ul className="pb-2">
                      {children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            onClick={() => onNavigate(link.label)}
                            className={SUB_CLASS}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              )
            })}
          </ul>

          <a
            href={CONTACT.telHref}
            aria-label={`Call support on ${CONTACT.phone}`}
            className="mt-6 inline-flex items-center gap-[9px] rounded-pill bg-brand px-[29px] py-[16px] font-heading text-[14px] font-medium tracking-[0.02em] text-white uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Menu aria-hidden="true" className="h-4 w-4" />
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
