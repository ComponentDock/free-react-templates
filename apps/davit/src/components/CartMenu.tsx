import { Fragment, useEffect, useRef } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'
import { ShoppingCart } from 'lucide-react'
import {
  CART_LABEL,
  CART_MENU,
  CART_MENU_DIVIDERS,
  CART_MENU_ID,
  CART_MENU_PANEL_ID,
  CART_TRIGGER_ID,
  CART_TRIGGER_PANEL_ID,
} from '../lib/site'
import type { NavVariant } from '../lib/styles'
import {
  cartItemClass,
  cartMarkClass,
  cartMenuClass,
  cartMenuDividerClass,
  cartMenuItemClass,
  cartTriggerClass,
} from '../lib/styles'
import { useCartMenu } from '../lib/use-cart-menu'

/** The ids the link and its own list carry, kept apart so both presentations can be mounted. */
const IDS: Record<NavVariant, { trigger: string; list: string }> = {
  desktop: { trigger: CART_TRIGGER_ID, list: CART_MENU_ID },
  panel: { trigger: CART_TRIGGER_PANEL_ID, list: CART_MENU_PANEL_ID },
}

export interface CartMenuProps {
  /** Which of the page's two presentations this link is drawn in. */
  variant: NavVariant
  /** Reports an activation, so the surface that owns this link can fold itself away. */
  onNavigate: () => void
}

/**
 * The circled cart link — the sixth and last item of the list — and the bill list it opens.
 * The link is `40px` with an amber ring at every width, vertically centred in the card's tall
 * row and keeping both measurements as the panel's sixth stacked item. Its list hangs
 * right-aligned just under the circle: hover or a click opens it, a press anywhere outside,
 * `Escape` (which hands focus back to the link) or a chosen destination shuts it, and a
 * keyboard walks it exactly as the design's own script does — `ArrowDown` on the link opens
 * the list and lands on the first item, then `ArrowDown`/`ArrowUp` step from one item to the
 * next. Nothing is mounted inside it while it is shut, and every one of its five items leaves
 * for a real card of the yard block below.
 */
export function CartMenu({ variant, onNavigate }: CartMenuProps) {
  const { trigger: triggerId, list: listId } = IDS[variant]
  const { isOpen, open, close, toggle, rootRef, triggerRef } = useCartMenu()
  const listRef = useRef<HTMLUListElement | null>(null)
  const pendingFocus = useRef(false)

  const items = (): HTMLAnchorElement[] =>
    Array.from((listRef.current as HTMLUListElement).querySelectorAll('a'))

  // The list only reaches the page with the render that opens it, so a keyboard opening lands
  // its focus here instead of in the handler that asked for it.
  useEffect(() => {
    if (!isOpen) {
      return
    }

    if (!pendingFocus.current) {
      return
    }

    pendingFocus.current = false

    const list = listRef.current as HTMLUListElement

    list.querySelector('a')!.focus()
  }, [isOpen])

  const handleTriggerKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== 'ArrowDown') {
      return
    }

    event.preventDefault()
    pendingFocus.current = true
    open()
  }

  const handleListKeyDown = (event: ReactKeyboardEvent<HTMLUListElement>) => {
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

  return (
    <li ref={rootRef} className={cartItemClass} onMouseEnter={open} onMouseLeave={close}>
      <button
        id={triggerId}
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-label={CART_LABEL}
        onClick={toggle}
        onKeyDown={handleTriggerKeyDown}
        className={cartTriggerClass}
      >
        <ShoppingCart aria-hidden="true" className={cartMarkClass} />
      </button>

      {isOpen && (
        <ul
          id={listId}
          ref={listRef}
          onKeyDown={handleListKeyDown}
          className={cartMenuClass}
          data-testid={listId}
        >
          {CART_MENU.map((item, index) => (
            <Fragment key={item.href}>
              <li>
                <a href={item.href} onClick={handleItemActivation} className={cartMenuItemClass}>
                  {item.label}
                </a>
              </li>
              {CART_MENU_DIVIDERS.includes(index + 1) && (
                <li role="separator" className={cartMenuDividerClass} />
              )}
            </Fragment>
          ))}
        </ul>
      )}
    </li>
  )
}
