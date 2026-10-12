import { useEffect, useRef } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import {
  MENU,
  MENU_HREF,
  MENU_ID,
  MENU_ID_PANEL,
  MENU_LABEL,
  MENU_NAV_LABEL,
  MENU_TRIGGER_ID,
  MENU_TRIGGER_PANEL_ID,
} from '../lib/site'
import type { NavVariant } from '../lib/styles'
import {
  menuCaretClass,
  menuClass,
  menuItemClass,
  menuLinkClass,
  menuStaticClass,
  menuStaticLinkClass,
  navItemClass,
  navRowClass,
} from '../lib/styles'
import { useDropdown } from '../lib/use-dropdown'

/** The ids the trigger and its menu carry, kept apart so both presentations can be mounted. */
const IDS: Record<NavVariant, { trigger: string; menu: string }> = {
  desktop: { trigger: MENU_TRIGGER_ID, menu: MENU_ID },
  panel: { trigger: MENU_TRIGGER_PANEL_ID, menu: MENU_ID_PANEL },
}

export interface DropdownProps {
  /** Which of the page's two presentations this row is drawn in. */
  variant: NavVariant
  /** Reports an activation, so the surface that owns this row can fold itself away. */
  onNavigate: () => void
}

/**
 * The rigging row — the second of the bar's five — and the four destinations behind it. On the
 * wide bar the row is a trigger that keeps the design's own `6 × 3` caret, opening a white,
 * borderless, 4px-rounded menu flush under itself; hover or a click opens it, a press anywhere
 * outside, `Escape` (which hands focus back to the trigger) or a chosen destination shuts it, and
 * a keyboard walks it exactly as the design's own script does — `ArrowDown` on the trigger opens
 * the menu and lands on the first item, then `ArrowDown`/`ArrowUp` step from one item to the
 * next. Nothing is mounted inside the menu while it is shut. Inside the folding panel the design
 * keeps that same menu **permanently expanded** — `display:block`, `position:static`, on the
 * panel's own black surface — and the row above it is a plain destination rather than a trigger.
 */
export function Dropdown({ variant, onNavigate }: DropdownProps) {
  const { trigger: triggerId, menu: menuId } = IDS[variant]
  const { isOpen, open, close, toggle, rootRef, triggerRef } = useDropdown()
  const menuRef = useRef<HTMLUListElement | null>(null)
  const pendingFocus = useRef(false)

  const items = (): HTMLAnchorElement[] =>
    Array.from((menuRef.current as HTMLUListElement).querySelectorAll('a'))

  // The menu only reaches the page with the render that opens it, so a keyboard opening lands its
  // focus here instead of in the handler that asked for it.
  useEffect(() => {
    if (!isOpen || !pendingFocus.current) {
      return
    }

    pendingFocus.current = false
    ;(menuRef.current as HTMLUListElement).querySelector('a')!.focus()
  }, [isOpen])

  const handleTriggerKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== 'ArrowDown') {
      return
    }

    event.preventDefault()
    pendingFocus.current = true
    open()
  }

  const handleMenuKeyDown = (event: ReactKeyboardEvent<HTMLUListElement>) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
      return
    }

    event.preventDefault()

    const links = items()
    const from = links.indexOf(document.activeElement as HTMLAnchorElement)
    const target = links[from + (event.key === 'ArrowDown' ? 1 : -1)]

    if (target) {
      target.focus()
    }
  }

  const handleItemActivation = () => {
    close()
    onNavigate()
  }

  if (variant === 'panel') {
    return (
      <li className={navItemClass}>
        <div className="w-full">
          <a
            id={triggerId}
            href={MENU_HREF}
            onClick={onNavigate}
            className={navRowClass({ variant: 'panel', current: false })}
          >
            {MENU_LABEL}
            <span aria-hidden="true" className={menuCaretClass} />
          </a>

          <ul id={menuId} aria-label={MENU_NAV_LABEL} className={menuStaticClass}>
            {MENU.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={onNavigate} className={menuStaticLinkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>
    )
  }

  return (
    <li ref={rootRef} className={menuItemClass} onMouseEnter={open} onMouseLeave={close}>
      <button
        id={triggerId}
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={toggle}
        onKeyDown={handleTriggerKeyDown}
        className={cn(navRowClass({ variant: 'desktop', current: false }), 'cursor-pointer')}
      >
        {MENU_LABEL}
        <span aria-hidden="true" className={menuCaretClass} />
      </button>

      {isOpen && (
        <ul
          id={menuId}
          ref={menuRef}
          aria-labelledby={triggerId}
          onKeyDown={handleMenuKeyDown}
          className={menuClass}
          data-testid={menuId}
        >
          {MENU.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={handleItemActivation} className={menuLinkClass}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
