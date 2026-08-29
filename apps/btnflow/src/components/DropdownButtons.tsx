import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const colors = [
  {
    bg: 'bg-blue',
    shadow: 'shadow-[3px_5px_0_0_var(--color-blue-shadow)]',
    hover: 'hover:bg-blue/90',
  },
  {
    bg: 'bg-indigo',
    shadow: 'shadow-[3px_5px_0_0_var(--color-indigo-shadow)]',
    hover: 'hover:bg-indigo/90',
  },
  {
    bg: 'bg-purple',
    shadow: 'shadow-[3px_5px_0_0_var(--color-purple-shadow)]',
    hover: 'hover:bg-purple/90',
  },
  {
    bg: 'bg-pink',
    shadow: 'shadow-[3px_5px_0_0_var(--color-pink-shadow)]',
    hover: 'hover:bg-pink/90',
  },
  {
    bg: 'bg-red',
    shadow: 'shadow-[3px_5px_0_0_var(--color-red-shadow)]',
    hover: 'hover:bg-red/90',
  },
  {
    bg: 'bg-orange',
    shadow: 'shadow-[3px_5px_0_0_var(--color-orange-shadow)]',
    hover: 'hover:bg-orange/90',
  },
  {
    bg: 'bg-green',
    shadow: 'shadow-[3px_5px_0_0_var(--color-green-shadow)]',
    hover: 'hover:bg-green/90',
  },
  {
    bg: 'bg-teal',
    shadow: 'shadow-[3px_5px_0_0_var(--color-teal-shadow)]',
    hover: 'hover:bg-teal/90',
  },
]

const menuItems = ['Action', 'Another action', 'Something else here']

export function DropdownButtons() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
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
