import type { MouseEvent } from 'react'
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
import type { NavVariant } from '../lib/styles'
import { useDropdown } from '../lib/use-dropdown'

export interface DropdownProps {
  /** The disclosing row and the sub-destinations it names. */
  item: NavItem
  /** Which of the page's two presentations this is drawn in. */
  variant: NavVariant
  /** Reports an activation, so the presentation that owns the surface can react. */
  onNavigate: () => void
}

/** The id suffix each presentation owns, so the two can coexist without a clash. */
const ID_SUFFIX: Record<NavVariant, string> = { desktop: 'wide', panel: 'folded' }

/**
 * The bar's one disclosure: a row whose label is followed by a small caret and whose
 * panel hangs 2px under whatever it is drawn in — on the wide bar, absolutely positioned
 * under its own trigger; inside the collapsing panel, in the flow as an indented
 * sub-list. It opens on a resting pointer **and** on a click of its trigger, exactly as
 * the design binds both paths, and it is fully keyboard operable: `ArrowDown` on the
 * trigger lands on the first row, `ArrowUp`/`ArrowDown` step through them, and `Escape`
 * dismisses the panel and returns focus to the trigger.
 */
export function Dropdown({ item, variant, onNavigate }: DropdownProps) {
  const { isOpen, flip, rowRef, triggerRef, registerItem, open, toggle, close, onTriggerKeyDown, onItemKeyDown } =
    useDropdown(item.children.length)

  const slug = item.href.slice(1)
  // Both presentations of the bar can be in the DOM at once — the wide list is always
  // there, the folded one joins it while it is out — so every id is suffixed with the
  // presentation it belongs to and no two elements ever share one.
  const suffix = ID_SUFFIX[variant]
  const triggerId = `${slug}-trigger-${suffix}`
  const panelId = `${slug}-panel-${suffix}`

  // The design binds the pointer path to every disclosure; on the wide bar that path is
  // what makes the row feel like a menu, while inside the collapsing panel — where a
  // resting pointer is rare and a stray one would fight the tap — the click path drives
  // it on its own.
  const pointerHandlers =
    variant === 'desktop'
      ? {
          onMouseEnter: (event: MouseEvent<HTMLLIElement>) => open(event.currentTarget),
          onMouseLeave: close,
        }
      : {}

  function handleItemSelect() {
    close()
    onNavigate()
  }

  return (
    <li ref={rowRef} className={navItemClass} data-testid={`${slug}-row`} data-open={isOpen} {...pointerHandlers}>
      <a
        ref={triggerRef}
        id={triggerId}
        href={item.href}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={(event) => toggle(event.currentTarget)}
        onKeyDown={onTriggerKeyDown}
        className={`${navRowClass({ variant, current: item.current, cta: item.cta })} ${navTriggerClass}`}
      >
        {item.label}
        <ChevronDown aria-hidden="true" size={12} className={caretClass} />
      </a>

      {isOpen && (
        <ul
          id={panelId}
          data-testid={`${slug}-panel`}
          data-align={variant === 'panel' ? 'stacked' : flip ? 'right' : 'left'}
          className={dropdownPanelClass(variant, flip)}
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
                className={dropdownItemClass(variant)}
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
