import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface CustomDropdownProps {
  label: string
  id: string
  options: string[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export function CustomDropdown({
  label,
  id,
  options,
  value,
  onChange,
  className,
}: CustomDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close()
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open, close])

  const displayValue = value || options[0] || label

  return (
    <div ref={ref} className={cn('relative mb-[15px]', className)}>
      <label htmlFor={id} className="mb-[5px] block text-[13px]">
        {label}
      </label>
      <button
        id={id}
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex w-full items-center justify-between rounded-[5px] border border-line bg-transparent px-5 py-[15px] text-[13px] text-ink outline-none transition-colors hover:border-focus"
      >
        <span>{displayValue}</span>
        <ChevronDown size={10} className="text-ink" />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute z-[99] mt-1 w-full rounded-[5px] border border-line bg-card"
        >
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={opt === value}
              onClick={() => {
                onChange(opt)
                close()
              }}
              className={cn(
                'cursor-pointer px-5 py-[5px] text-[13px] transition-colors',
                opt === value ? 'bg-brand text-white' : 'hover:bg-brand hover:text-white',
              )}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
