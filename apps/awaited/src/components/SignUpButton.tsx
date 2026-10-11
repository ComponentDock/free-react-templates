import { cn } from '@free-react-templates/ui'

export interface SignUpButtonProps {
  /** The call to action; the design's equivalent of a sign-up label. */
  label?: string
  href?: string
  className?: string
}

/** The white pill action: 140×50, 25px radius, inverting to a dark fill on hover. */
export function SignUpButton({ label = 'Notify Me', href = '#', className }: SignUpButtonProps) {
  return (
    <a
      href={href}
      data-testid="sign-up"
      className={cn(
        'flex h-[50px] min-w-[140px] items-center justify-center rounded-pill bg-pill px-[15px]',
        'font-sans text-[18px] leading-[1.2] text-pill-label uppercase',
        'transition-all duration-[400ms] hover:bg-pill-hover hover:text-white',
        'focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none',
        className,
      )}
    >
      {label}
    </a>
  )
}
