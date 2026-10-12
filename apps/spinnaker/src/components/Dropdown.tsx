import { useCallback, useEffect, useRef } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'
import {
  MENU_ID,
  MENU_ID_PANEL,
  MENU_LABEL,
  MENU_TRIGGER_ID,
  MENU_TRIGGER_PANEL_ID,
} from '../lib/site'
import { menuCaretClass, menuItemClass, navRowClass } from '../lib/styles'
import type { NavVariant } from '../lib/styles'
import { useDropdown } from '../lib/use-dropdown'
import { MegaPanel } from './MegaPanel'

/** The ids the trigger and its panel carry, kept apart so both presentations can be mounted. */
const IDS: Record<NavVariant, { trigger: string; panel: string }> = {
  desktop: { trigger: MENU_TRIGGER_ID, panel: MENU_ID },
  panel: { trigger: MENU_TRIGGER_PANEL_ID, panel: MENU_ID_PANEL },
}

export interface DropdownProps {
  /** Which of the page's two presentations this row is drawn in. */
  variant: NavVariant
  /** Reports an activation, so the surface that owns this row can fold itself away. */
  onNavigate: () => void
}

/**
 * The wide-panel row — the **last** of the bar's four — and everything behind the panel it opens.
 * On the bar the row is a trigger that keeps the design's own `8 × 4` caret after its label; hover
 * or a click opens the panel, a press anywhere outside, `Escape` (which hands focus back to the
 * trigger) or a chosen destination shuts it, and a keyboard walks it exactly as the design's own
 * script does — `ArrowDown` on the trigger opens the panel and lands on the first of its links, then
 * `ArrowDown`/`ArrowUp` step from one link to the next. Nothing is mounted inside the panel while it
 * is shut. Inside the folding panel below 992px the same row opens the same panel as an in-flow
 * block over the dark surface, and — unlike the family's neighbouring variants — it is **not**
 * standing open: it still needs the hover or the click.
 */
export function Dropdown({ variant, onNavigate }: DropdownProps) {
  const { trigger: triggerId, panel: panelId } = IDS[variant]
  const { isOpen, open, close, toggle, rootRef, triggerRef } = useDropdown()
  const panelRef = useRef<HTMLDivElement | null>(null)
  const pendingFocus = useRef(false)

  const links = useCallback((): HTMLAnchorElement[] => {
    const list = (panelRef.current as HTMLDivElement).querySelector('ul') as HTMLUListElement

    return Array.from(list.querySelectorAll('a'))
  }, [])

  // The panel only reaches the page with the render that opens it, so a keyboard opening lands its
  // focus here instead of in the handler that asked for it.
  useEffect(() => {
    if (!isOpen || !pendingFocus.current) {
      return
    }

    pendingFocus.current = false
    ;(links()[0] as HTMLAnchorElement).focus()
  }, [isOpen, links])

  const handleTriggerKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== 'ArrowDown') {
      return
    }

    event.preventDefault()
    pendingFocus.current = true
    open()
  }

  const handlePanelKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
      return
    }

    event.preventDefault()

    const items = links()
    const from = items.indexOf(document.activeElement as HTMLAnchorElement)
    const target = items[from + (event.key === 'ArrowDown' ? 1 : -1)]

    if (target) {
      target.focus()
    }
  }

  const handleActivation = () => {
    close()
    onNavigate()
  }

  const trigger = (
    <button
      id={triggerId}
      ref={triggerRef}
      type="button"
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-controls={panelId}
      onClick={toggle}
      onKeyDown={handleTriggerKeyDown}
      className={navRowClass({ variant, current: false, open: isOpen })}
      data-testid={`${variant}-trigger`}
    >
      {MENU_LABEL}
      <span aria-hidden="true" className={menuCaretClass} />
    </button>
  )

  const panel = isOpen ? (
    <div ref={panelRef} onKeyDown={handlePanelKeyDown}>
      <MegaPanel
        id={panelId}
        labelledBy={triggerId}
        variant={variant}
        onNavigate={handleActivation}
      />
    </div>
  ) : null

  // In the folded chrome the row's own box stacks its two halves: the trigger block, then the
  // panel standing in the flow under it. On the bar the trigger and the absolutely placed panel
  // sit side by side in the row — the panel hangs off the bar itself, so its own box measures
  // nothing.
  return (
    <li ref={rootRef} className={menuItemClass} onMouseEnter={open} onMouseLeave={close}>
      {variant === 'panel' ? (
        <div className="w-full">
          {trigger}
          {panel}
        </div>
      ) : (
        <>
          {trigger}
          {panel}
        </>
      )}
    </li>
  )
}
