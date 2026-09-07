import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { OptionItem } from './OptionItem'

export interface Option {
  label: string
  value: string
  disabled?: boolean
}

export interface MultiselectDropdownProps {
  options: Option[]
  selectedValues?: string[]
  onChange?: (selected: string[]) => void
  placeholder?: string
}

export function MultiselectDropdown({
  options,
  selectedValues = [],
  onChange,
  placeholder = 'Select options',
}: MultiselectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [focusIndex, setFocusIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedCount = selectedValues.length
  const allEnabledValues = options.filter((o) => !o.disabled).map((o) => o.value)
  const allSelected =
    allEnabledValues.length > 0 && allEnabledValues.every((v) => selectedValues.includes(v))

  const toggleOption = useCallback(
    (value: string) => {
      const next = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value]
      onChange?.(next)
    },
    [selectedValues, onChange],
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

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setFocusIndex((prev) => (prev + 1) % options.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setFocusIndex((prev) => (prev - 1 + options.length) % options.length)
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        toggleOption(options[focusIndex]!.value)
      } else if (e.key === 'Escape') {
        e.preventDefault()
        close()
      }
    },
    [isOpen, focusIndex, options, toggleOption, close],
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
          'flex w-full items-center justify-between rounded border px-4 py-3 text-sm',
          'bg-optselect-card text-left transition-colors hover:bg-optselect-hover',
          'focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-optselect-accent',
          isOpen ? 'border-optselect-accent' : 'border-optselect-border',
        )}
      >
        <span
          className={cn(selectedCount === 0 ? 'text-optselect-text-muted' : 'text-optselect-text')}
        >
          {displayText}
        </span>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className={cn(
            'h-4 w-4 shrink-0 text-optselect-text-muted transition-transform',
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
            'absolute z-10 mt-1 w-full overflow-hidden rounded border border-optselect-border bg-optselect-card shadow-md',
          )}
        >
          <div className="flex border-b border-optselect-border px-4 py-2">
            <button
              type="button"
              onClick={allSelected ? clearAll : selectAll}
              className="text-xs font-medium text-optselect-accent hover:underline"
            >
              {allSelected ? 'Clear All' : 'Select All'}
            </button>
          </div>

          {options.map((option, index) => (
            <OptionItem
              key={option.value}
              label={option.label}
              checked={selectedValues.includes(option.value)}
              disabled={option.disabled}
              focused={focusIndex === index}
              onClick={() => toggleOption(option.value)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
