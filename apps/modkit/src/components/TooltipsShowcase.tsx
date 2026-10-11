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
  top: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
  right: 'top-1/2 left-full ml-2 -translate-y-1/2',
  bottom: 'top-full left-1/2 mt-2 -translate-x-1/2',
  left: 'top-1/2 right-full mr-2 -translate-y-1/2',
}

export function TooltipsShowcase() {
  return (
    <Band
      title="Tooltips"
      lead="Documentation and examples for adding the kit's tooltips: white cards with black text, shown on hover or keyboard focus."
    >
      <DemoPanel className="flex flex-wrap items-center gap-10 py-12">
        {PLACEMENTS.map(({ id, label }) => (
          <span key={id} className="group relative inline-block">
            <KitButton
              color="secondary"
              variant="outline"
              size="md"
              aria-describedby={`modkit-tooltip-${id}`}
            >
              Tooltip {label}
            </KitButton>
            <span
              role="tooltip"
              id={`modkit-tooltip-${id}`}
              className={cn(
                'pointer-events-none absolute z-20 block max-w-[200px] px-2.5 py-1 text-[0.85rem] text-black opacity-0 shadow-kit-tooltip transition-opacity group-focus-within:opacity-100 group-hover:opacity-100',
                'bg-white',
                FLOAT_POSITION[id],
              )}
            >
              Tooltip {label}
            </span>
          </span>
        ))}
      </DemoPanel>
    </Band>
  )
}
