import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { isParent, type NavNode } from '../lib/site'
import {
  expanderClass,
  expanderIconClass,
  panelChildLevel,
  panelRowClass,
  type PanelLevel,
} from '../lib/styles'

export interface PanelRowProps {
  node: NavNode
  level: PanelLevel
}

/**
 * One row of the off-canvas panel, rendered from the same item model as the
 * desktop row. A row that has children carries its own round 36x36 expander and
 * its own open state, so opening a deeper level never closes the level above it.
 */
export function PanelRow({ node, level }: PanelRowProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const submenuId = useId()

  if (!isParent(node)) {
    return (
      <li className="relative block">
        <a
          href={node.href}
          aria-current={node.current ? 'page' : undefined}
          className={panelRowClass(level, Boolean(node.current))}
        >
          {node.label}
        </a>
      </li>
    )
  }

  return (
    <li className="relative block">
      <a href={node.href} className={panelRowClass(level, Boolean(node.current))}>
        {node.label}
      </a>
      <button
        type="button"
        aria-label={`${isExpanded ? 'Hide' : 'Show'} ${node.label} submenu`}
        aria-expanded={isExpanded}
        aria-controls={submenuId}
        onClick={() => setIsExpanded(!isExpanded)}
        className={expanderClass(isExpanded)}
      >
        <ChevronDown aria-hidden="true" className={expanderIconClass(isExpanded)} />
      </button>
      {isExpanded ? (
        <ul id={submenuId} className="m-0 list-none p-0">
          {node.children.map((child) => (
            <PanelRow key={child.label} node={child} level={panelChildLevel(level)} />
          ))}
        </ul>
      ) : null}
    </li>
  )
}
