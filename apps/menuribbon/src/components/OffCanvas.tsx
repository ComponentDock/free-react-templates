import type { RefObject } from 'react'
import { X } from 'lucide-react'
import { MENU_ID } from '../lib/site'
import { PanelNav } from './PanelNav'

export interface OffCanvasProps {
  isOpen: boolean
  onClose: () => void
  panelRef: RefObject<HTMLElement | null>
}

/**
 * The 300px off-canvas panel and its veil. The panel stays mounted — the reference
 * slides it in from `translateX(110%)` over .3s — and is `aria-hidden` while shut,
 * so nothing inside it is reachable by pointer, tab or assistive query. The veil
 * fades with it and is likewise hidden from assistive technology.
 */
export function OffCanvas({ isOpen, onClose, panelRef }: OffCanvasProps) {
  return (
    <>
      <div
        data-testid="veil"
        aria-hidden="true"
        className={`fixed inset-0 z-[1999] bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      />
      <aside
        id={MENU_ID}
        ref={panelRef}
        aria-label="Site menu"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 z-[2000] h-screen w-[300px] bg-white pt-5 shadow-panel transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 visible' : 'translate-x-[110%] invisible'
        }`}
      >
        <div className="flex w-full items-center justify-end px-5 pt-2">
          <button
            type="button"
            aria-label="Close the menu"
            onClick={onClose}
            className="block cursor-pointer pl-[10px] text-[30px] leading-none text-ink transition-colors duration-300 hover:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <X aria-hidden="true" size={30} />
          </button>
        </div>
        <div className="h-[calc(100vh-52px)] overflow-y-auto px-5 pt-0 pb-[150px]">
          <PanelNav />
        </div>
      </aside>
    </>
  )
}
