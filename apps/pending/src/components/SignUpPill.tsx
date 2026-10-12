import { cn } from '@free-react-templates/ui'

export interface SignUpPillProps {
  className?: string
}

/**
 * The header call to action: the family's ONLY outline pill — a fully
 * transparent control with a hairline white border and a 25px radius, whose fill
 * only arrives on hover, when the label switches to the near-black hover ink.
 */
export function SignUpPill({ className }: SignUpPillProps) {
  return (
    <div data-testid="cta-wrap" className={cn('my-[10px]', className)}>
      <a
        href="#"
        data-testid="signup-pill"
        className={cn(
          'flex h-[50px] min-w-[140px] items-center justify-center rounded-[25px]',
          'border border-white bg-transparent px-[15px]',
          'font-sans text-[14px] leading-[1.2] font-semibold text-white uppercase',
          'transition-all duration-[400ms] hover:bg-white hover:text-hover-ink',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
        )}
      >
        Sign Up
      </a>
    </div>
  )
}
