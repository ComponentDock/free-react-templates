import { cn } from '@free-react-templates/ui'
import type { PillColor } from '../data'

const pillClasses: Record<PillColor, string> = {
  primary: 'bg-[#2f89fc]',
  danger: 'bg-[#dc3545]',
  success: 'bg-[#28a745]',
  warning: 'bg-[#ffc107]',
  secondary: 'bg-[#6c757d]',
}

interface CategoryPillProps {
  label: string
  color: PillColor
  className?: string
}

/** Tiny uppercase category pill (2px 10px, .2em tracking, .6rem, white text). */
export function CategoryPill({ label, color, className }: CategoryPillProps) {
  return (
    <span
      className={cn(
        'inline-block rounded px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white',
        pillClasses[color],
        className,
      )}
    >
      {label}
    </span>
  )
}
