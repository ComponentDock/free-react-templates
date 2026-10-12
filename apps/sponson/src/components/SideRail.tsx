import type { RefObject } from 'react'
import { MenuList } from './MenuList'
import { RAIL_LABEL, RAIL_SIGN_OFF } from '../lib/site'
import { railClass, railSignOffClass } from '../lib/styles'

export interface SideRailProps {
  isOpen: boolean
  railRef: RefObject<HTMLElement | null>
  onNavigate: () => void
}

/**
 * The rail itself: a complementary column pinned to the left edge of the page, holding the six
 * labels and, at its foot, the app's own sign-off, which is the one line that walks back to the top
 * of the page. The design's rail carries nothing but the list, so both the sign-off and its link are
 * a documented delta — and it deliberately sits **under** the list, which leaves the labels at the
 * content origin the design measures them from.
 */
export function SideRail({ isOpen, railRef, onNavigate }: SideRailProps) {
  return (
    <aside ref={railRef} className={railClass(isOpen)} data-testid="rail">
      <nav aria-label={RAIL_LABEL}>
        <MenuList onNavigate={onNavigate} />
      </nav>

      <a href="#top" className={railSignOffClass}>
        {RAIL_SIGN_OFF}
      </a>
    </aside>
  )
}
