import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface OptionGroup {
  label: string
  options: string[]
  maxSelections: number
}

interface GroupcapMultiSelectProps {
  groups: OptionGroup[]
}

function countSelected(group: OptionGroup, selected: Set<string>): number {
  return group.options.filter((opt) => selected.has(opt)).length
}

function isAtLimit(group: OptionGroup, selected: Set<string>): boolean {
  return countSelected(group, selected) >= group.maxSelections
}

/** Pure function: returns new Set with option toggled, respecting group limits. */
export function toggleOptionInSet(
  option: string,
  prev: Set<string>,
  groups: OptionGroup[],
): Set<string> {
  const next = new Set(prev)
  if (next.has(option)) {
    next.delete(option)
  } else {
    const group = groups.find((g) => g.options.includes(option))
    if (group && countSelected(group, next) < group.maxSelections) {
      next.add(option)
    }
  }
  return next
}

/** Pure function: fills each group up to its maxSelections. */
export function selectAllInSet(prev: Set<string>, groups: OptionGroup[]): Set<string> {
  const next = new Set(prev)
  for (const group of groups) {
    let remaining = group.maxSelections - countSelected(group, next)
    for (const opt of group.options) {
      if (remaining <= 0) break
      if (!next.has(opt)) {
        next.add(opt)
        remaining--
      }
    }
  }
  return next
}

export function GroupcapMultiSelect({ groups }: GroupcapMultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const handleToggleOption = useCallback(
    (option: string) => {
      setSelected((prev) => toggleOptionInSet(option, prev, groups))
    },
    [groups],
  )

  const handleSelectAll = useCallback(() => {
    setSelected((prev) => selectAllInSet(prev, groups))
  }, [groups])

  const handleDeselectAll = useCallback(() => {
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

  const hasAnySelected = selected.size > 0

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
            <label htmlFor="groupcap-search" className="sr-only">
              Search options
            </label>
            <input
              ref={searchRef}
              id="groupcap-search"
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
            {hasAnySelected ? (
              <button
                type="button"
                onClick={handleDeselectAll}
                className="rounded border border-action-border bg-action-btn px-3 py-1 text-xs font-normal text-text-muted transition-colors hover:bg-hover-bg"
              >
                Deselect all
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSelectAll}
                className="rounded border border-action-border bg-action-btn px-3 py-1 text-xs font-normal text-text-muted transition-colors hover:bg-hover-bg"
              >
                Select all
              </button>
            )}
          </div>

          {/* Grouped options list */}
          <ul className="max-h-60 overflow-y-auto">
            {groups.map((group) => {
              const filtered = group.options.filter((opt) =>
                opt.toLowerCase().includes(search.toLowerCase()),
              )
              if (filtered.length === 0) return null
              const atLimit = isAtLimit(group, selected)

              return (
                <li key={group.label}>
                  {/* Group header */}
                  <div className="mb-1 mt-2 px-2 text-xs font-medium text-text-dim">
                    {group.label} (Limit {group.maxSelections})
                  </div>
                  {/* Options in this group */}
                  {filtered.map((option) => {
                    const isSelected = selected.has(option)
                    const isDisabled = atLimit && !isSelected
                    return (
                      <div key={option} className="py-[3px]">
                        <label
                          htmlFor={`groupcap-opt-${option}`}
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
                              id={`groupcap-opt-${option}`}
                              type="checkbox"
                              checked={isSelected}
                              disabled={isDisabled}
                              onChange={() => handleToggleOption(option)}
                              className="h-3.5 w-3.5 accent-primary-500"
                            />
                            {option}
                          </div>
                          {isSelected && <Check className="h-3 w-3 text-check" />}
                        </label>
                      </div>
                    )
                  })}
                </li>
              )
            })}
            {groups.every(
              (g) =>
                g.options.filter((o) => o.toLowerCase().includes(search.toLowerCase())).length ===
                0,
            ) && <li className="py-2 text-center text-sm text-text-muted">No results found</li>}
          </ul>
        </div>
      )}
    </div>
  )
}
