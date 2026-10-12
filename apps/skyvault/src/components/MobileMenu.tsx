import { useEffect, useRef, type RefObject } from 'react'
import { cn } from '@free-react-templates/ui'
import { trapTab } from '../lib/focus-trap'

export interface NavItem {
  label: string
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export interface MobileMenuProps {
  open: boolean
  onClose: () => void
  triggerRef: RefObject<HTMLButtonElement | null>
}

const FOCUSABLE = 'a[href], button'

/**
 * The off-canvas panel. Below the desktop breakpoint the menu slides in from
 * the right over a translucent overlay. It traps Tab inside the panel, closes
 * on Escape and on a click on the overlay, and hands focus back to the
 * hamburger when it closes.
 */
export function MobileMenu({ open, onClose, triggerRef }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) {
      return
    }
    closeRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose, triggerRef])

  if (!open) {
    return null
  }

  return (
    <>
      <button
        type="button"
        aria-label="Close the menu overlay"
        onClick={onClose}
        className="fixed inset-0 z-[101] cursor-pointer bg-[rgba(255,255,255,.55)]"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        onKeyDown={(event) => {
          if (event.key !== 'Tab') {
            return
          }
          trapTab(
            event.nativeEvent,
            Array.from(event.currentTarget.querySelectorAll<HTMLElement>(FOCUSABLE)),
          )
        }}
        className={cn(
          'fixed top-0 right-0 z-[102] h-screen w-[350px] bg-night px-[30px] pt-[50px]',
          'shadow-none transition-all duration-[400ms]',
        )}
      >
        <button
          ref={closeRef}
          type="button"
          aria-label="Close panel"
          onClick={onClose}
          className="absolute top-[41px] left-[28px] h-[18px] w-[18px] rotate-45 rounded-[2px] hover:bg-[rgba(27,239,197,.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
        >
          <span className="absolute top-1/2 left-0 h-[2px] w-[18px] -translate-y-1/2 bg-white" />
          <span className="absolute top-0 left-1/2 h-[18px] w-[2px] -translate-x-1/2 bg-white" />
        </button>

        <div className="flex items-center justify-end gap-[4px]">
          <a href="#contact" onClick={onClose} className="text-[16px] font-semibold text-white">
            Login
          </a>
          <span aria-hidden="true" className="text-[16px] font-semibold text-white">
            /
          </span>
          <a href="#contact" onClick={onClose} className="text-[16px] font-semibold text-white">
            Register
          </a>
        </div>

        <nav aria-label="Mobile" className="mt-[50px]">
          <ul className="flex flex-col gap-[3px]">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="text-[24px] font-medium text-[rgba(255,255,255,.75)] transition-colors hover:text-mint"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
