import { useState } from 'react'
import type { FocusEvent, KeyboardEvent, RefObject } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV, NAV_ID, isBranch, rowSlug } from '../lib/site'
import type { NavBranch, NavItem, NavLink } from '../lib/site'
import {
  flyoutRowClass,
  flyoutRowPosition,
  navLinkClass,
  navRowClass,
  panelRowClass,
} from '../lib/styles'
import type { RowPosition } from '../lib/styles'
import { useViewportFlip } from '../lib/use-viewport-flip'

/**
 * The one navigation component the page mounts twice: the desktop nav row in the
 * header and the off-canvas panel's list. Both read the same `NAV` model — there
 * is no DOM clone and no second hand-maintained list — and only the presentation
 * and the interaction differ:
 *
 * - `desktop` renders seven inline rows, the fourth of which owns a 200px white
 *   flyout that opens on hover, focus, click or `Escape`-to-close, and whose own
 *   reference row opens a second flyout to the right (flipping left when a 200px
 *   surface would run past the viewport).
 * - `panel` renders the same seven rows as 20px block links, with a 36px round
 *   expander behind the row that owns children and stepped-in 16px sub-levels.
 */
export type NavProps =
  | { variant: 'desktop'; /** True once the row is pinned: the padding tightens. */ sticky: boolean }
  | { variant: 'panel'; /** Fired when a row is activated, so the panel can close. */ onNavigate: () => void }

export function Nav(props: NavProps) {
  if (props.variant === 'panel') {
    const { onNavigate } = props

    return (
      <ul data-testid="panel-nav" className="relative m-0 list-none p-0">
        {NAV.map((item) => (
          <PanelRow key={item.label} item={item} depth={1} onNavigate={onNavigate} />
        ))}
      </ul>
    )
  }

  const { sticky } = props

  return (
    <nav id={NAV_ID} aria-label="Site sections" className="hidden lg:block">
      <ul data-testid="desktop-nav" className="m-0 flex list-none items-center p-0">
        {NAV.map((item, index) => (
          <DesktopRow key={item.label} item={item} sticky={sticky} isLast={index === NAV.length - 1} />
        ))}
      </ul>
    </nav>
  )
}

interface DesktopRowProps {
  item: NavItem
  sticky: boolean
  isLast: boolean
}

function DesktopRow({ item, sticky, isLast }: DesktopRowProps) {
  return isBranch(item) ? (
    <DesktopBranch item={item} sticky={sticky} isLast={isLast} />
  ) : (
    <DesktopLeaf item={item} sticky={sticky} isLast={isLast} />
  )
}

/** A plain top-level row: 15px at weight 500, white unless it is the current one. */
function DesktopLeaf({ item, sticky, isLast }: { item: NavLink; sticky: boolean; isLast: boolean }) {
  return (
    <li className={navRowClass(isLast)}>
      <a
        href={item.href}
        aria-current={item.current ? 'page' : undefined}
        className={navLinkClass({ sticky, current: item.current })}
      >
        {item.label}
      </a>
    </li>
  )
}

/**
 * The row that owns the flyout: a real disclosure control (`aria-haspopup`,
 * `aria-expanded`, `aria-controls`) rather than the source's dead `href="#"`, with
 * a 16px caret reserving 20px on the right. It opens on hover, on focus and on
 * click, and closes on `Escape` and when focus leaves the group.
 */
function DesktopBranch({ item, sticky, isLast }: { item: NavBranch; sticky: boolean; isLast: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const flyoutId = `${rowSlug(item.label)}-flyout`

  const closeOnBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsOpen(false)
    }
  }

  const closeOnEscape = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <li
      className={cn(navRowClass(isLast), 'relative')}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onBlur={closeOnBlur}
      onKeyDown={closeOnEscape}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={flyoutId}
        onFocus={() => setIsOpen(true)}
        onClick={() => setIsOpen((value) => !value)}
        className={cn(
          navLinkClass({ sticky, branch: true }),
          'relative flex cursor-pointer items-center',
        )}
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          size={16}
          className="absolute top-1/2 right-0 -translate-y-1/2"
        />
      </button>
      <Flyout id={flyoutId} isOpen={isOpen} items={item.items} placement="top-full left-0" arrow />
    </li>
  )
}

interface FlyoutProps {
  id: string
  isOpen: boolean
  items: NavItem[]
  /** Where the surface sits relative to its row (below it, or beside it). */
  placement: string
  /** The surface that hangs under a top-level row carries the 10px white triangle. */
  arrow: boolean
  /** Set on a second-level surface so it can be measured before it is shown. */
  ref?: RefObject<HTMLUListElement | null>
}

/**
 * A flyout surface: white, 200px wide, 4px radius, a 0 0 4px shadow, offset 20px
 * and faded in over .2s, with its rows stepping in from the ends' corner radii.
 * It stays mounted and is measured while hidden, so opening it never reflows.
 */
