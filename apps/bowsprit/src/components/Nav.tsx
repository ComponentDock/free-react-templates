import { useCallback, useEffect, useRef, useState } from 'react'
import type { CSSProperties, FocusEvent, KeyboardEvent, RefObject, TransitionEvent } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { CTA, MENU_ID, MENU_TOGGLE_ID, NAV, isBranch, rowSlug } from '../lib/site'
import type { NavBranch, NavLink } from '../lib/site'
import { focusNode } from '../lib/focus'
import {
  collapseSublistClass,
  ctaClass,
  flyoutClass,
  flyoutRowClass,
  navLinkClass,
  navListClass,
} from '../lib/styles'
import type { NavVariant } from '../lib/styles'
import { useViewportFlip } from '../lib/use-viewport-flip'

export interface NavProps {
  /** True when the row's always-visible presentation is the one on screen. */
  isDesktop: boolean
  isOpen: boolean
  /** Folds the narrow bar's list away (a row was taken, or the toggle was pressed). */
  onClose: () => void
  /** Hands the expanding box back to `auto` once its opening transition has finished. */
  onSettle: () => void
  regionRef: RefObject<HTMLDivElement | null>
  regionStyle: CSSProperties | undefined
}

/**
 * The one navigation component the bar mounts, in whichever of its two
 * presentations the viewport calls for — the row of labels on the wide bar, or the
 * full-width column inside the expanding region on the narrow one. Both read the
 * same `NAV` model: the app keeps one list of sections, never a second copy for the
 * other breakpoint.
 */
export function Nav({ isDesktop, isOpen, onClose, onSettle, regionRef, regionStyle }: NavProps) {
  const variant: NavVariant = isDesktop ? 'desktop' : 'collapse'

  /** The two lists are on screen whenever the wide presentation is; on the narrow bar
   *  they exist only while the region is expanded. */
  const showLists = isDesktop || isOpen

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && event.propertyName === 'height') {
      onSettle()
    }
  }

  return (
    <div
      id={MENU_ID}
      ref={regionRef}
      role="group"
      aria-labelledby={MENU_TOGGLE_ID}
      data-testid="nav-region"
      style={regionStyle}
      onTransitionEnd={handleTransitionEnd}
      className={cn(
        'w-full md:flex md:w-auto md:flex-1 md:items-center',
        !isDesktop && 'overflow-hidden transition-[height] duration-[350ms] ease-[ease]',
      )}
    >
      {showLists && <NavLists variant={variant} onNavigate={onClose} />}
    </div>
  )
}

interface NavListsProps {
  variant: NavVariant
  onNavigate: () => void
}

/** The five rows plus the call-to-action block, in the two lists the design splits them into. */
function NavLists({ variant, onNavigate }: NavListsProps) {
  return (
    <>
      <ul data-testid={`${variant}-nav`} className={navListClass(variant, true)}>
        {NAV.map((item) =>
          isBranch(item) ? (
            <NavBranchRow key={item.label} item={item} variant={variant} onNavigate={onNavigate} />
          ) : (
            <NavLeafRow key={item.label} item={item} variant={variant} onNavigate={onNavigate} />
          ),
        )}
      </ul>
      <ul data-testid={`${variant}-cta`} className={navListClass(variant)}>
        <li className="flex">
          <a
            href={CTA.href}
            onClick={variant === 'collapse' ? onNavigate : undefined}
            className={ctaClass(variant)}
          >
            {CTA.label}
          </a>
        </li>
      </ul>
    </>
  )
}

interface NavRowProps<T> {
  item: T
  variant: NavVariant
  onNavigate: () => void
}

/**
 * A plain row: a real in-page target, 16px at 80% white until it is hovered or
 * focused and fully white with `aria-current` when it is the destination already
 * open. On the narrow bar a row also folds the list away behind it.
 */
function NavLeafRow({ item, variant, onNavigate }: NavRowProps<NavLink>) {
  return (
    <li className="flex">
      <a
        href={item.href}
        aria-current={item.current ? 'page' : undefined}
        onClick={variant === 'collapse' ? onNavigate : undefined}
        className={navLinkClass({ variant, current: item.current })}
      >
        {item.label}
      </a>
    </li>
  )
}

