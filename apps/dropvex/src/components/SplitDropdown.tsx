import { useState, useRef, useEffect, useCallback } from 'react'
import { Menu, ChevronRight } from 'lucide-react'

const menuItems = ['Home', 'About', 'Services', 'Blog', 'Contact']

export function SplitDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const closeMenu = useCallback(() => {
    setIsOpen(false)
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
        closeMenu()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [closeMenu])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [closeMenu])

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-[600px]">
      <div className="flex items-stretch overflow-hidden rounded border border-transparent bg-[#4d80e4]">
        <div className="flex flex-1 items-center px-4">
          <span className="text-sm font-bold uppercase tracking-wider text-white">Splash</span>
        </div>
        <button
          type="button"
          onClick={handleToggle}
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="flex h-[60px] w-[60px] items-center justify-center bg-[#2161dd] text-white transition-colors hover:bg-[#3770e1] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 top-full z-50 mt-2 min-w-[15rem] overflow-hidden rounded bg-white shadow-[0px_10px_34px_-20px_rgba(0,0,0,0.41)]"
          role="menu"
        >
          {menuItems.map((item) => (
            <button
              key={item}
              type="button"
              role="menuitem"
              onClick={closeMenu}
              className="flex w-full items-center justify-between border-b border-[rgba(0,0,0,0.05)] px-5 py-4 text-left text-sm text-gray-700 transition-colors hover:bg-[#4d80e4] hover:text-white"
            >
              <span>{item}</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
