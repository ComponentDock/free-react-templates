import { cn } from '@free-react-templates/ui'

interface BoltButtonProps {
  label: string
  bg: string
  hoverBg: string
  text?: string
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
  className?: string
}

/**
 * Rounded Bootstrap-style button with a hover darken effect.
 * Matches the "rounded" shape from Bootstrap Buttons 09.
 */
export function BoltButton({
  label,
  bg,
  hoverBg,
  text = '#fff',
  size = 'md',
  block = false,
  className,
}: BoltButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-5 py-2 text-sm',
    lg: 'px-7 py-3 text-base',
  }

  return (
    <button
      className={cn(
        'rounded font-bold uppercase tracking-wide transition-colors duration-200',
        sizeClasses[size],
        block && 'block w-full',
        className,
      )}
      style={{
        backgroundColor: bg,
        color: text,
      }}
      data-hover-bg={hoverBg}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.backgroundColor = hoverBg
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.backgroundColor = bg
      }}
    >
      {label}
    </button>
  )
}
