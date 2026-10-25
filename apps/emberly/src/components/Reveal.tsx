import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'
import { useReveal } from '../lib/useReveal'

interface RevealProps {
  readonly children: ReactNode
  readonly className?: string
  /** The reference staggers 12 of its 14 reveals by 100–300 ms. */
  readonly delay?: number
}

/**
 * One band's reveal wrapper. `data-animate` mirrors the reference's hook; the
 * element is already at full opacity wherever motion is reduced or the
 * observer is missing.
 */
export function Reveal({ children, className, delay }: RevealProps) {
  const { ref, shown } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      data-animate
      data-shown={shown ? 'true' : 'false'}
      data-delay={delay === undefined ? undefined : delay}
      style={delay === undefined ? undefined : { transitionDelay: `${delay}ms` }}
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
