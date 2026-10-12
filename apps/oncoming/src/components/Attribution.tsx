import { cn } from '@free-react-templates/ui'

export interface AttributionProps {
  className?: string
}

/**
 * The template's only outbound credit, per the monorepo convention: the design
 * itself ships no footer band, so this small line under the social row is the
 * single deliberate addition.
 */
export function Attribution({ className }: AttributionProps) {
  return (
    <p
      className={cn(
        'px-[15px] pb-[30px] text-center font-sans text-[12px] leading-[1.5] text-white/70',
        className,
      )}
    >
      More templates at{' '}
      <a
        href="https://www.componentdock.com/"
        className="underline transition-opacity duration-[400ms] hover:opacity-80"
      >
        Component Dock
      </a>
    </p>
  )
}
