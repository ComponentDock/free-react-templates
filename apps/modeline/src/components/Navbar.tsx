import { useEffect, useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navItems } from '../data'
import { SearchOverlay } from './SearchOverlay'
import { Wordmark } from './Wordmark'

const leftItems = navItems.slice(0, 3)
const rightItems = navItems.slice(3)

interface NavListProps {
  items: readonly { label: string; href: string }[]
  className?: string
}

function NavList({ items, className }: NavListProps) {
  return (
    <ul className={cn('flex', className)}>
      {items.map((item) => (
        <li key={item.href} className="mr-[50px] last:mr-0">
          <a
            href={item.href}
            className="block py-[22px] text-[13px] tracking-[0.12em] text-white uppercase transition-opacity hover:opacity-70"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div
      id="modeline-menu"
      data-testid="mobile-drawer"
      className="absolute inset-x-0 top-[93px] z-30 bg-white py-5 text-left shadow-[0_43px_40px_rgba(0,0,0,0.15)] md:hidden"
    >
      <ul>
        {navItems.map((item) => (
          <li key={item.href} className="border-b border-line last:border-b-0">
            <a
              href={item.href}
              onClick={onClose}
              className="block px-[25px] py-[10px] text-[14px] text-ink"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * 93px navy bar split around a centred wordmark, with a 92px white search
 * square pinned to the right edge. Below 768px the lists fold into a drawer.
 */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="relative z-40 bg-ink">
      <div className="relative h-[93px] px-6 py-4 md:px-[90px]">
        <div className="hidden h-full items-center md:grid md:grid-cols-[1fr_auto_1fr]">
          <NavList items={leftItems} className="justify-self-start" />
          <Wordmark />
          <NavList items={rightItems} className="justify-self-end pr-6" />
        </div>

        <div className="flex h-full items-center justify-between pr-24 md:hidden">
          <Wordmark />
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="modeline-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="p-2 text-white"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>

        <button
          type="button"
          aria-label="Open search"
          onClick={() => setSearchOpen(true)}
          className="absolute top-0 right-0 flex h-full w-[92px] items-center justify-center bg-white text-ink transition-colors hover:bg-line"
        >
          <Search aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>

      {menuOpen ? <MobileDrawer onClose={() => setMenuOpen(false)} /> : null}
      {searchOpen ? <SearchOverlay onClose={() => setSearchOpen(false)} /> : null}
    </header>
  )
}
