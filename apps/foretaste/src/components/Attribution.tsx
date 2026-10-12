import { cn } from '@free-react-templates/ui'

export interface AttributionProps {
  className?: string
}

/**
 * The template's only outbound credit, per the monorepo convention: the design
 * ships no footer band, so this single small line is the deliberate addition,
 * positioned by whoever renders it.
 */
export function Attribution({ className }: AttributionProps) {
  return (
    <p
      data-testid="attribution"
      className={cn('font-sans text-[11px] leading-[1.5] text-white/70', className)}
    >
      More templates at{' '}
      <a
        href="https://www.componentdock.com/"
        className="underline transition-opacity duration-[400ms] hover:opacity-70"
      >
        Component Dock
      </a>
    </p>
  )
}
