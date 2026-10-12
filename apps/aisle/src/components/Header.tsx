import { useCallback, useEffect, useState } from 'react'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import {
  ACTIVE_NAV_LABEL,
  BRAND,
  MENU_CLOSE_LABEL,
  MENU_ID,
  MENU_TOGGLE_LABEL,
  NAV_ITEMS,
  SECTION_IDS,
  hasItems,
  submenuLabel,
  type NavNode,
  type NavParent,
} from '../lib/site'
import {
  containerClass,
  dropCaretClass,
  dropItemClass,
  dropLinkClass,
  dropPanelClass,
  dropPanelNestedClass,
  foldedItemClass,
  foldedLinkClass,
  foldedListClass,
  foldedPanelClass,
  foldedPanelInnerClass,
  foldedRowClass,
  foldedToggleClass,
  foldedToggleGlyphClass,
  headerClass,
  headerRowClass,
  navCaretClass,
  navClass,
  navItemClass,
  navLinkClass,
  navListClass,
  toggleClass,
  toggleGlyphClass,
  toggleWrapClass,
  wordmarkClass,
  wordmarkLinkClass,
} from '../lib/styles'

interface RowsProps {
  nodes: ReadonlyArray<NavNode>
  /** The panel that opens off the top-level row sits under it; a second level opens to its right. */
  nested: boolean
  openGroup: string | null
  onOpenGroup: (label: string) => void
}

function PanelRow({ node }: { node: NavNode }) {
  return (
    <li className={dropItemClass}>
      <a href={node.href} className={dropLinkClass}>
        {node.label}
      </a>
    </li>
  )
}

function PanelGroup({ node, open, openGroup, onOpenGroup }: { node: NavParent; open: boolean } & Omit<RowsProps, 'nodes' | 'nested'>) {
  const show = () => {
    onOpenGroup(node.label)
  }

  return (
    <li className={dropItemClass} onMouseEnter={show}>
      <a
        href={node.href}
        className={dropLinkClass}
        aria-haspopup="true"
        aria-expanded={open}
        onFocus={show}
        onClick={show}
      >
        {node.label}
        <ChevronRight className={dropCaretClass} aria-hidden="true" />
      </a>
      {open && <PanelRows nodes={node.items} nested openGroup={openGroup} onOpenGroup={onOpenGroup} />}
    </li>
  )
}

function PanelRows({ nodes, nested, openGroup, onOpenGroup }: RowsProps) {
  return (
    <ul className={nested ? dropPanelNestedClass : dropPanelClass}>
      {nodes.map((node) =>
        hasItems(node) ? (
          <PanelGroup
            key={node.label}
            node={node}
            open={openGroup === node.label}
            openGroup={openGroup}
            onOpenGroup={onOpenGroup}
          />
        ) : (
          <PanelRow key={node.label} node={node} />
        ),
      )}
    </ul>
  )
}

/**
 * One top-level row of the desktop menu. Rows without a panel are plain anchors; the row that owns
 * a panel opens it on hover, on focus and on click (the click *opens*, it never toggles, so a
 * pointer that arrives first cannot close the panel it just opened), closes it when the pointer
 * leaves the whole row — the panel is a descendant, so moving into it does not count as leaving —
 * and closes it on `Escape` while the focus stays on the trigger.
 */
function DesktopRow({ node }: { node: NavNode }) {
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  const close = useCallback(() => {
    setOpen(false)
    setOpenGroup(null)
  }, [])

  const show = useCallback(() => {
    setOpen(true)
  }, [])

  useEffect(() => {
    if (!open) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, close])

  const isActive = node.label === ACTIVE_NAV_LABEL
  const linkClass = navLinkClass(isActive)

  return (
    <li className={navItemClass} onMouseEnter={show} onMouseLeave={close}>
      <a
        href={node.href}
        className={linkClass}
        aria-current={isActive ? 'page' : undefined}
        onFocus={hasItems(node) ? show : undefined}
        onClick={hasItems(node) ? show : undefined}
        aria-haspopup={hasItems(node) ? 'true' : undefined}
        aria-expanded={hasItems(node) ? open : undefined}
      >
        {node.label}
        {hasItems(node) && <ChevronDown className={navCaretClass} aria-hidden="true" />}
      </a>
      {hasItems(node) && open && (
        <PanelRows nodes={node.items} nested={false} openGroup={openGroup} onOpenGroup={setOpenGroup} />
      )}
    </li>
  )
}

function FoldedRow({ node, depth }: { node: NavNode; depth: number }) {
  const [expanded, setExpanded] = useState(false)

  if (!hasItems(node)) {
    return (
      <li className={foldedItemClass}>
        <div className={foldedRowClass}>
          <a href={node.href} className={foldedLinkClass(depth)}>
            {node.label}
          </a>
        </div>
      </li>
    )
  }

  return (
    <li className={foldedItemClass}>
      <div className={foldedRowClass}>
        <a href={node.href} className={foldedLinkClass(depth)}>
          {node.label}
        </a>
        <button
          type="button"
          className={foldedToggleClass}
          aria-expanded={expanded}
          aria-label={submenuLabel(node.label, expanded)}
          onClick={() => {
            setExpanded(!expanded)
          }}
        >
          {expanded ? (
            <ChevronDown className={foldedToggleGlyphClass} aria-hidden="true" />
          ) : (
            <ChevronRight className={foldedToggleGlyphClass} aria-hidden="true" />
          )}
        </button>
      </div>
      {expanded && <FoldedRows nodes={node.items} depth={depth + 1} />}
    </li>
  )
}

function FoldedRows({ nodes, depth }: { nodes: ReadonlyArray<NavNode>; depth: number }) {
  return (
    <ul className={foldedListClass}>
      {nodes.map((node) => (
        <FoldedRow key={node.label} node={node} depth={depth} />
      ))}
    </ul>
  )
}

/**
 * The bar the design floats over the hero: a script wordmark on the left, five tracked rows on the
 * right, and — below 768px, where the design's own navigation turns over — a bars toggle that
 * mounts the rows in flow as a dark panel only while it is open, so a shut menu holds nothing
 * focusable.
 */
export function Header() {
  const [folded, setFolded] = useState(false)

  return (
    <header className={headerClass}>
      <div className={containerClass}>
        <div className={headerRowClass}>
          <p className={wordmarkClass}>
            <a href={`#${SECTION_IDS.home}`} className={wordmarkLinkClass}>
              {BRAND}
            </a>
          </p>

          <nav aria-label="Primary" className={navClass}>
            <ul className={navListClass}>
              {NAV_ITEMS.map((node) => (
                <DesktopRow key={node.label} node={node} />
              ))}
            </ul>
          </nav>

          <div className={toggleWrapClass}>
            <button
              type="button"
              className={toggleClass}
              aria-label={folded ? MENU_CLOSE_LABEL : MENU_TOGGLE_LABEL}
              aria-expanded={folded}
              aria-controls={MENU_ID}
              onClick={() => {
                setFolded(!folded)
              }}
            >
              {folded ? (
                <X className={toggleGlyphClass} aria-hidden="true" />
              ) : (
                <Menu className={toggleGlyphClass} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {folded && (
          <div id={MENU_ID} className={foldedPanelClass}>
            <div className={foldedPanelInnerClass}>
              <FoldedRows nodes={NAV_ITEMS} depth={0} />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
