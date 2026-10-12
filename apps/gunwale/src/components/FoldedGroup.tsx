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

export interface FoldedGroupProps {
  /** The disclosing row and the sub-destinations it names. */
  item: NavItem
  /** Reports an activation, so the panel can fold itself away on it. */
  onNavigate: () => void
}

/**
 * The disclosure as the collapsing panel draws it: the same row, and under it a sub-list
 * that is simply **in the flow and already open** — no radius, no shadow, full width on
 * black behind the trigger's row. That is exactly what the design does below 992px (its
 * mobile rule forces the sub-list to `display:block`), and because nothing is being
 * hidden here there is no disclosure marker to keep in sync: the row carries no
 * `aria-expanded`, so nothing on screen claims the sub-list is closed.
 */
export function FoldedGroup({ item, onNavigate }: FoldedGroupProps) {
  const slug = item.href.slice(1)

  return (
    <li className={navItemClass} data-testid={`${slug}-row`}>
      <a
        href={item.href}
        aria-current={item.current ? 'page' : undefined}
        onClick={onNavigate}
        className={`${navRowClass({ variant: 'panel', current: item.current })} ${navTriggerClass}`}
      >
        {item.label}
        <ChevronDown aria-hidden="true" size={12} className={caretClass} />
      </a>

      <ul
        aria-label={item.label}
        data-testid={`${slug}-panel`}
        className={dropdownPanelClass('panel', false)}
      >
        {item.children.map((child) => (
          <li key={child.label}>
            <a href={child.href} onClick={onNavigate} className={dropdownItemClass('panel')}>
              {child.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  )
}
