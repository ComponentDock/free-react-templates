import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Band, DemoPanel } from './Band'
import { KitButton } from './KitButton'

type Placement = 'top' | 'right' | 'bottom' | 'left'

const PLACEMENTS: { id: Placement; label: string }[] = [
  { id: 'top', label: 'on top' },
  { id: 'right', label: 'on right' },
  { id: 'bottom', label: 'on bottom' },
  { id: 'left', label: 'on left' },
]

const FLOAT_POSITION: Record<Placement, string> = {
  top: 'bottom-full left-1/2 mb-3 -translate-x-1/2',
  right: 'top-1/2 left-full ml-3 -translate-y-1/2',
  bottom: 'top-full left-1/2 mt-3 -translate-x-1/2',
  left: 'top-1/2 right-full mr-3 -translate-y-1/2',
}

export function PopoversShowcase() {
  const [open, setOpen] = useState<Placement | null>(null)

  return (
    <Band
      title="Popovers"
      lead="Documentation and examples for adding the kit's popovers—borderless, arrow-free cards floating next to their trigger."
    >
      <DemoPanel className="flex flex-wrap items-center gap-10 py-12">
        {PLACEMENTS.map(({ id, label }) => (
          <span key={id} className="relative inline-block">
            <KitButton
              color="primary"
              variant="solid"
              size="md"
              aria-expanded={open === id}
              onClick={() => setOpen(open === id ? null : id)}
            >
              Popover {label}
            </KitButton>
            {open === id ? (
              <span
                role="dialog"
                aria-label={`Popover ${label}`}
                className={cn(
                  'absolute z-20 block w-60 bg-white p-2.5 text-[0.9rem] leading-normal shadow-kit-popover',
                  FLOAT_POSITION[id],
                )}
              >
                <strong className="block font-normal text-kit-secondary">Popover title</strong>
                And here is some amazing content. It is very engaging, right?
              </span>
            ) : null}
          </span>
        ))}
      </DemoPanel>
    </Band>
  )
}
