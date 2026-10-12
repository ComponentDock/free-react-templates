import type { RefObject } from 'react'
import { X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { MENU_ID } from '../lib/site'
import { PanelNav } from './PanelNav'

export interface OffCanvasProps {
  isOpen: boolean
  onClose: () => void
  panelRef: RefObject<HTMLElement | null>
  closeRef: RefObject<HTMLButtonElement | null>
}

/**
 * The 300px sidebar and the veil behind it. The panel stays mounted — it slides
 * in from `translateX(110%)` over .3s — and is `aria-hidden` while shut, so
 * nothing inside it is reachable by pointer, tab or assistive query. The veil is
 * a real, labelled button (the source's plain `body:before` overlay is not
 * operable), it fades with the panel and it is taken out of the tab order while
 * the panel is shut. The panel is a dialog-like labelled region whose body
 * scrolls independently, with the extra bottom padding an iOS toolbar needs.
 */
export function OffCanvas({ isOpen, onClose, panelRef, closeRef }: OffCanvasProps) {
  return (
    <>
      <button
        data-testid="veil"
        type="button"
        aria-label="Close the menu backdrop"
        tabIndex={isOpen ? 0 : -1}
        onClick={onClose}
        className={cn(
          'fixed inset-0 z-[1998] cursor-pointer bg-black/50 transition-opacity duration-300',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      />
      <aside
        id={MENU_ID}
        ref={panelRef}
        aria-label="Site menu"
        aria-hidden={!isOpen}
        className={cn(
          'fixed top-0 right-0 z-[2000] h-screen w-[300px] max-w-full bg-white pt-5 shadow-panel transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0 visible' : 'translate-x-[110%] invisible',
        )}
      >
        <div className="flex w-full items-center justify-end px-5 pt-2">
          <button
            ref={closeRef}
            type="button"
            aria-label="Close the menu"
            onClick={onClose}
            className="block cursor-pointer rounded-none text-[30px] leading-none text-ink transition-colors duration-300 hover:text-close-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <X aria-hidden="true" size={30} />
          </button>
        </div>
        <div
          data-testid="panel-body"
          className="h-[calc(100vh-52px)] overflow-y-auto px-5 pt-0 pb-[150px]"
        >
          <PanelNav onNavigate={onClose} />
        </div>
      </aside>
    </>
  )
}
