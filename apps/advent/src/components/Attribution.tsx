import { Heart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface AttributionProps {
  className?: string
}

/** The template's only outbound credit, per the monorepo convention. */
export function Attribution({ className }: AttributionProps) {
  return (
    <footer className={cn('text-center font-sans text-[14px] leading-[1.5] text-white', className)}>
      Made with <Heart className="inline size-[14px] text-white" aria-hidden="true" /> by{' '}
      <a
        href="https://www.componentdock.com/"
        className="underline transition-opacity duration-[400ms] hover:opacity-80"
      >
        Component Dock
      </a>
    </footer>
  )
}
