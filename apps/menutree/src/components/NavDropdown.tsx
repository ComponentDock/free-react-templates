import { useRef, useState, type FocusEvent, type KeyboardEvent } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { toId } from '../lib/ids'
import { DROPDOWN_ROW_CLASS, navRowClass } from '../lib/styles'
import { isParent, type NavParent } from '../lib/site'

export interface NavDropdownProps {
  /** A parent row: it owns the children rendered in its panel. */
  node: NavParent
  stuck: boolean
  /** Nested panels fly out to the right of their row instead of below it. */
  nested?: boolean
}

/**
 * A menu row that owns children. The panel hangs under the row (or flies out at
 * left:100% when nested), opens on hover and on focus, and is announced through
 * `aria-haspopup`/`aria-expanded`; Escape closes it and returns focus to the
 * trigger, and moving focus out of the row closes it too.
 */
export function NavDropdown({ node, stuck, nested = false }: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const trigger = useRef<HTMLAnchorElement>(null)
  const panelId = `menu-${toId(node.label)}`
  const children = node.children

  function close() {
    setOpen(false)
    trigger.current?.focus()
  }

  function onBlur(event: FocusEvent<HTMLLIElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
  }

  function onKeyDown(event: KeyboardEvent<HTMLAnchorElement>) {
    if (event.key === 'Escape') close()
  }

  return (
    <li
      className={cn('relative inline-block', nested && 'block')}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={onBlur}
    >
      <a
        ref={trigger}
        href={node.href}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        className={cn(navRowClass(stuck), 'pr-[38px]')}
      >
        {node.label}
        <ChevronDown
          aria-hidden="true"
          className={cn(
            'absolute right-5 align-middle transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </a>

      <ul
        id={panelId}
        aria-hidden={!open}
        className={cn(
          'absolute z-10 list-none border-t-2 border-brand bg-white text-left shadow-dropdown transition-all duration-200',
          nested ? 'top-0 left-full' : 'top-full left-0',
          open ? 'visible mt-0 opacity-100' : 'invisible mt-5 opacity-0',
        )}
      >
        {children.map((child) =>
          isParent(child) ? (
            <NavDropdown key={child.label} node={child} stuck={stuck} nested />
          ) : (
            <li key={child.label} className="min-w-[210px]">
              <a href={child.href} className={DROPDOWN_ROW_CLASS}>
                {child.label}
              </a>
            </li>
          ),
        )}
      </ul>
    </li>
  )
}
