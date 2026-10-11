import { Heart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface AttributionProps {
  className?: string
}

/** The template's only outbound credit, per the monorepo convention. */
export function Attribution({ className }: AttributionProps) {
  return (
    <footer
      className={cn('text-center font-heading text-[12px] leading-[1.4] text-credit', className)}
    >
      Made with <Heart className="inline size-[12px] text-credit" aria-hidden="true" /> by{' '}
      <a
        href="https://www.componentdock.com/"
        className="underline transition-colors duration-[400ms] hover:text-white"
      >
        Component Dock
      </a>
    </footer>
  )
}
