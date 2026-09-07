import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'

interface CustomSelectProps {
  label: string
  options: string[]
  value: string
  onChange: (val: string) => void
}

export function CustomSelect({ label, options, value, onChange }: CustomSelectProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [close])

  return (
    <div ref={ref} className="relative mb-[26px]" onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        role="listbox"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen(!open)}
        className="flex h-[30px] w-full items-center justify-between border-0 border-b-2 border-ink bg-transparent text-[13px] font-semibold text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
      >
        <span>{value || label}</span>
        <ChevronDown className="h-[17px] w-[17px]" />
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full border border-drop bg-white">
          {options.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                role="option"
                aria-selected={value === opt}
                onClick={() => {
                  onChange(opt)
                  close()
                }}
                className="block w-full cursor-pointer border-0 bg-white px-[10px] py-[5px] text-left text-[13px] text-ink transition-colors hover:bg-drop-hv hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
