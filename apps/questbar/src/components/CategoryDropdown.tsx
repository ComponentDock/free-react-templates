import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const CATEGORIES = [
  'All Product',
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports',
  'Books',
  'Toys',
  'Beauty',
]

interface CategoryDropdownProps {
  selected: string
  onSelect: (category: string) => void
}

export function CategoryDropdown({ selected, onSelect }: CategoryDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          'flex items-center gap-1 bg-brand-400 px-4 py-3 text-sm font-medium uppercase tracking-wide text-white',
          'hover:bg-brand-500 transition-colors',
        )}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {selected}
        <ChevronDown className="h-4 w-4" />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute left-0 z-10 mt-1 w-full min-w-[160px] border border-gray-200 bg-white shadow-md"
        >
          {CATEGORIES.map((cat) => (
            <li key={cat} role="option" aria-selected={cat === selected}>
              <button
                type="button"
                onClick={() => {
                  onSelect(cat)
                  setOpen(false)
                }}
                className={cn(
                  'w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100',
                  cat === selected && 'bg-gray-50 font-medium',
                )}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
