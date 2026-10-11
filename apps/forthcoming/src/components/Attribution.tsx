import { cn } from '@free-react-templates/ui'

export interface AttributionProps {
  className?: string
}

/** The template's only outbound credit, per the monorepo convention. */
export function Attribution({ className }: AttributionProps) {
  return (
    <p
      className={cn(
        'pt-[20px] text-center font-sans text-[13px] leading-[1.5] text-credit',
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
