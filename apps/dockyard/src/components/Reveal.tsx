import { useCallback, useRef, useState, type ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'
import { prefersReducedMotion } from '../lib/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Scroll reveal: the band fades up the first time it enters the viewport, matching the reference
 * page's fade/fade-up pattern. It starts visible when there is no observer to drive it (jsdom) or
 * when the visitor asked for reduced motion, so content is never left invisible.
 */
export function Reveal({ children, className, delay }: RevealProps) {
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined' || prefersReducedMotion(),
  )
  const observerRef = useRef<IntersectionObserver | null>(null)

  const setNode = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) {
        observerRef.current?.disconnect()
        return
      }
      if (visible) {
        return
      }
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      })
      observer.observe(node)
      observerRef.current = observer
    },
    [visible],
  )

  return (
    <div
      ref={setNode}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        'transition-all duration-700 ease-out',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
