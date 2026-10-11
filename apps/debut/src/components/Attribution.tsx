import { Heart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface AttributionProps {
  className?: string
}

export function Attribution({ className }: AttributionProps) {
  return (
    <p className={cn('pt-[16px] font-lato text-[13px] leading-[1.5] text-muted', className)}>
      Made with <Heart className="inline size-[14px] text-brand" aria-hidden="true" /> by{' '}
      <a
        href="https://www.componentdock.com/"
        className="text-brand transition-colors duration-[400ms] hover:underline"
      >
        Component Dock
      </a>
    </p>
  )
}
