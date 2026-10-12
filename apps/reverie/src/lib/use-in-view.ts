import { useEffect, useState, type RefObject } from 'react'

/**
 * True once the watched band has entered the viewport, and true forever after: the observer that
 * flipped it disconnects on the first crossing, so a number never rolls up twice.
 */
export function useInView(ref: RefObject<Element | null>, threshold = 0.3): boolean {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current as Element
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold])

  return inView
}
