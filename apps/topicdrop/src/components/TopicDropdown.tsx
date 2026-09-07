import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@free-react-templates/ui'

export interface Topic {
  label: string
  value: string
  disabled?: boolean
}

export interface TopicDropdownProps {
  topics: Topic[]
  selectedValues?: string[]
  onChange?: (selected: string[]) => void
  placeholder?: string
}

export function TopicDropdown({
  topics,
  selectedValues = [],
  onChange,
  placeholder = 'Select Topics',
}: TopicDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [focusIndex, setFocusIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedCount = selectedValues.length
  const allEnabledValues = topics.filter((t) => !t.disabled).map((t) => t.value)
  const allSelected =
    allEnabledValues.length > 0 && allEnabledValues.every((v) => selectedValues.includes(v))

  const toggleTopic = useCallback(
    (value: string) => {
      const topic = topics.find((t) => t.value === value)
      if (topic?.disabled) return
      const next = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value]
      onChange?.(next)
    },
    [topics, selectedValues, onChange],
  )

  const selectAll = useCallback(() => {
    onChange?.(allEnabledValues)
  }, [allEnabledValues, onChange])

  const clearAll = useCallback(() => {
    onChange?.([])
  }, [onChange])

  const close = useCallback(() => {
    setIsOpen(false)
    setFocusIndex(-1)
  }, [])

  // Click outside
  useEffect(() => {
    if (!isOpen) return
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, close])

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setIsOpen(true)
          setFocusIndex(0)
        }
        return
      }

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setFocusIndex((prev) => (prev + 1) % topics.length)
          break
        case 'ArrowUp':
          e.preventDefault()
          setFocusIndex((prev) => (prev - 1 + topics.length) % topics.length)
          break
        case ' ':
        case 'Enter':
          e.preventDefault()
          toggleTopic(topics[focusIndex]!.value)
          break
        case 'Escape':
          e.preventDefault()
          close()
          break
      }
    },
    [isOpen, focusIndex, topics, toggleTopic, close],
  )

  const displayText =
    selectedCount === 0
      ? placeholder
      : selectedCount === 1
        ? `${selectedCount} item selected`
        : `${selectedCount} items selected`

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => {
          setIsOpen((prev) => !prev)
          if (!isOpen) setFocusIndex(0)
        }}
        onKeyDown={handleKeyDown}
        className={cn(
          'flex w-full items-center justify-between rounded border px-4 py-3 text-left text-sm transition-colors',
          isOpen
            ? 'border-topicdrop-brand'
            : 'border-topicdrop-card-border hover:border-topicdrop-brand',
          'bg-topicdrop-card-bg text-topicdrop-text',
          'focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-topicdrop-brand',
        )}
      >
        <span
          className={cn(selectedCount === 0 ? 'text-topicdrop-text' : 'text-topicdrop-heading')}
        >
          {displayText}
        </span>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className={cn(
            'h-4 w-4 shrink-0 text-topicdrop-text transition-transform',
            isOpen && 'rotate-180',
          )}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-multiselectable
          className={cn(
            'absolute z-10 mt-1 w-full overflow-hidden rounded border border-topicdrop-menu-border bg-topicdrop-brand shadow-md',
          )}
        >
          {/* Select All / Clear All bar */}
          <div className="flex border-b border-topicdrop-menu-border px-4 py-2">
            <button
              type="button"
              onClick={allSelected ? clearAll : selectAll}
              className="text-xs font-medium text-white hover:underline"
            >
              {allSelected ? 'Clear All' : 'Select All'}
            </button>
          </div>

          {topics.map((topic, idx) => {
            const isSelected = selectedValues.includes(topic.value)
            const isFocused = idx === focusIndex
            return (
              <button
                key={topic.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                aria-disabled={topic.disabled}
                onClick={() => toggleTopic(topic.value)}
                className={cn(
                  'flex w-full items-center justify-between px-4 py-[15px] pl-[35px] text-left text-[16px] text-white transition-colors',
                  topic.disabled && 'cursor-not-allowed opacity-50',
                  isFocused && 'bg-white text-topicdrop-brand',
                  isSelected && !isFocused && 'text-white',
                  !isSelected &&
                    !isFocused &&
                    'text-white hover:bg-white hover:text-topicdrop-brand',
                )}
              >
                <span>{topic.label}</span>
                {isSelected && (
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="h-4 w-4 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8L6.5 11.5L13 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
