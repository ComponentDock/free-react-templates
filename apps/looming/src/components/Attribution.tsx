import { cn } from '@free-react-templates/ui'

export interface AttributionProps {
  className?: string
}

/**
 * The template's only outbound credit, per the monorepo convention: the design
 * itself ships no footer band, so this single small line under the panel's
 * content is the deliberate addition.
 */
export function Attribution({ className }: AttributionProps) {
  return (
    <p
      data-testid="attribution"
      className={cn(
        'px-[15px] pt-[40px] pb-[30px] text-center font-sans text-[12px] leading-[1.5] text-ink/60',
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
