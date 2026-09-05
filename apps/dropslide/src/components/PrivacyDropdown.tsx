import { useState, useRef, useEffect, useCallback } from 'react'

const menuItems = ['Account', 'Privacy & Security', 'Password', 'Notification']

export function PrivacyDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstItem = menuRef.current.querySelector<HTMLElement>('[role="menuitem"]')
      firstItem?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [close])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [close])

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type="button"
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`inline-flex items-center gap-2 rounded border border-transparent px-[7px] py-1 text-sm text-[#888] transition-all duration-300 hover:border-[#efefef] hover:shadow-[0_1px_5px_0_rgba(0,0,0,0.05)] focus:outline-none ${
          isOpen ? 'border-transparent bg-[#f8f9fa] shadow-[inset_0_2px_2px_0_rgba(0,0,0,0.2)]' : ''
        }`}
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
        Privacy Settings
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute left-0 top-full z-50 mt-2 min-w-[200px] rounded border border-transparent bg-white shadow-[0_15px_30px_0_rgba(0,0,0,0.2)] transition-all duration-300"
          role="menu"
        >
          <ul className="py-1">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  role="menuitem"
                  className="block px-4 py-2 text-sm text-[#888] transition-colors duration-200 hover:bg-[#f8f9fa] hover:text-black"
                  onClick={(e) => {
                    e.preventDefault()
                    close()
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
