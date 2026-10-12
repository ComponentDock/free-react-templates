import { useCallback, useEffect, useRef, useState } from 'react'
import type { FocusEvent, KeyboardEvent } from 'react'
import { ChevronDown, Lock, Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV, NAV_ID, isBranch, rowSlug, submenuLabel } from '../lib/site'
import type { NavBranch, NavLink } from '../lib/site'
import { focusNode } from '../lib/focus'
import { useSurfaceFlip } from '../lib/use-flip'
import {
  chevronClass,
  drawerArrowClass,
  drawerListClass,
  drawerSubRowClass,
  flyoutClass,
  flyoutRowClass,
  navLabelClass,
  navRowClass,
  submenuListClass,
} from '../lib/styles'
import type { NavVariant } from '../lib/styles'

export interface NavListProps {
  /** Which of the row's two presentations this is. */
  variant: NavVariant
  /** Called when a destination is chosen — the drawer folds itself away on it. */
  onNavigate?: () => void
}

/**
 * The one list the page keeps, in whichever of its two presentations the width calls
 * for: the wide bar's inline-block row of eight, or the drawer's full-width column of
 * the same eight. Both read the same `NAV` model — the drawer never clones a second
 * hand-maintained copy, and both stay in step for free.
 *
 * The two open surfaces of the wide row are driven from one place, so a hover on a
 * second row closes the first: the page never shows two submenus at once. Both are
 * promoted from the source's `:hover`-only CSS to real disclosures — a click pins one,
 * `Escape` closes it and hands focus back, a press outside closes it, and the arrow
 * keys walk its rows.
 */
