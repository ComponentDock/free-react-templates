import { useState, useRef, useEffect, useCallback } from 'react'
import { DropdownButton } from './DropdownButton'

interface DropdownColumnProps {
  title: string
  items: string[]
  hasActive?: boolean
  direction: 'dropdown' | 'dropup' | 'dropright' | 'dropleft'
}

export function DropdownColumn({ title, items, direction }: DropdownColumnProps) {
  const [regularOpen, setRegularOpen] = useState(false)
  const [splitOpen, setSplitOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const closeAll = useCallback(() => {
    setRegularOpen(false)
    setSplitOpen(false)
  }, [])

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

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      <h2 className="mb-4 text-center text-2xl font-medium text-black">
        <br />
        <small className="text-lg">{title}</small>
      </h2>
      <div className="flex flex-col gap-5">
        <DropdownButton
          label={
            title === 'Dropdown Variation'
              ? 'Dropdown'
              : title === 'Dropup Variation'
                ? 'Dropup'
                : title === 'Dropright Variation'
                  ? 'Dropright'
                  : 'Dropleft'
          }
          items={items}
          isOpen={regularOpen}
          onToggle={() => {
            closeAll()
            setRegularOpen(!regularOpen)
          }}
          onClose={closeAll}
          direction={direction}
        />
        <DropdownButton
          label={
            title === 'Dropdown Variation'
              ? 'Split Dropdown'
              : title === 'Dropup Variation'
                ? 'Split Dropup'
                : title === 'Dropright Variation'
                  ? 'Split Dropright'
                  : 'Split Dropleft'
          }
          items={items}
          isOpen={splitOpen}
          onToggle={() => {
            closeAll()
            setSplitOpen(!splitOpen)
          }}
          onClose={closeAll}
          direction={direction}
          split
        />
      </div>
    </div>
  )
}
