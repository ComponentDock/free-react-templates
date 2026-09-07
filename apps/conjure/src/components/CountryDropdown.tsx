import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const COUNTRIES = ['United States', 'United Kingdom', 'Viet Nam'] as const

export function CountryDropdown() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-dropdown="country"]')) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  return (
    <div data-dropdown="country" className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((o) => !o)}
        className="flex h-[37px] w-full items-center justify-between border-b-2 border-line bg-transparent px-0 text-[15px] text-text outline-none transition-colors focus:border-sand"
      >
        <span>{selected ?? 'Your country'}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      {open && (
        <ul role="listbox" className="absolute z-20 mt-1 w-full border border-dropdown bg-white">
          {COUNTRIES.map((country) => (
            <li
              key={country}
              role="option"
              aria-selected={selected === country}
              onClick={(e) => {
                e.stopPropagation()
                setSelected(country)
                setOpen(false)
              }}
              className="cursor-pointer px-[10px] py-[5px] text-[14px] text-input transition-colors hover:bg-dropdown hover:text-white"
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
