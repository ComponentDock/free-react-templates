import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'

interface MenuItem {
  title: string
  subtitle?: string
}

const ITEMS: MenuItem[] = [
  { title: 'All Rources' },
  { title: 'Dropbox', subtitle: 'Lorem ipsum dolor sit amet harum.' },
  { title: 'Google Drive', subtitle: 'Lorem ipsum dolor sit amet harum.' },
  { title: 'Eventbrite', subtitle: 'Lorem ipsum dolor sit amet harum.' },
]

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuId = 'fount-dropdown-menu'

  const openMenu = useCallback(() => {
    setIsOpen(true)
    setShowMenu(true)
  }, [])

  const closeMenu = useCallback(() => {
    setShowMenu(false)
    setIsOpen(false)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        closeMenu()
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeMenu()
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, closeMenu])

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => (isOpen ? closeMenu() : openMenu())}
        className="relative inline-block pr-[40px] text-[16px] text-fount-text transition-colors hover:text-fount-item-title"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
      >
        All sources
        <span
          className="absolute right-0 top-1/2 flex h-[20px] w-[20px] -translate-y-1/2 items-center justify-center rounded-full bg-fount-dot text-fount-text"
          aria-hidden="true"
        >
          <ChevronDown size={12} />
        </span>
      </button>

      {showMenu && (
        <div
          id={menuId}
          role="menu"
          className="absolute left-0 z-10 mt-[20px] min-w-[10rem] rounded-[0.25rem] border border-transparent bg-white px-0 pt-0 pb-0 opacity-100 shadow-[0_15px_30px_0_rgba(0,0,0,0.2)] transition-all duration-300"
          aria-labelledby={undefined}
        >
          {ITEMS.map((item) => (
            <a
              key={item.title}
              href="#"
              role="menuitem"
              onClick={(e) => e.preventDefault()}
              className="group relative block border-b border-fount-border px-[35px] py-[10px] text-[14px] text-fount-text transition-colors duration-300 hover:text-fount-item-title"
            >
              <span
                className="absolute left-[10px] top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full bg-fount-dot transition-colors duration-300 group-hover:bg-fount-dot-hover"
                aria-hidden="true"
              />
              <span className="block font-bold text-fount-item-title">{item.title}</span>
              {item.subtitle && (
                <span className="block text-[13px] text-fount-item-subtitle">{item.subtitle}</span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
