import { cn } from '@free-react-templates/ui'

interface SkewedButtonProps {
  children: string
  href?: string
  type?: 'button' | 'submit'
  ariaLabel?: string
  className?: string
  onClick?: () => void
}

/**
 * Parallelogram CTA — the source's signature shape: the anchor/button is
 * skewed -30deg and the inner label span is counter-skewed back.
 */
export function SkewedButton({
  children,
  href,
  type = 'button',
  ariaLabel,
  className,
  onClick,
}: SkewedButtonProps) {
  const inner = <span className="inline-block skew-x-[30deg]">{children}</span>
  const classes = cn(
    'inline-block -skew-x-[30deg] bg-brand px-[30px] py-3.5 font-display text-sm font-bold uppercase tracking-[2px] text-white transition-colors hover:bg-brandhover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
    className,
  )
  if (href !== undefined) {
    return (
      <a href={href} aria-label={ariaLabel} className={classes} onClick={onClick}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type} aria-label={ariaLabel} className={classes} onClick={onClick}>
      {inner}
    </button>
  )
}

/** Orange skewed label chip (project titles, news categories). */
export function SkewedChip({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-block -skew-x-[32deg] bg-brand px-5 py-2 font-display text-xs font-bold uppercase tracking-[2px] text-white',
        className,
      )}
    >
      <span className="inline-block skew-x-[30deg]">{children}</span>
    </span>
  )
}
