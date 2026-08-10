import { cn } from '@free-react-templates/ui'
import { chipColors, type ChipCategory } from '../data'

interface ChipProps {
  label: string
  category: ChipCategory
  className?: string
}

/** Small uppercase category chip (radius 4px, letter-spaced, bold). */
export function Chip({ label, category, className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white',
        chipColors[category],
        className,
      )}
    >
      {label}
    </span>
  )
}
