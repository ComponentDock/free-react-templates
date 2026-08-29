import { useState, useRef, useEffect } from 'react'

interface DropdownItem {
  label: string
}

const dropdownData: { color: string; bg: string; label: string; items: DropdownItem[] }[] = [
  {
    color: 'text-white',
    bg: 'bg-paddle-primary',
    label: 'Primary',
    items: [{ label: 'Action' }, { label: 'Another action' }, { label: 'Something else here' }],
  },
  {
    color: 'text-white',
    bg: 'bg-paddle-secondary',
    label: 'Secondary',
    items: [{ label: 'Action' }, { label: 'Another action' }, { label: 'Something else here' }],
  },
  {
    color: 'text-white',
    bg: 'bg-paddle-tertiary',
    label: 'Tertiary',
    items: [{ label: 'Action' }, { label: 'Another action' }, { label: 'Something else here' }],
  },
  {
    color: 'text-paddle-dark',
    bg: 'bg-paddle-quarternary',
    label: 'Quarternary',
    items: [{ label: 'Action' }, { label: 'Another action' }, { label: 'Something else here' }],
  },
]

function Dropdown({ color, bg, label, items }: (typeof dropdownData)[number]) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div ref={ref} className="relative" data-testid={`dropdown-${label.toLowerCase()}`}>
      <button
        className={`btn-round ${bg} ${color} btn-paddle w-full text-center`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
      </button>
      {open && (
        <div className="dropdown-menu absolute left-0 z-10 mt-2 w-full rounded bg-white py-1">
          {items.map((item) => (
            <button
              key={item.label}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function Dropdowns() {
  return (
    <section data-testid="dropdowns" className="mb-12">
      <h2 className="mb-6 text-base font-medium text-paddle-heading">Dropdown Buttons</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {dropdownData.map((d) => (
          <Dropdown key={d.label} {...d} />
        ))}
      </div>
    </section>
  )
}
