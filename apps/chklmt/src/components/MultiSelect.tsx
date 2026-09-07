import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface MultiSelectProps {
  options: string[]
  maxSelections?: number
}

export function MultiSelect({ options, maxSelections }: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const filteredOptions = options.filter((opt) => opt.toLowerCase().includes(search.toLowerCase()))

  const isAtLimit = maxSelections !== undefined && selected.size >= maxSelections

  const allFilteredSelected =
    filteredOptions.length > 0 && (isAtLimit || filteredOptions.every((opt) => selected.has(opt)))

  const toggleOption = useCallback(
    (option: string) => {
      setSelected((prev) => {
        const next = new Set(prev)
        if (next.has(option)) {
          next.delete(option)
        } else if (!isAtLimit) {
          next.add(option)
        }
        return next
      })
    },
    [isAtLimit],
  )

  const selectAll = useCallback(() => {
    if (maxSelections !== undefined) {
      setSelected(new Set(filteredOptions.slice(0, maxSelections)))
    } else {
      setSelected(new Set(filteredOptions))
    }
  }, [filteredOptions, maxSelections])

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

  const buttonLabel = selected.size === 0 ? 'Nothing selected' : Array.from(selected).join(', ')

  return (
    <div ref={containerRef} className="relative w-full max-w-xs">
      {/* Trigger button — Bootstrap form-control style */}
      <button
        type="button"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={cn(
          'flex w-full items-center justify-between rounded border border-border bg-white px-3 py-2 text-left text-sm',
          'shadow-[0_1px_1px_0_rgba(0,0,0,0.075)_inset]',
          'hover:shadow-[0_2px_10px_0_rgba(0,0,0,0.1)] transition-shadow',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
          isOpen && 'shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]',
        )}
      >
        <span className={cn(selected.size === 0 ? 'text-text-muted' : 'text-text')}>
          {buttonLabel}
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
            'absolute left-0 right-0 z-50 mt-1 rounded bg-white p-2',
            'shadow-[0_5px_10px_0_rgba(0,0,0,0.2)]',
          )}
        >
          {/* Search input */}
          <div className="mb-2">
            <label htmlFor="chklmt-search" className="sr-only">
              Search options
            </label>
            <input
              ref={searchRef}
              id="chklmt-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className={cn(
                'w-full rounded border border-border bg-white px-3 py-1.5 text-sm',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
              )}
            />
          </div>

          {/* Select all / Deselect all — action buttons */}
          <div className="mb-2 flex gap-1">
            {allFilteredSelected ? (
              <button
                type="button"
                onClick={deselectAll}
                className="rounded border border-action-border bg-action-btn px-3 py-1 text-xs font-normal text-text-muted transition-colors hover:bg-hover-bg"
              >
                Deselect all
              </button>
            ) : (
              <button
                type="button"
                onClick={selectAll}
                className="rounded border border-action-border bg-action-btn px-3 py-1 text-xs font-normal text-text-muted transition-colors hover:bg-hover-bg"
              >
                Select all
              </button>
            )}
          </div>

          {/* Options list */}
          <ul className="max-h-60 overflow-y-auto">
            {filteredOptions.map((option) => {
              const isSelected = selected.has(option)
              const isDisabled = isAtLimit && !isSelected
              return (
                <li key={option} className="py-[3px]">
                  <label
                    htmlFor={`chklmt-opt-${option}`}
                    className={cn(
                      'flex cursor-pointer items-center justify-between rounded px-2 py-1 text-sm',
                      'transition-colors',
                      isSelected && 'bg-hover-bg',
                      !isSelected && !isDisabled && 'hover:bg-hover-bg',
                      isDisabled && 'cursor-not-allowed opacity-50',
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        id={`chklmt-opt-${option}`}
                        type="checkbox"
                        checked={isSelected}
                        disabled={isDisabled}
                        onChange={() => toggleOption(option)}
                        className="h-3.5 w-3.5 accent-primary-500"
                      />
                      {option}
                    </div>
                    {isSelected && <Check className="h-3 w-3 text-primary-500" />}
                  </label>
                </li>
              )
            })}
            {filteredOptions.length === 0 && (
              <li className="py-2 text-center text-sm text-text-muted">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
