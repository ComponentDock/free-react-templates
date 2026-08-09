import { useCallback, useRef, useState, type ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

interface RevealProps {
  children?: ReactNode
  className?: string
  delay?: number
}

/* Scroll-reveal wrapper: fades content up once it enters the viewport
   (matching the demo's animated sections). Falls back to instantly visible
   when IntersectionObserver is unavailable (jsdom). */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const [visible, setVisible] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const setNode = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      if (typeof IntersectionObserver === 'undefined') {
        setVisible(true)
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
    } else {
      observerRef.current?.disconnect()
    }
  }, [])

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
