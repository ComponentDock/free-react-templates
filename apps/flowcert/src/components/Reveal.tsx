import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export interface RevealProps {
  children: ReactNode
  className?: string
}

function prefersReducedMotion(): boolean {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Opt-in band reveal: content fades and rises 20 px once, when it first
 * intersects. Both escape hatches are honoured — no `IntersectionObserver`
 * (jsdom, old browsers) or a reduced-motion preference renders the band
 * visible immediately, so nothing can be left at `opacity: 0`.
 */
export function Reveal({ children, className }: RevealProps) {
  const [shown, setShown] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const animated = typeof IntersectionObserver !== 'undefined' && !prefersReducedMotion()

  useEffect(() => {
    if (!animated) {
      return
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setShown(true)
      }
    })

    observer.observe(ref.current!)
    return () => observer.disconnect()
  }, [animated])

  const pending = animated && !shown

  return (
    <div
      ref={ref}
      data-reveal={pending ? 'pending' : 'shown'}
      className={cn(
        'transition-all duration-700 ease-out',
        pending ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100',
        className,
      )}
    >
      {children}
    </div>
  )
}
