import { useState, useRef, useCallback, useEffect, type KeyboardEvent } from 'react'
import { cn } from '@free-react-templates/ui'

export interface MultiSelectOption {
  label: string
  value: string
}

export interface MultiSelectProps {
  options: MultiSelectOption[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder?: string
  searchPlaceholder?: string
  className?: string
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = 'Select options...',
  searchPlaceholder = 'Search...',
  className,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const filteredOptions = options.filter(
    (opt) =>
      opt.label.toLowerCase().includes(search.toLowerCase()) && !selected.includes(opt.value),
  )

  const selectedOptions = options.filter((opt) => selected.includes(opt.value))

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const handleSelect = useCallback(
    (value: string) => {
      onChange([...selected, value])
      setSearch('')
      searchInputRef.current?.focus()
    },
    [selected, onChange],
  )

  const handleRemove = useCallback(
    (value: string) => {
      onChange(selected.filter((v) => v !== value))
    },
    [selected, onChange],
  )

  const comboboxRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (
        document.activeElement === comboboxRef.current ||
        document.activeElement === containerRef.current
      ) {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
    }
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={containerRef} className={cn('relative', className)} onKeyDown={handleKeyDown}>
      {/* Input area with chips */}
      <div
        ref={comboboxRef}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        tabIndex={0}
        className="min-h-[42px] cursor-pointer border-b border-gray-300 bg-white px-1 py-1 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/30 dark:bg-gray-800"
        onClick={handleToggle}
      >
        <div className="flex flex-wrap items-center gap-1">
          {selectedOptions.map((opt) => (
            <span
              key={opt.value}
              className="inline-flex items-center gap-1 rounded-[3px] bg-brand px-2.5 py-0.5 text-sm text-white"
            >
              {opt.label}
              <button
                type="button"
                aria-label={`Remove ${opt.label}`}
                className="ml-1 text-white/50 transition-colors hover:text-white focus:outline-none focus:ring-1 focus:ring-white/50"
                onClick={(e) => {
                  e.stopPropagation()
                  handleRemove(opt.value)
                }}
              >
                ×
              </button>
            </span>
          ))}
          {selectedOptions.length === 0 && (
            <span className="py-1 text-sm text-gray-400">{placeholder}</span>
          )}
        </div>
      </div>

      {/* Dropdown list */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Options"
          className="absolute z-50 mt-1 max-h-60 w-full overflow-y-auto border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
        >
          {/* Search input */}
          <div className="sticky top-0 border-b border-gray-100 bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
            <input
              ref={searchInputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full rounded border border-gray-200 px-2 py-1 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand/30 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Options */}
          {filteredOptions.length === 0 ? (
            <div className="px-3 py-2 text-sm text-gray-400">No results found</div>
          ) : (
            filteredOptions.map((opt) => (
              <div
                key={opt.value}
                role="option"
                aria-selected={selected.includes(opt.value)}
                className="cursor-pointer px-3 py-2 text-sm transition-colors hover:bg-dropdown-hover dark:hover:bg-gray-700"
                onClick={() => handleSelect(opt.value)}
              >
                {opt.label}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
