import { cn } from '@free-react-templates/ui'

interface ActionButtonProps {
  label: string
  onClick: () => void
  variant: 'primary' | 'muted'
  className?: string
}

export function ActionButton({ label, onClick, variant, className }: ActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex h-[50px] w-[130px] items-center justify-center rounded-[5px] text-[13px] text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
        variant === 'primary' && 'bg-brand hover:bg-brand-hover',
        variant === 'muted' && 'bg-muted hover:opacity-80',
        className,
      )}
    >
      {label}
    </button>
  )
}
