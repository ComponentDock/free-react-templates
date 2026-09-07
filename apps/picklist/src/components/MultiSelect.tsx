import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface MultiSelectProps {
  options: string[]
  placeholder?: string
}

export function MultiSelect({ options, placeholder = 'selected' }: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const filteredOptions = options.filter((opt) => opt.toLowerCase().includes(search.toLowerCase()))

  const allFilteredSelected =
    filteredOptions.length > 0 && filteredOptions.every((opt) => selected.has(opt))

  const toggleOption = useCallback((option: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(option)) {
        next.delete(option)
      } else {
        next.add(option)
      }
      return next
    })
  }, [])

  const selectAll = useCallback(() => {
    setSelected(new Set(filteredOptions))
  }, [filteredOptions])

  const deselectAll = useCallback(() => {
    setSelected(new Set())
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    if (!isOpen) return

    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
        setSearch('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus()
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false)
        setSearch('')
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  function handleToggle() {
    setIsOpen((prev) => !prev)
    if (isOpen) {
      setSearch('')
    }
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-xs">
      {/* Trigger button */}
      <button
        type="button"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={cn(
          'flex w-full items-center justify-between rounded bg-white px-3 py-2.5 text-left text-sm',
          'border border-border shadow-[0_1px_1px_0_rgba(0,0,0,0.1)]',
          'hover:shadow-[0_2px_10px_0_rgba(0,0,0,0.1)] transition-shadow',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
          isOpen && 'shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]',
        )}
      >
        <span className={selected.size === 0 ? 'text-text-muted' : 'text-text'}>
          {selected.size} {placeholder}
        </span>
        <ChevronDown
          className={cn(
            'ml-2 h-4 w-4 text-text-muted transition-transform',
            isOpen && 'rotate-180',
          )}
        />
      </button>

      {/* Dropdown panel */}
      {isOpen && (
        <div
          className={cn(
            'absolute left-0 right-0 z-50 mt-1 rounded bg-white p-4',
            'shadow-[0_15px_30px_0_rgba(0,0,0,0.1)]',
          )}
        >
          {/* Select all / Deselect all */}
          <div className="mb-3 flex items-center gap-3">
            {allFilteredSelected ? (
              <button
                type="button"
                onClick={deselectAll}
                className="text-[11px] font-normal uppercase tracking-wide text-text-muted hover:text-black transition-colors"
              >
                Deselect all
              </button>
            ) : (
              <button
                type="button"
                onClick={selectAll}
                className="text-[11px] font-normal uppercase tracking-wide text-text-muted hover:text-black transition-colors"
              >
                Select all
              </button>
            )}
          </div>

          {/* Search input */}
          <div className="mb-3">
            <label htmlFor="ms-search" className="sr-only">
              Search options
            </label>
            <input
              ref={searchRef}
              id="ms-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className={cn(
                'w-full rounded border border-border bg-[rgba(0,0,0,0.05)] px-3 py-1.5 text-sm',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
              )}
            />
          </div>

          {/* Options list */}
          <ul className="max-h-60 overflow-y-auto">
            {filteredOptions.map((option) => (
              <li key={option} className="py-[5px]">
                <label
                  htmlFor={`ms-opt-${option}`}
                  className={cn(
                    'flex cursor-pointer items-center gap-2 rounded px-1 py-0.5 text-sm',
                    'hover:bg-hover-bg transition-colors',
                    selected.has(option) && 'bg-hover-bg',
                  )}
                >
                  <input
                    id={`ms-opt-${option}`}
                    type="checkbox"
                    checked={selected.has(option)}
                    onChange={() => toggleOption(option)}
                    className="h-3.5 w-3.5 accent-primary-500"
                  />
                  {option}
                </label>
              </li>
            ))}
            {filteredOptions.length === 0 && (
              <li className="py-2 text-center text-sm text-text-muted">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
