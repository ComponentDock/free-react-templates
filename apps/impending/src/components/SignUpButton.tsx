import { cn } from '@free-react-templates/ui'

export interface SignUpButtonProps {
  /** The call to action; the design's equivalent of a sign-up label. */
  label?: string
  href?: string
  className?: string
}

/**
 * The single action on the page: a min-140 × 50 white pill with a 25px radius
 * and an 18px ITALIC SERIF `#333` label in sentence case — no uppercase, unlike
 * the rest of the family. Hovering turns the fill translucent and the label
 * white, so the label stays legible on the dark page throughout.
 */
export function SignUpButton({ label = 'Get Notified', href = '#', className }: SignUpButtonProps) {
  return (
    <a
      href={href}
      data-testid="sign-up"
      className={cn(
        'flex h-[50px] min-w-[140px] items-center justify-center rounded-pill bg-pill px-[15px]',
        'font-heading text-[18px] leading-[1.2] text-pill-label italic',
        'transition-all duration-[400ms] hover:bg-pill-hover hover:text-white',
        'focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none',
        className,
      )}
    >
      {label}
    </a>
  )
}
