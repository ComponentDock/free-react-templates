import { useState, useRef, useEffect, useCallback } from 'react'
import { LayoutDashboard, ChevronDown } from 'lucide-react'

interface MenuItem {
  label: string
  isNew?: boolean
}

const ITEMS: MenuItem[] = [
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' },
  { label: 'Dashboard 3' },
  { label: 'Dashboard 4', isNew: true },
  { label: 'Dashboard 5', isNew: true },
]

export function DashboardDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuId = 'console-dropdown-menu'

  const openMenu = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeMenu = useCallback(() => {
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

  const handleItemClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      closeMenu()
    },
    [closeMenu],
  )

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => (isOpen ? closeMenu() : openMenu())}
        className="inline-flex items-center bg-[#007bff] px-[10px] py-[10px] text-[16px] text-white focus:outline-none"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
      >
        <LayoutDashboard size={16} className="mr-2" aria-hidden="true" />
        <span>Dashboard</span>
        <ChevronDown
          size={16}
          className={`ml-2 transition-transform duration-300 ${isOpen ? '-rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          id={menuId}
          role="menu"
          className="absolute left-0 z-10 mt-[-10px] min-w-[160px] border border-transparent bg-[#007bff] shadow-[0_15px_30px_0_rgba(0,0,0,.2)] transition-all duration-300"
          style={{
            marginTop: '0px',
            opacity: 1,
            visibility: 'visible',
          }}
        >
          {ITEMS.map((item) => (
            <a
              key={item.label}
              href="#"
              role="menuitem"
              onClick={handleItemClick}
              className="block border-b border-white/10 px-[40px] py-[15px] text-[14px] text-white transition-colors duration-300 hover:bg-white hover:text-[#007bff]"
            >
              {item.label}
              {item.isNew && (
                <span className="ml-2 rounded-[2px] bg-[#fd7e14] px-[4px] py-[2px] text-[10px] text-white">
                  New
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