function Flyout({ id, isOpen, items, placement, arrow, ref }: FlyoutProps) {
  return (
    <ul
      id={id}
      ref={ref}
      data-testid={id}
      className={cn(
        'absolute z-[150] m-0 w-[200px] max-w-[calc(100vw-16px)] list-none rounded-flyout bg-white p-0 text-left shadow-flyout transition-[opacity,margin] duration-200',
        placement,
        isOpen ? 'visible mt-0 opacity-100' : 'invisible mt-5 opacity-0',
        arrow &&
          "before:absolute before:bottom-full before:left-[20%] before:-ml-[10px] before:border-[10px] before:border-transparent before:border-b-white before:content-['']",
      )}
    >
      {items.map((child, index) =>
        isBranch(child) ? (
          <NestedBranch key={child.label} item={child} position={flyoutRowPosition(index, items.length)} />
        ) : (
          <FlyoutRow
            key={child.label}
            item={child}
            position={flyoutRowPosition(index, items.length)}
          />
        ),
      )}
    </ul>
  )
}

/** One plain row inside a flyout: 14px soft ink, washing pale on hover and focus. */
function FlyoutRow({ item, position }: { item: NavLink; position: RowPosition }) {
  return (
    <li className="m-0 list-none p-0">
      <a href={item.href} className={flyoutRowClass(position)}>
        {item.label}
      </a>
    </li>
  )
}

/**
 * The flyout's own nested row: same 14px row, plus a right-pointing caret at 20px
 * from the edge and a second surface that opens beside it. If that surface would
 * run past the right edge of the window it opens on the other side instead.
 */
function NestedBranch({ item, position }: { item: NavBranch; position: RowPosition }) {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, flipped, measure } = useViewportFlip<HTMLUListElement>()
  const flyoutId = `${rowSlug(item.label)}-flyout`

  /** Opens the surface, measuring it first so a 200px flyout never leaves the window. */
  const openSurface = () => {
    measure()
    setIsOpen(true)
  }

  const toggleSurface = () => {
    if (isOpen) {
      setIsOpen(false)
      return
    }

    openSurface()
  }

  const closeOnBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsOpen(false)
    }
  }

  const closeOnEscape = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <li
      className="relative m-0 list-none p-0"
      onMouseEnter={openSurface}
      onMouseLeave={() => setIsOpen(false)}
      onBlur={closeOnBlur}
      onKeyDown={closeOnEscape}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={flyoutId}
        onFocus={openSurface}
        onClick={toggleSurface}
        className={cn(
          flyoutRowClass(position),
          'relative flex w-full cursor-pointer items-center justify-between text-left',
        )}
      >
        {item.label}
        <ChevronRight aria-hidden="true" size={16} className="absolute right-5" />
      </button>
      <Flyout
        id={flyoutId}
        ref={ref}
        isOpen={isOpen}
        items={item.items}
        placement={flipped ? 'top-0 right-full' : 'top-0 left-full'}
        arrow={false}
      />
    </li>
  )
}

interface PanelRowProps {
  item: NavItem
  /** 1 for the seven top-level rows, 2 and 3 for the sub-levels. */
  depth: number
  onNavigate: () => void
}

function PanelRow({ item, depth, onNavigate }: PanelRowProps) {
  return isBranch(item) ? (
    <PanelBranch item={item} depth={depth} onNavigate={onNavigate} />
  ) : (
    <PanelLeaf item={item} depth={depth} onNavigate={onNavigate} />
  )
}

/** A panel row: a block link that closes the panel on its way to a real target. */
function PanelLeaf({ item, depth, onNavigate }: { item: NavLink; depth: number; onNavigate: () => void }) {
  return (
    <li>
      <a
        href={item.href}
        aria-current={item.current ? 'page' : undefined}
        onClick={onNavigate}
        className={panelRowClass(depth, Boolean(item.current))}
      >
        {item.label}
      </a>
    </li>
  )
}

/**
 * A panel row that owns children: the label stays a link, and a 36px round
 * expander sits at the row's right edge to fold the sub-levels in and out. The
 * caret rotates 180° while the submenu is open.
 */
function PanelBranch({ item, depth, onNavigate }: { item: NavBranch; depth: number; onNavigate: () => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const submenuId = `${rowSlug(item.label)}-submenu`

  return (
    <li className="relative">
      <a href={item.href} onClick={onNavigate} className={panelRowClass(depth, false)}>
        {item.label}
      </a>
      <button
        type="button"
        aria-label={`Show the ${item.label} submenu`}
        aria-expanded={isOpen}
        aria-controls={submenuId}
        onClick={() => setIsOpen((value) => !value)}
        className="absolute top-[10px] right-0 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-ink transition-colors duration-300 hover:bg-arrow-hover focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand"
      >
        <ChevronDown
          aria-hidden="true"
          size={12}
          className={cn('transition-transform duration-300 ease-in-out', isOpen && 'rotate-180')}
        />
      </button>
      {isOpen && (
        <ul id={submenuId} className="m-0 list-none p-0">
          {item.items.map((child) => (
            <PanelRow key={child.label} item={child} depth={depth + 1} onNavigate={onNavigate} />
          ))}
        </ul>
      )}
    </li>
  )
}
