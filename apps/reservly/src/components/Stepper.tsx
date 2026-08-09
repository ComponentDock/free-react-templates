import { Minus, Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface StepperProps {
  label: string
  value: number
  min: number
  onChange: (value: number) => void
}

export function Stepper({ label, value, min, onChange }: StepperProps) {
  return (
    <div>
      <span className="block text-xs font-medium uppercase tracking-wide text-mist">{label}</span>
      <div className="mt-2 flex items-center justify-between rounded border border-gray-200 bg-paper">
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          disabled={value <= min}
          onClick={() => onChange(value - 1)}
          className="flex h-9 w-9 items-center justify-center text-ink transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Minus className="h-4 w-4" aria-hidden="true" />
        </button>
        <span data-testid={`stepper-${label.toLowerCase()}`} className="text-sm font-bold text-ink">
          {value}
        </span>
        <button
          type="button"
          aria-label={`Increase ${label}`}
          onClick={() => onChange(value + 1)}
          className={cn(
            'flex h-9 w-9 items-center justify-center text-ink transition-colors hover:bg-gray-200',
          )}
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
