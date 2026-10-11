import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Band, DemoPanel } from './Band'
import { KitButton, type KitColor } from './KitButton'

const COLORS: KitColor[] = ['primary', 'secondary', 'info', 'success']

const ITEMS = ['Action', 'Another action', 'Something else here']

export function DropdownsShowcase() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <Band
      title="Dropdowns"
      lead="Toggle contextual overlays for displaying lists of links and more with the kit's dropdown plugin-free demo."
    >
      <DemoPanel className="flex flex-wrap items-center gap-4">
        {COLORS.map((color) => {
          const isOpen = open === color
          return (
            <div key={color} className="relative">
              <KitButton
                color={color}
                variant="solid"
                size="md"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : color)}
              >
                Dropdown button
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </KitButton>
              {isOpen ? (
                <ul className="absolute z-20 mt-1 min-w-[12rem] rounded bg-white py-2 text-[0.8rem] shadow-kit-menu">
                  {ITEMS.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        onClick={() => setOpen(null)}
                        className="block w-full cursor-pointer px-4 py-1.5 text-left text-body hover:bg-band"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          )
        })}
      </DemoPanel>
    </Band>
  )
}
