import { ChevronDown } from 'lucide-react'
import type { NavItem } from '../lib/site'
import {
  caretClass,
  dropdownItemClass,
  dropdownPanelClass,
  navItemClass,
  navRowClass,
  navTriggerClass,
} from '../lib/styles'
import { useDropdown } from '../lib/use-dropdown'
import { Slab } from './Slab'

export interface DropdownProps {
  /** The disclosing row and the sub-destinations it names. */
  item: NavItem
  /** Reports an activation, so the presentation that owns the surface can react. */
  onNavigate: () => void
}

/**
 * The wide bar's one disclosure: a row whose label is followed by a small caret and whose
 * white panel hangs 2px under the bar, flush with its trigger's left edge unless it would
 * leave the viewport. It opens on a resting pointer **and** on a click of its trigger,
 * exactly as the design binds both paths, and it is fully keyboard operable: `ArrowDown`
 * on the trigger lands on the first row, `ArrowUp`/`ArrowDown` step through them, and
 * `Escape` dismisses the panel and returns focus to the trigger. Its rows pull the brand
 * gold on hover, where the design lights them white on a white panel.
 */
export function Dropdown({ item, onNavigate }: DropdownProps) {
  const { isOpen, flip, rowRef, triggerRef, registerItem, open, toggle, close, onTriggerKeyDown, onItemKeyDown } =
    useDropdown(item.children.length)

  const slug = item.href.slice(1)
  const triggerId = `${slug}-trigger`
  const panelId = `${slug}-panel`

  function handleItemSelect() {
    close()
    onNavigate()
  }

  return (
    <li
      ref={rowRef}
      className={navItemClass}
      data-testid={`${slug}-row`}
      data-open={isOpen}
      onMouseEnter={(event) => open(event.currentTarget)}
      onMouseLeave={close}
    >
      <a
        ref={triggerRef}
        id={triggerId}
        href={item.href}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={(event) => toggle(event.currentTarget)}
        onKeyDown={onTriggerKeyDown}
        className={`${navRowClass({ variant: 'desktop', current: item.current })} ${navTriggerClass}`}
      >
        <Slab current={item.current} />
        {item.label}
        <ChevronDown aria-hidden="true" size={12} className={caretClass} />
      </a>

      {isOpen && (
        <ul
          id={panelId}
          aria-label={item.label}
          data-testid={`${slug}-panel`}
          data-align={flip ? 'right' : 'left'}
          className={dropdownPanelClass('desktop', flip)}
        >
          {item.children.map((child, index) => (
            <li key={child.label}>
              <a
                ref={(node) => {
                  registerItem(node, index)
                }}
                href={child.href}
                onClick={handleItemSelect}
                onKeyDown={(event) => onItemKeyDown(event, index)}
                className={dropdownItemClass('desktop')}
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
