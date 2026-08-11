import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { logoText, menuCloseLabel, menuTriggerLabel } from '../data'
import { OffCanvasMenu } from './OffCanvasMenu'

/* Header — absolute top bar over the featured area (padding 2em 0): white
   uppercase logo wordmark left (letter-spacing 5px), 44px hamburger toggle
   right (radius 2px, translucent bg, hover black; bars → X while the
   off-canvas menu is open). */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-40 py-8">
      <div className="flex items-start justify-between">
        <a href="#" className="ml-5 font-serif text-xl uppercase tracking-[5px] text-white">
          {logoText}
        </a>
        <button
          type="button"
          aria-label={menuOpen ? menuCloseLabel : menuTriggerLabel}
          aria-expanded={menuOpen}
          aria-controls="clamor-off-canvas"
          onClick={() => setMenuOpen((value) => !value)}
          className="mr-5 flex h-11 w-11 items-center justify-center rounded-[2px] bg-black/5 text-white transition-colors hover:bg-black"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>
      <OffCanvasMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
