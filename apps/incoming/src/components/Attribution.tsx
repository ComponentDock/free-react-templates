import { Heart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface AttributionProps {
  className?: string
}

/** The template's only outbound credit, per the monorepo convention. */
export function Attribution({ className }: AttributionProps) {
  return (
    <footer
      className={cn(
        'pt-[16px] text-center font-sans text-[14px] leading-[1.5] text-muted',
        className,
      )}
    >
      Made with <Heart className="inline size-[14px] text-brand" aria-hidden="true" /> by{' '}
      <a
        href="https://www.componentdock.com/"
        className="text-muted underline transition-colors duration-[400ms] hover:text-brand"
      >
        Component Dock
      </a>
    </footer>
  )
}
