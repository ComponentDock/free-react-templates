import { useCallback, useId, useRef, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { isParent, type NavParent } from '../lib/site'
import { barLabelClass, dropdownRowClass, dropdownTriggerClass } from '../lib/styles'

/** `bar` is a row label in the header; `row` is a row inside an open panel. */
type NavDropdownVariant = 'bar' | 'row'

/**
 * Lower panel: below its bar label and flush once open. This variant carries no
 * pointer triangle — the reference's own arrow rule is switched off, so the top
 * border, the shadow and the white body are its only chrome.
 */
const BAR_PANEL_SHAPE = 'top-full left-0'

/** Second panel: beside its row, top-aligned, and equally square. */
const ROW_PANEL_SHAPE = 'top-0 left-full'

/**
 * Both panels share the reference's chrome: white, a 2px accent top border, a soft
 * drop shadow, hidden and 20px lower while shut, then opaque and flush once open.
 */
function panelClass(variant: NavDropdownVariant, isOpen: boolean): string {
  const shape = variant === 'bar' ? BAR_PANEL_SHAPE : ROW_PANEL_SHAPE

  return `absolute z-[1999] m-0 list-none border-t-2 border-accent bg-white p-0 text-left shadow-dropdown transition-all duration-200 ${shape}${
    isOpen ? ' visible mt-0 opacity-100' : ' invisible mt-5 opacity-0'
  }`
}

export interface NavDropdownProps {
  node: NavParent
  variant: NavDropdownVariant
}

/**
 * One submenu. It opens on hover and on keyboard focus and closes on `Escape`
 * (handing focus back to its own trigger). Its rows are rendered from the same
 * item model as the off-canvas panel, so a row that has children recurses into a
 * second panel rather than duplicating markup.
 */
export function NavDropdown({ node, variant }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const skipNextFocusOpen = useRef(false)
  const panelId = useId()
  const inBar = variant === 'bar'

  const openPanel = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closePanel = useCallback(() => {
    setIsOpen(false)
  }, [])

  // Escape closes the panel and hands focus back to the trigger, so the focus that
  // lands there next must not immediately reopen the panel it just shut.
  const handleFocus = useCallback(() => {
    if (skipNextFocusOpen.current) {
      skipNextFocusOpen.current = false

      return
    }

    setIsOpen(true)
  }, [])

  const handleKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLLIElement>) => {
      if (event.key === 'Escape') {
        closePanel()
        skipNextFocusOpen.current = true
        ;(triggerRef.current as HTMLButtonElement).focus()
      }
    },
    [closePanel],
  )

  return (
    <li
      className={cn('relative', inBar ? 'inline-block' : 'min-w-[200px]')}
      onMouseEnter={openPanel}
      onMouseLeave={closePanel}
      onKeyDown={handleKeyDown}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={openPanel}
        onFocus={handleFocus}
        className={
          inBar
            ? cn('cursor-pointer', barLabelClass(true, isOpen))
            : dropdownTriggerClass(Boolean(node.current))
        }
      >
        {inBar ? (
          <>
            {node.label}
            <ChevronDown
              aria-hidden="true"
              className={cn(
                'absolute top-1/2 right-0 h-4 w-4 -translate-y-1/2 transition-transform duration-300',
                isOpen && 'rotate-180',
              )}
            />
          </>
        ) : (
          <>
            <span>{node.label}</span>
            <ChevronRight aria-hidden="true" className="h-4 w-4 shrink-0" />
          </>
        )}
      </button>
      <ul id={panelId} aria-hidden={!isOpen} className={panelClass(variant, isOpen)}>
        {node.children.map((child) =>
          isParent(child) ? (
            <NavDropdown key={child.label} node={child} variant="row" />
          ) : (
            <li key={child.label} className="min-w-[200px]">
              <a
                href={child.href}
                aria-current={child.current ? 'page' : undefined}
                className={dropdownRowClass(Boolean(child.current))}
              >
                {child.label}
              </a>
            </li>
          ),
        )}
      </ul>
    </li>
  )
}
