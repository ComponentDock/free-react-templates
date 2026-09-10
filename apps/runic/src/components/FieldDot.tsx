import { cn } from '@free-react-templates/ui'

interface FieldDotProps {
  active?: boolean
}

export function FieldDot({ active = false }: FieldDotProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-pink transition-colors',
        active && 'bg-dot-active',
      )}
    />
  )
}
