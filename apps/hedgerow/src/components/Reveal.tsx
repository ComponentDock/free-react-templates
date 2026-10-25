import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export type RevealMode = 'idle' | 'hidden' | 'shown'

const MOTION: Record<RevealMode, string> = {
  idle: '',
  hidden: 'opacity-0 translate-y-5',
  shown: 'opacity-100 translate-y-0',
}

/** The reference skips the whole reveal layer when motion is not wanted. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export interface RevealProps {
  children: ReactNode
  className?: string
  /** 100 / 150 / 200 in the reference; plain milliseconds here. */
  delay?: number
}

/**
 * Fade-and-rise on scroll. Only elements that begin below 80 % of the viewport
 * are hidden at all, so above-fold content is never invisible while waiting.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<RevealMode>('idle')

  useEffect(() => {
    const element = ref.current as HTMLDivElement
    const startsBelow = element.getBoundingClientRect().top > window.innerHeight * 0.8

    if (!startsBelow || prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      return
    }

    setMode('hidden')

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return
        }
        setMode('shown')
        observer.disconnect()
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-animate={mode}
      className={cn(
        'transition-all duration-700 ease-out motion-reduce:transition-none',
        MOTION[mode],
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
