import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'
import { useReveal } from '../lib/useReveal'

interface RevealProps {
  readonly children: ReactNode
  readonly className?: string
}

/**
 * One band's reveal wrapper. `data-animate` mirrors the reference's hook; the
 * element is already at full opacity wherever motion is reduced or the
 * observer is missing.
 */
export function Reveal({ children, className }: RevealProps) {
  const { ref, shown } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      data-animate
      data-shown={shown ? 'true' : 'false'}
      className={cn(
        'transition-all duration-[600ms] ease-out',
        shown ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
