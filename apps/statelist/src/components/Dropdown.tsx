import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronDown, Check } from 'lucide-react'

export interface State {
  name: string
  abbreviation: string
}

const US_STATES: State[] = [
  { name: 'Alabama', abbreviation: 'AL' },
  { name: 'Alaska', abbreviation: 'AK' },
  { name: 'American Samoa', abbreviation: 'AS' },
  { name: 'Arizona', abbreviation: 'AZ' },
  { name: 'Arkansas', abbreviation: 'AR' },
  { name: 'California', abbreviation: 'CA' },
  { name: 'Colorado', abbreviation: 'CO' },
  { name: 'Connecticut', abbreviation: 'CT' },
  { name: 'Delaware', abbreviation: 'DE' },
  { name: 'District of Columbia', abbreviation: 'DC' },
  { name: 'Federated States of Micronesia', abbreviation: 'FM' },
  { name: 'Florida', abbreviation: 'FL' },
  { name: 'Georgia', abbreviation: 'GA' },
  { name: 'Guam', abbreviation: 'GU' },
  { name: 'Hawaii', abbreviation: 'HI' },
  { name: 'Idaho', abbreviation: 'ID' },
  { name: 'Illinois', abbreviation: 'IL' },
  { name: 'Indiana', abbreviation: 'IN' },
  { name: 'Iowa', abbreviation: 'IA' },
  { name: 'Kansas', abbreviation: 'KS' },
  { name: 'Kentucky', abbreviation: 'KY' },
  { name: 'Louisiana', abbreviation: 'LA' },
  { name: 'Maine', abbreviation: 'ME' },
  { name: 'Marshall Islands', abbreviation: 'MH' },
  { name: 'Maryland', abbreviation: 'MD' },
  { name: 'Massachusetts', abbreviation: 'MA' },
  { name: 'Michigan', abbreviation: 'MI' },
  { name: 'Minnesota', abbreviation: 'MN' },
  { name: 'Mississippi', abbreviation: 'MS' },
  { name: 'Missouri', abbreviation: 'MO' },
  { name: 'Montana', abbreviation: 'MT' },
  { name: 'Nebraska', abbreviation: 'NE' },
  { name: 'Nevada', abbreviation: 'NV' },
  { name: 'New Hampshire', abbreviation: 'NH' },
  { name: 'New Jersey', abbreviation: 'NJ' },
  { name: 'New Mexico', abbreviation: 'NM' },
  { name: 'New York', abbreviation: 'NY' },
  { name: 'North Carolina', abbreviation: 'NC' },
  { name: 'North Dakota', abbreviation: 'ND' },
  { name: 'Northern Mariana Islands', abbreviation: 'MP' },
  { name: 'Ohio', abbreviation: 'OH' },
  { name: 'Oklahoma', abbreviation: 'OK' },
  { name: 'Oregon', abbreviation: 'OR' },
  { name: 'Palau', abbreviation: 'PW' },
  { name: 'Pennsylvania', abbreviation: 'PA' },
  { name: 'Puerto Rico', abbreviation: 'PR' },
  { name: 'Rhode Island', abbreviation: 'RI' },
  { name: 'South Carolina', abbreviation: 'SC' },
  { name: 'South Dakota', abbreviation: 'SD' },
  { name: 'Tennessee', abbreviation: 'TN' },
  { name: 'Texas', abbreviation: 'TX' },
  { name: 'Utah', abbreviation: 'UT' },
  { name: 'Vermont', abbreviation: 'VT' },
  { name: 'Virgin Islands', abbreviation: 'VI' },
  { name: 'Virginia', abbreviation: 'VA' },
  { name: 'Washington', abbreviation: 'WA' },
  { name: 'West Virginia', abbreviation: 'WV' },
  { name: 'Wisconsin', abbreviation: 'WI' },
  { name: 'Wyoming', abbreviation: 'WY' },
]

export interface DropdownProps {
  states?: State[]
}

export function Dropdown({ states = US_STATES }: DropdownProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const toggleState = useCallback((abbreviation: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(abbreviation)) {
        next.delete(abbreviation)
      } else {
        next.add(abbreviation)
      }
      return next
    })
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

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
    if (!isOpen) {
      setTimeout(() => searchRef.current?.focus(), 0)
    }
  }

  const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(searchValue.toLowerCase()),
  )

  const selectedCount = selected.size

  return (
    <div ref={containerRef} className="relative w-full max-w-md mx-auto">
      {/* Trigger */}
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select states"
        className="w-full flex items-center justify-between cursor-pointer select-none transition-shadow duration-300"
        style={{
          background: '#fff',
          padding: '15px 20px',
          borderRadius: 5,
          boxShadow: '0px 10px 30px -4px rgba(0,0,0,0.15)',
        }}
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleToggle()
          }
        }}
      >
        <div className="flex items-center gap-1">
          <span className="text-sm font-bold" style={{ color: '#808080' }}>
            States
          </span>
          <span className="text-sm font-bold" style={{ color: '#808080' }}>
            (<span style={{ color: '#ff5959' }}>{selectedCount === 0 ? 'Any' : selectedCount}</span>
            )
          </span>
        </div>
        <ChevronDown size={16} color="#ff5959" />
      </div>

      {/* Dropdown list */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="US States"
          className="w-full rounded-b overflow-y-auto"
          style={{
            background: '#fff',
            padding: '10px 20px',
            maxHeight: 240,
          }}
        >
          {/* Search input */}
          <input
            ref={searchRef}
            type="search"
            placeholder="Search states"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full text-sm outline-none mb-4"
            style={{
              padding: '5px 10px',
              borderRadius: 4,
              background: 'rgba(0,0,0,0.05)',
              border: 'none',
            }}
            aria-label="Search states"
          />

          {/* States list */}
          <ul className="list-none p-0 m-0 space-y-3 max-h-[200px] overflow-y-auto">
            {filteredStates.map((state) => {
              const isChecked = selected.has(state.abbreviation)
              return (
                <li key={state.abbreviation}>
                  <label
                    className="flex items-center cursor-pointer select-none transition-colors duration-300"
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      paddingLeft: 35,
                      position: 'relative',
                      marginBottom: 12,
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleState(state.abbreviation)}
                      className="sr-only"
                      aria-label={state.name}
                    />
                    <span
                      className="absolute left-0 top-0 flex items-center justify-center transition-all duration-300"
                      style={{
                        width: 20,
                        height: 20,
                        border: isChecked ? 'none' : '2px solid rgba(0,0,0,0.1)',
                        borderRadius: 4,
                        background: isChecked ? '#ff5959' : 'transparent',
                        fontSize: 14,
                      }}
                    >
                      {isChecked && <Check size={12} color="#fff" strokeWidth={3} />}
                    </span>
                    <span style={{ color: '#808080' }}>{state.name}</span>
                  </label>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
