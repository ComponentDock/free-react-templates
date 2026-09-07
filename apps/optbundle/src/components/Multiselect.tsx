import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronDown, X, Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface OptGroup {
  label: string
  options: string[]
}

export interface MultiselectProps {
  groups: OptGroup[]
  placeholder?: string
  className?: string
}

export function Multiselect({
  groups,
  placeholder = 'Select options...',
  className,
}: MultiselectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string[]>([])
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const filteredGroups = groups
    .map((g) => ({
      ...g,
      options: g.options.filter((o) => o.toLowerCase().includes(search.toLowerCase())),
    }))
    .filter((g) => g.options.length > 0)

  const toggleOption = useCallback((option: string) => {
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((s) => s !== option) : [...prev, option],
    )
  }, [])

  const removeOption = useCallback((e: React.MouseEvent, option: string) => {
    e.stopPropagation()
    setSelected((prev) => prev.filter((s) => s !== option))
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isOpen) {
      searchInputRef.current?.focus()
    }
  }, [isOpen])

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      {/* Trigger — div to avoid nested <button> with chip remove buttons */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsOpen(!isOpen)
          }
        }}
        className={cn(
          'flex min-h-[48px] w-full cursor-pointer flex-wrap items-center gap-2 rounded-[4px] border bg-white px-3 py-2 text-left transition-colors',
          isOpen
            ? 'border-primary-500 ring-1 ring-primary-500'
            : 'border-primary-500 hover:border-primary-600',
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {selected.length === 0 && <span className="text-gray-400">{placeholder}</span>}
        {selected.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-1 rounded-sm bg-black/10 px-2.5 py-1 text-sm"
          >
            {item}
            <span
              role="button"
              tabIndex={-1}
              onClick={(e) => removeOption(e, item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  e.stopPropagation()
                  setSelected((prev) => prev.filter((s) => s !== item))
                }
              }}
              className="ml-0.5 cursor-pointer rounded-full p-0.5 hover:bg-black/20"
              aria-label={`Remove ${item}`}
            >
              <X className="h-3 w-3" />
            </span>
          </span>
        ))}
        <ChevronDown
          className={cn(
            'ml-auto h-4 w-4 text-gray-500 transition-transform',
            isOpen && 'rotate-180',
          )}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full rounded-[4px] border border-primary-500 bg-white shadow-lg">
          {/* Search */}
          <div className="border-b border-gray-200 p-2">
            <div className="flex items-center gap-2 rounded bg-gray-50 px-2 py-1">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          {/* Options */}
          <ul className="max-h-64 overflow-y-auto py-1" role="listbox" aria-label={placeholder}>
            {filteredGroups.length === 0 && (
              <li className="px-4 py-2 text-sm text-gray-500">No results found</li>
            )}
            {filteredGroups.map((group) => (
              <li key={group.label} role="group" aria-label={group.label}>
                <div className="bg-black/5 px-3 py-2.5 text-[17px] font-normal text-gray-800">
                  {group.label}
                </div>
                {group.options.map((option) => {
                  const isSelected = selected.includes(option)
                  return (
                    <li
                      key={option}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => toggleOption(option)}
                      className={cn(
                        'cursor-pointer px-4 py-2.5 text-sm transition-colors hover:bg-primary-500 hover:text-white',
                        isSelected && 'bg-primary-500/10',
                      )}
                    >
                      {option}
                    </li>
                  )
                })}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
