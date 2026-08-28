import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const colors = [
  {
    bg: 'bg-primary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-primary-shadow)]',
    hover: 'hover:bg-primary/90',
  },
  {
    bg: 'bg-secondary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-secondary-shadow)]',
    hover: 'hover:bg-secondary/90',
  },
  {
    bg: 'bg-tertiary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-tertiary-shadow)]',
    hover: 'hover:bg-tertiary/90',
  },
  {
    bg: 'bg-quarternary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-quarternary-shadow)]',
    hover: 'hover:bg-quarternary/90',
  },
]

const menuItems = ['Action', 'Another action', 'Something else here']

export function DropdownButtons() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {colors.map((c, i) => (
        <div key={`dropdown-${i}`} className="relative">
          <button
            type="button"
            onClick={() => toggle(i)}
            className={`${c.bg} ${c.shadow} ${c.hover} inline-flex items-center gap-2 rounded px-4 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5`}
          >
            Dropdown button
            <ChevronDown className="h-4 w-4" />
          </button>
          {openIndex === i && (
            <div className="absolute left-0 z-10 mt-2 w-56 rounded-md bg-white py-1 shadow-lg">
              {menuItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
