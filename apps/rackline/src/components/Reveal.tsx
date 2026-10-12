import { useCallback, useRef, useState, type ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'
import { prefersReducedMotion } from '../lib/prefers-reduced-motion'

export interface RevealProps {
  children?: ReactNode
  className?: string
  /** Stagger in milliseconds, used by the plan cards (100 / 200 / 300). */
  delayMs?: number
}

/**
 * Scroll-reveal wrapper: the block fades in once as it crosses roughly 130 px
 * into the viewport and never reverses, optionally after a stagger delay. The
 * content stays in the DOM the whole time (opacity only), and it renders fully
 * visible straight away when the visitor reduces motion or the environment has
 * no IntersectionObserver.
 */
export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const [visible, setVisible] = useState(() => prefersReducedMotion())
  const observerRef = useRef<IntersectionObserver | null>(null)

  const setNode = useCallback((node: HTMLDivElement | null) => {
    if (!node) {
      observerRef.current?.disconnect()
      return
    }
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -130px 0px' },
    )
    observer.observe(node)
    observerRef.current = observer
  }, [])

  const style = delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined

  return (
    <div
      ref={setNode}
      style={style}
      className={cn(
        'transition-opacity duration-500 ease-in',
        visible ? 'opacity-100' : 'opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
