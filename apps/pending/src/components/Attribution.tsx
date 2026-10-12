import { cn } from '@free-react-templates/ui'

export interface AttributionProps {
  className?: string
}

/**
 * The template's only outbound credit, per the monorepo convention. The design
 * itself ships no footer band, so this small line is pinned to the very bottom of
 * the column — absolutely, so the three bands keep their `space-between`
 * geometry untouched.
 */
export function Attribution({ className }: AttributionProps) {
  return (
    <p
      data-testid="attribution"
      className={cn(
        'absolute bottom-[10px] left-1/2 -translate-x-1/2 text-center',
        'font-sans text-[12px] leading-[1.5] text-white/40',
        className,
      )}
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