/**
 * The row that owns the dropdown, promoted from the original's class arithmetic to a
 * real disclosure: `aria-haspopup`/`aria-expanded`/`aria-controls` on the toggle,
 * opened by hover, by click and by `ArrowDown`, and closed by a second click,
 * `Escape` (which hands focus back to the toggle), a press outside the row, or focus
 * leaving it. `ArrowDown` on the toggle opens the surface and moves focus into it, and
 * `ArrowDown`/`ArrowUp` walk its rows, stopping at the ends. The surface is measured
 * as it opens, so it can be pinned to the row's right edge rather than hang off the
 * window.
 *
 * The pointer and the toggle are kept apart as two signals for one open state, so a
 * hover that is already showing the surface does not swallow the click that follows
 * it, and a click that pins the surface survives the pointer leaving.
 *
 * On the narrow bar the same toggle expands the surface in place — a static,
 * full-width list inside the flow rather than a floating one.
 */
function NavBranchRow({ item, variant, onNavigate }: NavRowProps<NavBranch>) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPinned, setIsPinned] = useState(false)
  const { ref: surfaceRef, flipped, measure } = useViewportFlip<HTMLDivElement>()
  const toggleRef = useRef<HTMLButtonElement | null>(null)
  const rowRef = useRef<HTMLLIElement | null>(null)
  const rowRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const flyoutId = `${rowSlug(item.label)}-flyout`

  const isOpen = isHovered || isPinned

  const openSurface = useCallback(() => {
    measure()
    setIsPinned(true)
  }, [measure])

  const closeSurface = useCallback(() => {
    setIsHovered(false)
    setIsPinned(false)
  }, [])

  /** Moves focus to the destination at `index`, if the surface has one there. */
  const focusRow = (index: number) => {
    focusNode(rowRefs.current[index])
  }

  const toggleSurface = () => {
    if (isPinned) {
      setIsPinned(false)
      return
    }

    openSurface()
  }

  useEffect(() => {
    if (variant !== 'desktop' || !isOpen) {
      return
    }

    const row = rowRef.current as HTMLLIElement

    const handlePointerDown = (event: MouseEvent) => {
      if (!row.contains(event.target as Node)) {
        closeSurface()
      }
    }

    document.addEventListener('mousedown', handlePointerDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [variant, isOpen, closeSurface])

  const handlePointerEnter = () => {
    measure()
    setIsHovered(true)
  }

  const handleBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      closeSurface()
    }
  }

  const handleEscape = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Escape') {
      closeSurface()
      const toggle = toggleRef.current as HTMLButtonElement

      toggle.focus()
    }
  }

  const handleToggleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      openSurface()
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
      ref={rowRef}
      className={cn('flex', variant === 'desktop' ? 'relative' : 'w-full flex-col')}
      onMouseEnter={variant === 'desktop' ? handlePointerEnter : undefined}
      onMouseLeave={variant === 'desktop' ? closeSurface : undefined}
      onBlur={handleBlur}
      onKeyDown={handleEscape}
    >
      <button
        ref={toggleRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={flyoutId}
        onClick={toggleSurface}
        onKeyDown={handleToggleKeyDown}
        className={navLinkClass({ variant, branch: true })}
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          size={12}
          className={cn(
            'ml-[0.255em] shrink-0 transition-transform duration-300',
            variant === 'collapse' && isOpen && 'rotate-180',
          )}
        />
      </button>

      {variant === 'desktop' ? (
        <div
          id={flyoutId}
          ref={surfaceRef}
          data-testid={flyoutId}
          style={{ visibility: isOpen ? 'visible' : 'hidden' }}
          className={flyoutClass(flipped)}
        >
          {item.items.map((child, index) => (
            <a
              key={child.label}
              ref={(node) => {
                rowRefs.current[index] = node
              }}
              href={child.href}
              tabIndex={isOpen ? undefined : -1}
              onKeyDown={(event) => handleRowKeyDown(event, index)}
              className={flyoutRowClass}
            >
              {child.label}
            </a>
          ))}
        </div>
      ) : (
        isOpen && (
          <ul id={flyoutId} data-testid={flyoutId} className={collapseSublistClass()}>
            {item.items.map((child) => (
              <li key={child.label}>
                <a href={child.href} onClick={onNavigate} className={flyoutRowClass}>
                  {child.label}
                </a>
              </li>
            ))}
          </ul>
        )
      )}
    </li>
  )
}
