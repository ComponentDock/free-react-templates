import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { OptionItem } from './OptionItem'
import { SelectedTag } from './SelectedTag'

export interface Option {
  label: string
  value: string
  disabled?: boolean
}

export interface SearchableMultiselectProps {
  options: Option[]
  selectedValues?: string[]
  onChange?: (selected: string[]) => void
  placeholder?: string
}

export function SearchableMultiselect({
  options,
  selectedValues = [],
  onChange,
  placeholder = 'Select names',
}: SearchableMultiselectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [focusIndex, setFocusIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const allEnabledValues = options.filter((o) => !o.disabled).map((o) => o.value)
  const allSelected =
    allEnabledValues.length > 0 && allEnabledValues.every((v) => selectedValues.includes(v))

  const toggleOption = useCallback(
    (value: string) => {
      const next = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value]
      onChange?.(next)
      setSearchTerm('')
    },
    [selectedValues, onChange],
  )

  const removeTag = useCallback(
    (value: string) => {
      onChange?.(selectedValues.filter((v) => v !== value))
    },
    [selectedValues, onChange],
  )

  const selectAll = useCallback(() => {
    onChange?.(allEnabledValues)
    setSearchTerm('')
  }, [allEnabledValues, onChange])

  const clearAll = useCallback(() => {
    onChange?.([])
    setSearchTerm('')
  }, [onChange])

  const close = useCallback(() => {
    setIsOpen(false)
    setSearchTerm('')
    setFocusIndex(-1)
  }, [])

  const open = useCallback(() => {
    setIsOpen(true)
    setFocusIndex(0)
    setTimeout(() => searchInputRef.current?.focus(), 0)
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
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        if (!isOpen) {
          open()
        }
      }
    },
    [isOpen, open],
  )

  const handleSearchKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        close()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setFocusIndex((prev) => (prev + 1) % filteredOptions.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setFocusIndex((prev) => (prev - 1 + filteredOptions.length) % filteredOptions.length)
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredOptions[focusIndex]) {
          toggleOption(filteredOptions[focusIndex].value)
        }
      }
    },
    [close, filteredOptions, focusIndex, toggleOption],
  )

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Trigger */}
      <div
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        tabIndex={0}
        onClick={() => (isOpen ? close() : open())}
        onKeyDown={handleKeyDown}
        className={cn(
          'flex min-h-[44px] w-full flex-wrap items-center gap-1 rounded-none border px-3 py-2 text-left text-sm',
          'bg-white transition-colors',
          isOpen ? 'border-tealpick-accent' : 'border-tealpick-border',
        )}
      >
        {selectedValues.length === 0 && (
          <span className="text-tealpick-text-muted">{placeholder}</span>
        )}
        {selectedValues.map((value) => {
          const option = options.find((o) => o.value === value)
          if (!option) return null
          return <SelectedTag key={value} label={option.label} onRemove={() => removeTag(value)} />
        })}
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className={cn(
            'ml-auto h-4 w-4 shrink-0 text-tealpick-text-muted transition-transform',
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
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div
          role="listbox"
          aria-multiselectable
          className={cn(
            'absolute z-10 mt-1 w-full overflow-hidden rounded-none border border-tealpick-border bg-white',
          )}
          style={{ boxShadow: '0 15px 30px 0 rgba(0,0,0,0.2)' }}
        >
          {/* Search input */}
          <div className="border-b border-tealpick-border px-3 py-2">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search names..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setFocusIndex(0)
              }}
              onKeyDown={handleSearchKeyDown}
              className="w-full rounded-none border border-tealpick-border bg-white px-3 py-2 text-sm text-tealpick-text placeholder-tealpick-text-muted focus:border-tealpick-accent focus:outline-none"
              aria-label="Search names"
            />
          </div>

          {/* Select All / Clear All */}
          <div className="flex border-b border-tealpick-border px-4 py-2">
            <button
              type="button"
              onClick={allSelected ? clearAll : selectAll}
              className="text-xs font-medium text-tealpick-accent hover:underline"
            >
              {allSelected ? 'Clear All' : 'Select All'}
            </button>
          </div>

          {/* Options list */}
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-3 text-sm text-tealpick-text-muted">No results found</div>
            ) : (
              filteredOptions.map((option, index) => (
                <OptionItem
                  key={option.value}
                  label={option.label}
                  checked={selectedValues.includes(option.value)}
                  disabled={option.disabled}
                  focused={focusIndex === index}
                  onClick={() => toggleOption(option.value)}
                />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
