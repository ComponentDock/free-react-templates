import { useState, useRef, useEffect, useCallback } from 'react'
import { cn } from '@free-react-templates/ui'

interface MultiselectDropdownProps {
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
}

export function MultiselectDropdown({ options, selected, onChange }: MultiselectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const toggleOption = useCallback(
    (option: string) => {
      if (selected.includes(option)) {
        onChange(selected.filter((s) => s !== option))
      } else {
        onChange([...selected, option])
      }
    },
    [selected, onChange],
  )

  const removeOption = useCallback(
    (option: string) => {
      onChange(selected.filter((s) => s !== option))
    },
    [selected, onChange],
  )

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
        setHighlightedIndex(-1)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Keyboard navigation
  function handleKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case 'Enter':
      case ' ': {
        e.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
          setHighlightedIndex(0)
        } else {
          toggleOption(options[highlightedIndex]!)
        }
        break
      }
      case 'ArrowDown': {
        e.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
          setHighlightedIndex(0)
        } else {
          setHighlightedIndex((prev) => (prev + 1) % options.length)
        }
        break
      }
      case 'ArrowUp': {
        e.preventDefault()
        if (isOpen) {
          setHighlightedIndex((prev) => (prev - 1 + options.length) % options.length)
        }
        break
      }
      case 'Escape': {
        setIsOpen(false)
        setHighlightedIndex(-1)
        break
      }
      default:
        break
    }
  }

  function renderTriggerLabel() {
    if (selected.length === 0) return 'Select options...'
    if (selected.length === 1) return selected[0]
    if (selected.length === 2) return `${selected[0]}, ${selected[1]}`
    return `${selected.length} selected`
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-md"
      role="combobox"
      aria-expanded={isOpen}
    >
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen)
          setHighlightedIndex(-1)
        }}
        onKeyDown={handleKeyDown}
        className={cn(
          'flex w-full items-center justify-between rounded border bg-white px-4 py-3 text-left text-sm transition-colors',
          isOpen ? 'border-brand ring-1 ring-brand' : 'border-gray-300 hover:border-gray-400',
        )}
        aria-haspopup="listbox"
        aria-label="Select options"
      >
        <span className="flex flex-wrap gap-1.5">
          {selected.length === 0 && <span className="text-gray-400">{renderTriggerLabel()}</span>}
          {selected.length > 0 && selected.length <= 2 && (
            <span className="text-gray-700">{renderTriggerLabel()}</span>
          )}
          {selected.length > 2 && <span className="text-gray-500">{renderTriggerLabel()}</span>}
        </span>
        <svg
          className={cn('h-4 w-4 text-gray-500 transition-transform', isOpen && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Selected tags */}
      {selected.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {selected.map((opt) => (
            <span
              key={opt}
              className="inline-flex items-center gap-1 rounded bg-black/10 px-2.5 py-1 text-sm text-gray-600"
            >
              {opt}
              <button
                type="button"
                onClick={() => removeOption(opt)}
                className="ml-0.5 text-gray-400 hover:text-gray-700"
                aria-label={`Remove ${opt}`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Dropdown list */}
      {isOpen && (
        <ul
          ref={listRef}
          role="listbox"
          aria-label="Options"
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded border border-gray-200 bg-white py-1 shadow-[0px_3px_22px_-15px_rgba(0,0,0,0.63)]"
        >
          {options.map((option, index) => {
            const isSelected = selected.includes(option)
            return (
              <li
                key={option}
                role="option"
                aria-selected={isSelected}
                onClick={() => toggleOption(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={cn(
                  'flex cursor-pointer items-center gap-3 px-4 py-2.5 text-sm transition-colors',
                  highlightedIndex === index && 'bg-gray-100',
                )}
              >
                {/* Custom checkbox */}
                <span
                  className={cn(
                    'flex h-4 w-4 shrink-0 items-center justify-center rounded border-[2px] border-black/20 transition-colors',
                    isSelected && 'border-brand bg-brand',
                  )}
                >
                  {isSelected && (
                    <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
                <span className={cn('text-gray-600', isSelected && 'text-heading-text')}>
                  {option}
                </span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
