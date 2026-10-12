import { useEffect, useRef, useState } from 'react'
import { Menu } from 'lucide-react'
import { DesktopNav } from './DesktopNav'
import { MobileMenu, MOBILE_MENU_ID } from './MobileMenu'
import { Wordmark } from './Wordmark'

/** The `lg` breakpoint the desktop row switches on (992px). */
const WIDE = 992

/**
 * The header: absolutely positioned and transparent over the band, with no
 * pinned state at all — it scrolls away with the page exactly as the reference
 * does. Its left column holds the wordmark, its right column the six-item row
 * from 992px up and, below that, the hamburger that opens the off-canvas panel
 * (which closes itself again as soon as the viewport is wide enough for the row).
 */
export function Header() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    function onResize() {
      if (window.innerWidth >= WIDE) setOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  function close() {
    setOpen(false)
    toggle.current?.focus()
  }

  return (
    <header className="absolute inset-x-0 top-0 z-[1999] mb-0 w-full bg-transparent px-4 py-12 lg:py-4">
      <div className="mx-auto flex w-full max-w-[1140px] items-center px-[15px]">
        <div className="w-3/12">
          <Wordmark />
        </div>

        <div className="hidden w-9/12 lg:block">
          <DesktopNav />
        </div>

        <div className="ml-auto lg:hidden">
          <button
            ref={toggle}
            type="button"
            aria-expanded={open}
            aria-controls={MOBILE_MENU_ID}
            aria-label={open ? 'Close the menu' : 'Open the menu'}
            onClick={() => setOpen((current) => !current)}
            className="block py-3 text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Menu aria-hidden="true" className="h-7 w-7" />
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={close} />
    </header>
  )
}
