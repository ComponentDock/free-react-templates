import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'

const leftCategories = [
  { name: 'Code', count: 5 },
  { name: 'Fonts', count: 12 },
  { name: 'HTML Templates', count: 81 },
  { name: 'Mockups', count: 9 },
  { name: 'Logo', count: 16 },
  { name: 'PSD Mockups', count: 22 },
]

const rightCategories = [
  { name: 'Sketch App', count: 32 },
  { name: 'User Interface', count: 61 },
  { name: 'WordPress', count: 73 },
  { name: 'User Experience', count: 88 },
  { name: 'WebGL', count: 19 },
  { name: 'Mockups', count: 93 },
]

interface MegaDropdownProps {
  triggerLabel?: string
}

export function MegaDropdown({ triggerLabel = 'Dropdown' }: MegaDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        close()
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, close])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        close()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, close])

  return (
    <div className="flex justify-center px-4">
      <div ref={dropdownRef} className="relative inline-block">
        {/* Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-[14px] transition-colors duration-300"
          style={{ color: isOpen ? '#000' : '#888' }}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {triggerLabel}
          <ChevronDown
            size={18}
            className="transition-transform duration-300"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </button>

        {/* Mega menu panel */}
        {isOpen && (
          <div
            className="absolute left-1/2 z-10 mt-[20px] flex min-w-[680px] -translate-x-1/2 bg-white p-[10px] opacity-100 shadow-[0_15px_30px_0_rgba(0,0,0,0.2)] transition-all duration-300"
            role="menu"
          >
            <div className="flex w-full p-[20px]">
              {/* Left column: hero image + PSD Mockups link */}
              <div className="w-1/3 px-[10px]">
                <img
                  src="https://picsum.photos/seed/droptile-hero/300/200"
                  alt="Hero"
                  className="mb-3 block w-full"
                />
                <p>
                  <a
                    href="#"
                    className="text-[14px] font-bold text-droptile-link transition-colors duration-300 hover:text-droptile-hover"
                  >
                    PSD Mockups
                  </a>{' '}
                  <span className="text-[14px] text-droptile-muted">View All Here</span>
                </p>
              </div>

              {/* Middle column: category list 1 */}
              <div className="w-1/3 px-[10px]">
                <ul className="list-none">
                  {leftCategories.map((cat) => (
                    <li key={cat.name}>
                      <a
                        href="#"
                        className="block py-1 text-[14px] text-droptile-link transition-colors duration-300 hover:text-droptile-hover"
                      >
                        {cat.name}({cat.count}){' '}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right column: category list 2 */}
              <div className="w-1/3 px-[10px]">
                <ul className="list-none">
                  {rightCategories.map((cat) => (
                    <li key={cat.name}>
                      <a
                        href="#"
                        className="block py-1 text-[14px] text-droptile-link transition-colors duration-300 hover:text-droptile-hover"
                      >
                        {cat.name}({cat.count}){' '}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
