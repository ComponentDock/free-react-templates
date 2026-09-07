import { useState, useRef, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'

export interface MultiSelectProps {
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
  tagClassName?: string
  placeholder?: string
  maxSelections?: number
}

export function MultiSelect({
  options,
  selected,
  onChange,
  tagClassName = 'bg-[#e5e4cc]',
  placeholder = 'Select Categories',
  maxSelections,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const atLimit = maxSelections !== undefined && selected.length >= maxSelections

  const available = options.filter(
    (opt) => !selected.includes(opt) && opt.toLowerCase().includes(search.toLowerCase()),
  )

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev)
    setSearch('')
  }, [])

  const handleSelect = useCallback(
    (option: string) => {
      if (maxSelections !== undefined && selected.length >= maxSelections) return
      onChange([...selected, option])
      setSearch('')
      inputRef.current?.focus()
    },
    [selected, onChange, maxSelections],
  )

  const handleRemove = useCallback(
    (option: string) => {
      onChange(selected.filter((s) => s !== option))
    },
    [selected, onChange],
  )

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

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={handleToggle}
        className="flex min-h-[42px] cursor-pointer flex-wrap items-center gap-1 rounded bg-white px-3 py-2"
        style={{
          borderRadius: '4px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
        }}
      >
        {selected.map((option) => (
          <span
            key={option}
            className={`inline-flex items-center gap-1 rounded-[3px] px-2 py-0.5 text-sm text-gray-700 ${tagClassName}`}
          >
            {option}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleRemove(option)
              }}
              className="ml-0.5 rounded-full p-0.5 transition-colors hover:bg-black/10"
              aria-label={`Remove ${option}`}
            >
              <X size={12} />
            </button>
          </span>
        ))}
        {selected.length === 0 && <span className="text-sm text-gray-400">{placeholder}</span>}
      </div>

      {isOpen && (
        <div
          className="absolute left-0 right-0 top-full z-10 mt-1 rounded bg-white"
          style={{
            borderRadius: '4px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
          }}
          role="listbox"
          aria-label="Available options"
        >
          <div className="border-b p-2">
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:border-[#5897fb] focus:outline-none"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          {atLimit && (
            <div className="border-b px-3 py-2 text-sm text-gray-500">Max selections reached</div>
          )}
          <ul className="max-h-60 overflow-y-auto">
            {available.length === 0 ? (
              <li className="px-3 py-2 text-sm text-gray-400">No results found</li>
            ) : (
              available.map((option) => (
                <li
                  key={option}
                  role="option"
                  aria-selected={false}
                  onClick={() => handleSelect(option)}
                  className="cursor-pointer px-3 py-2 text-sm transition-colors hover:bg-[#3875d7] hover:text-white"
                >
                  {option}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
