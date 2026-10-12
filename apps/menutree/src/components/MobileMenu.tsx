import { useEffect, useRef, useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { toId } from '../lib/ids'
import { isParent, NAV, type NavNode } from '../lib/site'
import { mobileRowClass } from '../lib/styles'
import { SocialLinks } from './SocialLinks'

/** The id the header's hamburger points at through `aria-controls`. */
export const MOBILE_MENU_ID = 'mobile-menu'

export interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

/**
 * One row of the off-canvas tree, holding its own expansion state so the three
 * levels open independently. Parent rows carry a 36px round toggle whose chevron
 * flips as the submenu opens; the submenu itself is not rendered until expanded,
 * so nothing hidden is reachable by keyboard or by a screen reader.
 */
function MobileRow({ node, depth }: { node: NavNode; depth: number }) {
  const [isExpanded, setExpanded] = useState(false)
  const children = isParent(node) ? node.children : []
  const submenuId = `mobile-${toId(node.label)}`

  return (
    <li>
      <div className="relative">
        <a href={node.href} className={mobileRowClass(depth)}>
          {node.label}
        </a>

        {children.length > 0 ? (
          <button
            type="button"
            aria-expanded={isExpanded}
            aria-controls={submenuId}
            aria-label={isExpanded ? `Hide the ${node.label} rows` : `Show the ${node.label} rows`}
            onClick={() => setExpanded((current) => !current)}
            className={cn(
              'absolute top-[10px] right-0 grid h-9 w-9 place-items-center rounded-full text-ink transition-transform duration-300 hover:bg-toggle-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
              isExpanded && 'rotate-180',
            )}
          >
            <ChevronDown aria-hidden="true" className="h-3 w-3" />
          </button>
        ) : null}
      </div>

      {children.length > 0 && isExpanded ? (
        <ul id={submenuId}>
          {children.map((child) => (
            <MobileRow key={child.label} node={child} depth={depth + 1} />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

/**
 * The 300px white drawer that is the only navigation below 1200px: it slides in
 * from the right edge over a 50% veil, carries the same tree as the desktop row
 * (mounted a second time rather than cloned), and stays in the document so the
 * slide can play — while closed it is `invisible`, so nothing inside it can take
 * focus. Escape closes it, as do the veil, the close glyph and the header's
 * toggle.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    closeRef.current?.focus()

    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key !== 'Escape') return
      onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  return (
    <div
      id={MOBILE_MENU_ID}
      aria-hidden={!open}
      className={cn('fixed inset-0 z-[2000] xl:hidden', !open && 'pointer-events-none invisible')}
    >
      <div
        data-testid="menu-veil"
        role="presentation"
        onClick={onClose}
        className={cn(
          'absolute inset-0 bg-black/50 transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        )}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          'absolute top-0 right-0 h-screen w-[300px] overflow-y-auto bg-white pt-5 shadow-panel transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : 'translate-x-[110%]',
        )}
      >
        <div className="flex px-5">
          <button
            ref={closeRef}
            type="button"
            aria-label="Close the menu"
            onClick={onClose}
            className="ml-auto leading-none text-ink transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <X aria-hidden="true" className="h-[30px] w-[30px]" />
          </button>
        </div>

        <div className="h-[calc(100vh-52px)] overflow-y-auto px-5 pb-[150px]">
          <ul>
            {NAV.map((node) => (
              <MobileRow key={node.label} node={node} depth={1} />
            ))}
          </ul>

          <ul className="pt-2">
            <SocialLinks stuck={false} variant="panel" />
          </ul>
        </div>
      </div>
    </div>
  )
}
