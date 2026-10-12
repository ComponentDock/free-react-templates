import { useEffect, useRef, useState } from 'react'
import { Menu } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { useScrolled } from '../lib/use-scrolled'
import { DesktopNav } from './DesktopNav'
import { MobileMenu, MOBILE_MENU_ID } from './MobileMenu'
import { Wordmark } from './Wordmark'

/** The `xl` breakpoint the desktop row switches on. */
const WIDE = 1200

/** The header sits at the top of the page, so the first scrolled pixel pins it. */
const STICK_AT = 0

/**
 * The header: absolutely positioned and transparent over the band, becoming a
 * pinned solid white bar the moment the page scrolls. Its left column holds the
 * wordmark, its second column the desktop row (≥1200px) and, below that, the
 * hamburger that opens the off-canvas panel. The bar keeps full width in both
 * states, so pinning never shifts the layout sideways.
 */
export function Header() {
  const stuck = useScrolled(STICK_AT)
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
    <header
      data-stuck={stuck}
      className={cn(
        'top-0 left-0 z-[1999] mb-0 w-full',
        stuck
          ? 'fixed border-b border-transparent bg-white shadow-stuck'
          : 'absolute border-b border-white/10',
      )}
    >
      <div className="mx-auto flex w-full max-w-[1140px] items-center px-[15px]">
        <div className="w-1/2 xl:w-2/12">
          <Wordmark stuck={stuck} />
        </div>

        <div className="hidden w-10/12 xl:block">
          <DesktopNav stuck={stuck} />
        </div>

        <div className="ml-auto xl:hidden">
          <button
            ref={toggle}
            type="button"
            aria-expanded={open}
            aria-controls={MOBILE_MENU_ID}
            aria-label={open ? 'Close the menu' : 'Open the menu'}
            onClick={() => setOpen((current) => !current)}
            className={cn(
              'block py-3 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2',
              stuck ? 'text-ink hover:text-brand focus-visible:outline-brand' : 'text-white',
            )}
          >
            <Menu aria-hidden="true" className="h-7 w-7" />
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={close} />
    </header>
  )
}
