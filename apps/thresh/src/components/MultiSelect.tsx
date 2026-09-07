import { useState, useRef, useEffect, useCallback } from 'react'
import { Check } from 'lucide-react'

export interface Option {
  label: string
  value: string
}

const DEFAULT_OPTIONS: Option[] = Array.from({ length: 13 }, (_, i) => ({
  label: `Option${i + 1}`,
  value: `O${i + 1}`,
}))

export interface MultiSelectProps {
  options?: Option[]
}

export function MultiSelect({ options: initialOptions }: MultiSelectProps) {
  const [options, setOptions] = useState<Option[]>(initialOptions ?? DEFAULT_OPTIONS)
  const [selected, setSelected] = useState<Option[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const toggleOption = useCallback((option: Option) => {
    setSelected((prev) => {
      const exists = prev.some((o) => o.value === option.value)
      if (exists) {
        return prev.filter((o) => o.value !== option.value)
      }
      return [...prev, option]
    })
  }, [])

  const removeOption = useCallback((value: string) => {
    setSelected((prev) => prev.filter((o) => o.value !== value))
  }, [])

  const clearAll = useCallback(() => {
    setSelected([])
  }, [])

  const createTag = useCallback((text: string) => {
    const trimmed = text.trim()
    const newOption: Option = { label: trimmed, value: `custom-${Date.now()}` }
    setOptions((prev) => [...prev, newOption])
    setSelected((prev) => [...prev, newOption])
    setSearchValue('')
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      e.preventDefault()
      createTag(searchValue)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1))
    }
  }

  const triggerClick = () => {
    setIsOpen((prev) => !prev)
    inputRef.current?.focus()
  }

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchValue.toLowerCase()),
  )

  return (
    <div ref={containerRef} className="relative w-full max-w-md mx-auto">
      {/* Trigger */}
      <div
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select options"
        tabIndex={0}
        className="flex flex-wrap items-center gap-1 min-h-[42px] px-2.5 py-[5px] rounded cursor-pointer transition-all duration-300"
        style={{
          background: 'rgba(0, 0, 0, 0.8)',
          border: `2px solid ${isOpen ? 'rgba(0,0,0,0.1)' : 'transparent'}`,
          boxShadow: isOpen
            ? '0 3px 22px -15px rgba(0,0,0,0.8)'
            : '0 3px 22px -15px rgba(0,0,0,0.63)',
          lineHeight: 1.6,
          marginBottom: 10,
        }}
        onClick={triggerClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            triggerClick()
          }
        }}
      >
        {/* Clear-all button */}
        {selected.length > 0 && (
          <button
            type="button"
            aria-label="Clear all selections"
            className="ml-1 font-bold text-sm transition-colors duration-300 hover:opacity-80"
            style={{ color: '#f6c523' }}
            onClick={(e) => {
              e.stopPropagation()
              clearAll()
            }}
          >
            ×
          </button>
        )}

        {/* Selected chips */}
        {selected.map((opt) => (
          <span
            key={opt.value}
            className="inline-flex items-center gap-1 rounded text-[15px] transition-colors duration-300"
            style={{
              background: '#f6c523',
              color: '#000',
              padding: '2px 10px',
              border: 'none',
            }}
          >
            {opt.label}
            <button
              type="button"
              aria-label={`Remove ${opt.label}`}
              className="ml-1 hover:opacity-70 transition-opacity"
              style={{ color: '#000', marginRight: 5 }}
              onClick={(e) => {
                e.stopPropagation()
                removeOption(opt.value)
              }}
            >
              ×
            </button>
          </span>
        ))}

        {/* Inline search input */}
        <input
          ref={inputRef}
          type="search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value)
            setHighlightedIndex(-1)
          }}
          onKeyDown={handleInputKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder={selected.length === 0 ? 'Click to select an option' : ''}
          className="bg-transparent outline-none flex-1 min-w-[75px] text-sm"
          style={{ color: 'rgba(255,255,255,0.8)' }}
          aria-label="Search or create options"
        />
      </div>

      {/* Dropdown panel */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Options"
          className="absolute z-50 w-full rounded overflow-y-auto max-h-[300px] transition-all duration-300"
          style={{
            background: '#000',
            border: 'none',
            borderRadius: 4,
            padding: '10px 0',
            boxShadow: '0 3px 22px -15px rgba(0,0,0,0.63)',
            top: '100%',
          }}
        >
          {filteredOptions.map((opt, index) => {
            const isSelected = selected.some((s) => s.value === opt.value)
            const isHighlighted = index === highlightedIndex
            return (
              <div
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                className="flex items-center cursor-pointer transition-all duration-300"
                style={{
                  padding: '6px 20px 6px 6px',
                  color: isHighlighted || isSelected ? '#f6c523' : '#808080',
                  background: isHighlighted
                    ? 'rgba(255,255,255,0.1)'
                    : isSelected
                      ? '#000'
                      : 'transparent',
                  fontSize: 16,
                  fontWeight: 400,
                  verticalAlign: 'middle',
                }}
                onClick={() => toggleOption(opt)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {/* Checkbox square */}
                <span
                  className="inline-flex items-center justify-center shrink-0 mr-[10px] ml-[10px] transition-all duration-300"
                  style={{
                    width: 20,
                    height: 20,
                    border: isSelected ? 'none' : '2px solid rgba(255,255,255,0.18)',
                    borderRadius: 4,
                    background: isSelected ? '#f6c523' : 'transparent',
                  }}
                >
                  {isSelected && <Check size={12} color="#000" strokeWidth={3} />}
                </span>
                {opt.label}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
