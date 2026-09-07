import { useState, useRef, useEffect, useCallback, useMemo } from 'react'

const US_STATES = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
] as const

export interface MultiselectProps {
  states?: readonly string[]
}

export function Multiselect({ states = US_STATES }: MultiselectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const filtered = useMemo(() => {
    if (!search) return states
    const lower = search.toLowerCase()
    return states.filter((s) => s.toLowerCase().includes(lower))
  }, [search, states])

  const allSelected = filtered.length > 0 && filtered.every((s) => selected.has(s))

  const toggle = useCallback((state: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(state)) {
        next.delete(state)
      } else {
        next.add(state)
      }
      return next
    })
  }, [])

  const toggleAll = useCallback(() => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (allSelected) {
        filtered.forEach((s) => next.delete(s))
      } else {
        filtered.forEach((s) => next.add(s))
      }
      return next
    })
  }, [allSelected, filtered])

  const handleTriggerClick = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setSearch('')
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        handleClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, handleClose])

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    },
    [handleClose],
  )

  const triggerText = selected.size === 0 ? 'None selected' : `${selected.size} selected`

  return (
    <div ref={containerRef} className="relative" onKeyDown={handleKeyDown}>
      <button
        type="button"
        onClick={handleTriggerClick}
        className="flex w-full items-center justify-between rounded border border-border bg-surface-card px-3 py-2.5 text-left text-sm shadow-[0_1px_1px_0_rgba(0,0,0,0.1)] transition-shadow hover:shadow-[0_2px_10px_0_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-primary-300"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={selected.size === 0 ? 'text-text-secondary' : 'text-text-primary'}>
          {triggerText}
        </span>
        <svg
          className={`ml-2 h-4 w-4 text-text-secondary transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="State selector"
          aria-multiselectable="true"
          className="absolute z-50 mt-1 w-full rounded border border-gray-200 bg-surface-card shadow-[0_15px_30px_0_rgba(0,0,0,0.1)]"
        >
          <div className="border-b border-gray-200 p-2">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search states..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded border border-gray-200 px-3 py-1.5 text-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
              aria-label="Search states"
            />
          </div>

          <div className="border-b border-gray-200 px-3 py-1.5">
            <button
              type="button"
              onClick={toggleAll}
              className="text-xs font-medium uppercase tracking-wide text-text-secondary transition-colors hover:text-text-primary"
            >
              {allSelected ? 'Deselect all' : 'Select all'}
            </button>
          </div>

          <ul className="max-h-64 overflow-y-auto">
            {filtered.map((state) => {
              const isSelected = selected.has(state)
              return (
                <li key={state}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => toggle(state)}
                    className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors ${
                      isSelected
                        ? 'bg-primary-50 text-text-primary'
                        : 'text-text-primary hover:bg-surface-hover'
                    }`}
                  >
                    <span
                      className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border ${
                        isSelected ? 'border-primary-500 bg-primary-500' : 'border-border'
                      }`}
                    >
                      {isSelected && (
                        <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </span>
                    {state}
                  </button>
                </li>
              )
            })}
            {filtered.length === 0 && (
              <li className="px-3 py-4 text-center text-sm text-text-secondary">No states found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