export function NavList({ variant, onNavigate }: NavListProps) {
  const [hovered, setHovered] = useState<string | null>(null)
  const [pinned, setPinned] = useState<string | null>(null)

  const isOpen = (label: string) => pinned === label || hovered === label

  const closeAll = useCallback(() => {
    setHovered(null)
    setPinned(null)
  }, [])

  /** A hover opens its own row and releases any row a click had pinned. */
  const openByHover = (label: string) => {
    setHovered(label)
    setPinned((current) => (current === label ? current : null))
  }

  /** The pointer leaving folds its row away only while no click is holding it. */
  const closeByHover = (label: string) => {
    setHovered((current) => (current === label ? null : current))
  }

  const togglePinned = (label: string) => {
    setPinned((current) => (current === label ? null : label))
  }

  const anyOpen = pinned !== null || hovered !== null

  useEffect(() => {
    if (variant !== 'desktop' || !anyOpen) {
      return
    }

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Element | null

      if (!target?.closest('[data-branch]')) {
        closeAll()
      }
    }

    document.addEventListener('mousedown', handlePointerDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [variant, anyOpen, closeAll])

  if (variant === 'drawer') {
    return (
      <ul data-testid="drawer-nav" className={drawerListClass}>
        {NAV.map((item) =>
          isBranch(item) ? (
            <DrawerBranchRow key={item.label} item={item} onNavigate={onNavigate} />
          ) : (
            <LeafRow key={item.label} item={item} variant="drawer" onNavigate={onNavigate} />
          ),
        )}
      </ul>
    )
  }

  return (
    <ul id={NAV_ID} data-testid="desktop-nav" className="m-0 list-none p-0">
      {NAV.map((item) =>
        isBranch(item) ? (
          <BranchRow
            key={item.label}
            item={item}
            isOpen={isOpen(item.label)}
            onHover={() => openByHover(item.label)}
            onLeave={() => closeByHover(item.label)}
            onToggle={() => togglePinned(item.label)}
            onClose={closeAll}
          />
        ) : (
          <LeafRow key={item.label} item={item} variant="desktop" />
        ),
      )}
    </ul>
  )
}

interface LeafRowProps {
  item: NavLink
  variant: NavVariant
  onNavigate?: () => void
}

/**
 * A plain row: a real destination, fully white when it is the one already open and
 * half white otherwise (ink inside the drawer, lifting to the brand green). The two
 * rows the source adds for the drawer alone are `display:none` from 992px up, where
 * the pair of calls to action carries them instead.
 */
function LeafRow({ item, variant, onNavigate }: LeafRowProps) {
  const hiddenFromLg = variant === 'desktop' && item.drawerOnly ? 'lg:hidden' : ''

  return (
    <li className={cn(navRowClass(variant), hiddenFromLg)}>
      <a
        href={item.href}
        aria-current={item.current ? 'page' : undefined}
        onClick={variant === 'drawer' ? onNavigate : undefined}
        className={navLabelClass({ variant, current: item.current })}
      >
        {item.icon && <RowIcon icon={item.icon} />}
        {item.label}
      </a>
    </li>
  )
}

/** The leading mark a boarding row carries, at the same size as the design's glyph. */
function RowIcon({ icon }: { icon: 'plus' | 'lock' }) {
  if (icon === 'plus') {
    return <Plus aria-hidden="true" size={16} className="mr-2 inline-block align-middle" />
  }

  return <Lock aria-hidden="true" size={16} className="mr-2 inline-block align-middle" />
}

interface BranchRowProps {
  item: NavBranch
  isOpen: boolean
  onHover: () => void
  onLeave: () => void
  onToggle: () => void
  onClose: () => void
}

/**
 * A row that owns one of the wide bar's two submenus. The row's own link stays a real
 * destination — it is also the control that reports the surface's state — and the
 * surface itself is measured as it opens, so it can be pinned to the row's right edge
 * rather than hang past the window.
 */
function BranchRow({ item, isOpen, onHover, onLeave, onToggle, onClose }: BranchRowProps) {
  const { ref: surfaceRef, flipped, measure } = useSurfaceFlip<HTMLUListElement>()
  const toggleRef = useRef<HTMLAnchorElement | null>(null)
  const rowRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const flyoutId = `${rowSlug(item.label)}-flyout`

  useEffect(() => {
    if (isOpen) {
      measure()
    }
  }, [isOpen, measure])

  /** Moves focus onto the destination at `index`, if the surface has one there. */
  const focusRow = (index: number) => {
    focusNode(rowRefs.current[index])
  }

  const handleBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      onClose()
    }
  }

  const handleEscape = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Escape') {
      onClose()
      focusNode(toggleRef.current)
    }
  }

  const handleToggleKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()

      if (!isOpen) {
        onToggle()
      }

      focusRow(0)
    }
  }

  const handleRowKeyDown = (event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      focusRow(index + 1)
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      focusRow(index - 1)
    }
  }

  return (
    <li
      data-branch={item.label}
      className={cn(navRowClass('desktop'), 'relative')}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onBlur={handleBlur}
      onKeyDown={handleEscape}
    >
      <a
        ref={toggleRef}
        href={item.href}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={flyoutId}
        onClick={onToggle}
        onKeyDown={handleToggleKeyDown}
        className={navLabelClass({ variant: 'desktop', branch: true })}
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          size={16}
          className={cn(
            'absolute top-1/2 right-0 -translate-y-1/2',
            chevronClass(isOpen),
          )}
        />
      </a>

      <ul
        id={flyoutId}
        data-testid={flyoutId}
        ref={surfaceRef}
        className={flyoutClass(isOpen, flipped)}
      >
        {item.items.map((child, index) => (
          <li key={child.label}>
            <a
              ref={(node) => {
                rowRefs.current[index] = node
              }}
              href={child.href}
              tabIndex={isOpen ? undefined : -1}
              onKeyDown={(event) => handleRowKeyDown(event, index)}
              className={flyoutRowClass()}
            >
              {child.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  )
}

interface DrawerBranchRowProps {
  item: NavBranch
  onNavigate?: () => void
}

/**
 * The same row inside the drawer, where there is no room for a floating surface: the
 * children are folded behind a 36px round disclosure pinned to the row's right, which
 * rotates its own chevron as it opens. The source's arrow is a `span` with a role and
 * no keyboard path at all; here it is a real button with `aria-expanded`, and the
 * sub-list is mounted only while it is open.
 */
function DrawerBranchRow({ item, onNavigate }: DrawerBranchRowProps) {
  const [expanded, setExpanded] = useState(false)
  const submenuId = `${rowSlug(item.label)}-submenu`

  return (
    <li className={navRowClass('drawer')}>
      <a
        href={item.href}
        onClick={onNavigate}
        className={navLabelClass({ variant: 'drawer', branch: true })}
      >
        {item.label}
      </a>

      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={submenuId}
        aria-label={submenuLabel(item.label, expanded)}
        onClick={() => setExpanded((open) => !open)}
        className={drawerArrowClass(expanded)}
      >
        <ChevronDown aria-hidden="true" size={12} className={chevronClass(expanded)} />
      </button>

      {expanded && (
        <ul id={submenuId} data-testid={submenuId} className={submenuListClass}>
          {item.items.map((child) => (
            <li key={child.label}>
              <a href={child.href} onClick={onNavigate} className={drawerSubRowClass}>
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
