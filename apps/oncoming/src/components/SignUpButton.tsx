import { cn } from '@free-react-templates/ui'

export interface SignUpButtonProps {
  /** The call to action; the design's equivalent of a sign-up label. */
  label?: string
  href?: string
  className?: string
}

/**
 * The single action on the page: a min-140 × 50 white pill with a 25px radius
 * and an 18px UPPERCASE sans `#555` label. Hovering fills it with SOLID `#555`
 * and turns the label white — a solid dark fill rather than the translucent
 * wash used elsewhere in the family.
 */
export function SignUpButton({
  label = 'Get Early Access',
  href = '#',
  className,
}: SignUpButtonProps) {
  return (
    <a
      href={href}
      data-testid="sign-up"
      className={cn(
        'flex h-[50px] min-w-[140px] items-center justify-center rounded-pill bg-pill px-[15px]',
        'font-sans text-[18px] leading-[1.2] tracking-[0.04em] text-pill-label uppercase',
        'transition-all duration-[400ms] hover:bg-pill-hover hover:text-white',
        'focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none',
        className,
      )}
    >
      {label}
    </a>
  )
}
