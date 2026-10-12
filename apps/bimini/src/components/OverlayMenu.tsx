import type { RefObject } from 'react'
import { MenuList } from './MenuList'
import { OverlayBrand } from './OverlayBrand'
import { OverlayClose } from './OverlayClose'
import { SHEET_ID, SHEET_LABEL, SHEET_PHOTO } from '../lib/site'
import {
  overlayClass,
  photoLayerClass,
  sheetCellClass,
  sheetColumnClass,
  sheetRowClass,
  sheetTableClass,
} from '../lib/styles'

export interface OverlayMenuProps {
  isOpen: boolean
  isCloseVisible: boolean
  onClose: () => void
  onNavigate: () => void
  sheetRef: RefObject<HTMLElement | null>
}

/**
 * The cover itself: one sheet the size of the window, drawn `rgba(0,0,0,0.99)` over everything at
 * `z-index:1002` and grown from nothing to full size on the design's own springy curve. Inside it a
 * full-bleed photograph sits under a black scrim, and a real table of one cell centres a column
 * holding nothing but the wordmark and the four labels — which is what lands the two of them at the
 * heights the design measures them at.
 *
 * The sheet is pinned to the viewport rather than to the page box. The design can position it
 * against the page because the page it ships is exactly one viewport tall; this recreation adds
 * content below the hero (a documented delta), so the sheet is fixed instead, which keeps it the
 * same measured `100% × 100%` cover over whatever is behind it.
 */
export function OverlayMenu({
  isOpen,
  isCloseVisible,
  onClose,
  onNavigate,
  sheetRef,
}: OverlayMenuProps) {
  return (
    <nav
      id={SHEET_ID}
      ref={sheetRef}
      tabIndex={-1}
      aria-label={SHEET_LABEL}
      className={overlayClass(isOpen)}
      data-testid="sheet"
    >
      <OverlayClose isVisible={isCloseVisible} onClose={onClose} />

      <div
        className={photoLayerClass}
        style={{ backgroundImage: `url(${SHEET_PHOTO})` }}
        data-testid="sheet-photo"
      />

      <div className={sheetTableClass}>
        <div className={sheetCellClass}>
          <div className={sheetRowClass}>
            <div className={sheetColumnClass}>
              <OverlayBrand />
              <MenuList onNavigate={onNavigate} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
