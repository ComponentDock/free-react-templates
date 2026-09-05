import { useState, useRef, useEffect, useCallback } from 'react'
import { DropdownItem } from './DropdownItem'

const menuItems = [
  {
    label: 'Profile',
    hasSubmenu: true,
    submenuItems: ['Edit profile', 'Change password', 'Preferences'],
  },
  { label: 'Settings', hasSubmenu: false },
  { label: 'Notifications', hasSubmenu: false },
  { divider: true },
  { label: 'Help & Support', hasSubmenu: false },
  { label: 'Sign out', hasSubmenu: false },
]

export function NestedDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const closeAll = useCallback(() => {
    setIsOpen(false)
    setExpandedSubmenu(null)
  }, [])

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstItem = menuRef.current.querySelector<HTMLElement>('[role="menuitem"]')
      firstItem?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeAll()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [closeAll])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') closeAll()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [closeAll])

  function handleToggle() {
    if (isOpen) {
      closeAll()
    } else {
      setExpandedSubmenu(null)
      setIsOpen(true)
    }
  }

  function handleSubmenuToggle(label: string) {
    setExpandedSubmenu((prev) => (prev === label ? null : label))
  }

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type="button"
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="flex items-center gap-2 rounded-[5px] border border-[#20c997] bg-[#20c997] px-4 py-3 text-sm font-normal text-white shadow-[0_10px_20px_-6px_rgba(0,0,0,0.12)] transition-all hover:bg-[#1aa179] hover:shadow-lg focus:outline-none"
      >
        Dropdown
        <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-full z-50 mt-2 min-w-[200px] overflow-hidden rounded-[5px] border border-transparent bg-white shadow-[0_10px_34px_-20px_rgba(0,0,0,0.41)]"
          role="menu"
        >
          <ul className="py-1">
            {menuItems.map((item, i) => {
              if ('divider' in item && item.divider) {
                return <DropdownItem key={`div-${i}`} isDivider />
              }
              const {
                label,
                hasSubmenu = false,
                submenuItems = [],
              } = item as Exclude<(typeof menuItems)[number], { divider: boolean }>
              return (
                <DropdownItem
                  key={label}
                  label={label}
                  hasSubmenu={hasSubmenu}
                  submenuItems={submenuItems}
                  expanded={expandedSubmenu === label}
                  onSubmenuToggle={() => handleSubmenuToggle(label!)}
                  onClick={closeAll}
                />
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
